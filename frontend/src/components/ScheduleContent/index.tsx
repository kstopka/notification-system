import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as S from "./styles";
import { ScheduleContentProps } from "./types";

import { useCalendar } from "./logic";
import Modal from "../atoms/Modal";
import { getDate } from "../../utils/getDate";
import { useContextState, AuthCtx } from "../../contexted";
import { IAuthState } from "../../contexted/Auth/types";
import AdditionalMeetingForm from "./AdditionalMeetingForm";

const localizer = globalizeLocalizer(globalize);

const ScheduleContent: React.FC<ScheduleContentProps> = () => {
  const { permissions } = useContextState<IAuthState>(AuthCtx, ["permissions"]);
  const {
    meetings,
    selectedEvent,
    isActiveModal,
    isAdditionalOpen,
    handleAdditionalOpen,
    handleSelectEvent,
    handleActiveModal,
    getMeetings,
  } = useCalendar();
  return (
    <S.ScheduleWrapper>
      <Calendar
        localizer={localizer}
        events={meetings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onDoubleClickEvent={handleSelectEvent}
      />
      {isActiveModal && selectedEvent && (
        <Modal
          handleIsActiveModal={handleActiveModal}
          buttons={[
            <button className="secondary" onClick={handleActiveModal}>
              Wyjdź
            </button>,
          ]}
        >
          <div>
            <h5>Detale:</h5>
            <div>Tytuł: {selectedEvent.title}</div>
            <div>Opis: {selectedEvent.description}</div>
            <div>Data: {getDate(selectedEvent.start)}</div>
            <div>Adres: {selectedEvent.location}</div>
          </div>
        </Modal>
      )}
      {permissions && permissions === "admin" && (
        <S.ButtonWrapper>
          <h5>Zaplanuj nowe spotkanie: </h5>
          <button onClick={handleAdditionalOpen}>
            {isAdditionalOpen ? "Zamknij" : "Dodaj"}
          </button>
        </S.ButtonWrapper>
      )}
      {isAdditionalOpen && (
        <AdditionalMeetingForm
          updateData={getMeetings}
          handleAdditionalOpen={handleAdditionalOpen}
        />
      )}
    </S.ScheduleWrapper>
  );
};

export default ScheduleContent;
