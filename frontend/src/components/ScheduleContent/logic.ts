import { useState, useEffect } from "react";
import Api from "../../api/API";
import { PreparedMeetings, MeetingsData } from "../../types/standard";

export const useCalendar = () => {
  const [meetings, setMeetings] = useState<PreparedMeetings[]>([]);
  const getMeetings = async () => {
    try {
      const { data } = await Api.getMeetings();
      const dataMeetings = data as MeetingsData[];
      const preparedMeetings = dataMeetings.map(
        ({ meeting_id, date, description, address }) => ({
          id: meeting_id,
          title: `Spotkanie ${meeting_id}`,
          start: new Date(date),
          end: new Date(date),
          description,
          location: address,
        })
      );
      setMeetings(preparedMeetings);
    } catch (error) {}
  };

  useEffect(() => {
    getMeetings();
  }, []);

  return {
    meetings,
  };
};
