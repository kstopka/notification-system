import { Calendar, globalizeLocalizer } from "react-big-calendar";
import globalize from "globalize";
import "react-big-calendar/lib/css/react-big-calendar.css";
import * as S from "./styles";
import { ScheduleContentProps } from "./types";

import { useCalendar } from "./logic";
const localizer = globalizeLocalizer(globalize);

const ScheduleContent: React.FC<ScheduleContentProps> = () => {
  const { meetings } = useCalendar();
  return (
    <S.ScheduleWrapper>
      <Calendar
        localizer={localizer}
        events={meetings}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </S.ScheduleWrapper>
  );
};

export default ScheduleContent;
