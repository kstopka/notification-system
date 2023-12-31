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
    isAdditionalOpen,
    isDeleteOpen,
    isEditOpen,
    handleDeleteOpen,
    handleEditOpen,
    handleAdditionalOpen,
    handleSelectEvent,
    getMeetings,
    handleDeleteMeeting,
  } = useCalendar();
  return (
    <S.ScheduleWrapper>
      <h1>HARMONOGRAM</h1>
      <Calendar
        localizer={localizer}
        events={meetings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        onSelectEvent={handleSelectEvent}
      />
      {selectedEvent && (
        <div>
          <h5>Detale:</h5>
          <div>Tytuł: {selectedEvent.title}</div>
          <div>Opis: {selectedEvent.description}</div>
          <div>Data: {getDate(selectedEvent.start)}</div>
          <div>Adres: {selectedEvent.location}</div>
          {permissions && permissions === "admin" && (
            <S.EventButtons>
              <button onClick={handleEditOpen}>Edytuj</button>
              <button onClick={handleDeleteOpen}>Usuń</button>
            </S.EventButtons>
          )}
        </div>
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
      {isDeleteOpen && (
        <Modal
          handleIsActiveModal={handleDeleteOpen}
          buttons={[
            <button className="secondary" onClick={handleDeleteMeeting}>
              Potwierdzam
            </button>,
            <button className="secondary" onClick={handleDeleteOpen}>
              Anuluj
            </button>,
          ]}
        >
          <p>Czy na pewno chcesz usunąć to spotkanie?</p>
        </Modal>
      )}
    </S.ScheduleWrapper>
  );
};

export default ScheduleContent;
