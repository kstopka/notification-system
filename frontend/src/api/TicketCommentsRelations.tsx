import Axios from "axios";
import Cookies from "js-cookie";

class ClassTicketCommentsRelations {
  baseUrl = "http://localhost:3002/ticket_comments_relations";

  deleteSingleTicketRelationsByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(
      `${this.baseUrl}/delete_ticket_comment_relations/${comment_id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}

const TicketCommentsRelations = new ClassTicketCommentsRelations();

export default TicketCommentsRelations;
