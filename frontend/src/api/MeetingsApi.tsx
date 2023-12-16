import Axios from "axios";
import Cookies from "js-cookie";

class ClassMeetingsApi {
  baseUrl = "http://localhost:3002/meetings/";

  get() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  add({
    address,
    description,
    time,
    date,
  }: {
    address: string;
    description: string;
    time: string;
    date: string;
  }) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/post`,
      {
        address,
        description,
        time,
        date,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  del(meeting_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete/${meeting_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const MeetingsApi = new ClassMeetingsApi();

export default MeetingsApi;
