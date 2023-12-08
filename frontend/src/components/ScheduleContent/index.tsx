import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as S from "./styles";
import { ScheduleContentProps } from "./types";

import { useCalendar } from "./logic";
import Modal from "../atoms/Modal";
import { getDate } from "../../utils/getDate";
const localizer = globalizeLocalizer(globalize);

const ScheduleContent: React.FC<ScheduleContentProps> = () => {
  const {
    meetings,
    selectedEvent,
    isActiveModal,
    handleSelectEvent,
    handleActiveModal,
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
    </S.ScheduleWrapper>
  );
};

export default ScheduleContent;
