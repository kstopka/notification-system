import * as yup from "yup";
import { YUP } from "../../../constants";
import { DefaultValuesAdditionalMeetingForm } from "./types";

export const defaultValues: DefaultValuesAdditionalMeetingForm = {
  description: "",
  address: "",
};

export const schema = yup.object().shape({
  description: YUP.textArea,
  address: YUP.textArea,
});
