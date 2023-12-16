import Axios from "axios";
import Cookies from "js-cookie";

class ClassTicketCommentsApi {
  baseUrl = "http://localhost:3002/ticket_comments";

  getSingleTicketComments(ticket_id: string) {
    console.log("getSingleTicketComments");
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_ticket_comments/${ticket_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateSingleTicketComment(comment_text: string, comment_id: number) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/update_ticket_comment/${comment_id}`,
      {
        comment_text,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  additionalSingleTicketComment(
    user_id: number,
    ticket_id: number,
    comment_text: string
  ) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_ticket_comment`,
      {
        user_id,
        ticket_id,
        comment_text,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  deleteSingleTicketCommentByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_ticket_comment/${comment_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const TicketCommentsApi = new ClassTicketCommentsApi();

export default TicketCommentsApi;
