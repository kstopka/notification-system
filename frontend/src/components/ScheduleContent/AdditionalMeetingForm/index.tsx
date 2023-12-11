import { FormProvider } from "react-hook-form";
import { AdditionalMeetingFormProps } from "./types";
import FormTextInput from "../../atoms/FormTextInput";
import { useAdditionalMeeting } from "./logic";
import FormTextareaInput from "../../atoms/FormTextareaInput";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";

const AdditionalMeetingForm: React.FC<AdditionalMeetingFormProps> = ({
  updateData,
  handleAdditionalOpen,
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const { isLoading, methods, handleSubmit, onSubmit } = useAdditionalMeeting({
    updateData,
    handleAdditionalOpen,
    startDate,
  });

  const handleDateChange = (date: any) => {
    setStartDate(date);
  };

  useEffect(() => {
    console.log("startDate", startDate.toISOString().split("T")[0]);
  }, []);

  if (!startDate) return null;

  return (
    <div>
      <FormProvider {...methods}>
        <form id="additional-meeting-form" onSubmit={handleSubmit(onSubmit)}>
          <FormTextareaInput
            name="description"
            placeholder="Opis:"
            label="Opis:"
          />

          <FormTextInput name="address" placeholder="Adres:" label="Adres:" />

          <DatePicker
            selected={startDate}
            onChange={handleDateChange}
            dateFormat="dd/MM/yyyy HH:mm"
            showTimeInput
          />

          <div className="wrapperButton">
            <button className={`${isLoading ? "loading" : ""}`}>
              {isLoading ? "Proszę czekać" : "Wyślij"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default AdditionalMeetingForm;
