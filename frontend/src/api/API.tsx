import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";

  deleteSinglePostRelationsByPost(post_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_post_relations/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteSinglePostRelationsByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(
      `${this.baseUrl}/delete_comment_relations/${comment_id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }

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

const Api = new ClassApi();

export default Api;
