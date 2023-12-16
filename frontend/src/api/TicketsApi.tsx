import Axios from "axios";
import Cookies from "js-cookie";

class ClassTicketsApi {
  baseUrl = "http://localhost:3002/tickets";

  getTickets() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_tickets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getSingleTicket(ticket_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_ticket/${ticket_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  additionalTicket(user_id: number, subject: string, description: string) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_ticket`,
      {
        user_id,
        subject,
        description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  updateSingleTicket({
    ticket_id,
    priority,
    status,
    owner_id,
  }: {
    ticket_id: number;
    priority: string;
    status: string;
    owner_id: number;
  }) {
    const token = Cookies.get("token");
    return Axios.patch(
      `${this.baseUrl}/patch_ticket/${ticket_id}`,
      {
        priority,
        status,
        owner_id,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
}

const TicketsApi = new ClassTicketsApi();

export default TicketsApi;
