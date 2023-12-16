import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";

  additionalServiceRequest(
    user_id: number,
    provider_id: number,
    description: string
  ) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_service_request`,
      {
        user_id,
        provider_id,
        description,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

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
