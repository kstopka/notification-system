import { useState, useEffect } from "react";
import Api from "../../api/API";
import { PreparedMeetings, MeetingsData } from "../../types/standard";
import { useActions, AppCtx } from "../../contexted";
import { IAppActions } from "../../contexted/App/types";

export const useCalendar = () => {
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);
  const [meetings, setMeetings] = useState<PreparedMeetings[]>([]);
  const [selectedEvent, setSetselectedEvent] =
    useState<PreparedMeetings | null>();
  const [isAdditionalOpen, setIsAdditionalOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleAdditionalOpen = () => {
    setIsAdditionalOpen((isAdditionalOpen) => !isAdditionalOpen);
  };

  const handleDeleteOpen = () => {
    setIsDeleteOpen((isDeleteOpen) => !isDeleteOpen);
  };
  const handleEditOpen = () => {
    setIsEditOpen((isEditOpen) => !isEditOpen);
  };

  const handleSelectEvent = (e: PreparedMeetings) => {
    setSetselectedEvent(e);
  };

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

  const handleDeleteMeeting = async () => {
    if (!selectedEvent) return;
    setIsLoading(true);
    try {
      await Api.deleteMeeting(selectedEvent.id);
      await getMeetings();
      setAlert({
        isAlertVisible: true,
        status: "success",
        message: "response.data.message",
      });
      handleDeleteOpen();
      setSetselectedEvent(null);
    } catch (error) {
      setAlert({
        isAlertVisible: true,
        status: "error",
        message: "error.response.data",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMeetings();
  }, []);

  return {
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
  };
};
