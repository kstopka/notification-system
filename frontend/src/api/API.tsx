import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";

  getSingleNewsComments(post_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_comments/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getSingleTicketComments(ticket_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_ticket_comments/${ticket_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateSingleComment(content: string, comment_id: number) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/update_comment/${comment_id}`,
      {
        content,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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

  additionalVotes(user_id: number, post_id: number, vote_value: boolean) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_votes`,
      {
        user_id,
        post_id,
        vote_value,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  additionalSingleComment(user_id: number, post_id: number, content: string) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_comment`,
      {
        user_id,
        post_id,
        content,
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
  deleteSingleCommentByPost(post_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_post_comment/${post_id}`, {
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
  deleteSingleCommentByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_comment/${comment_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
  deleteSingleTicketCommentByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_ticket_comment/${comment_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const Api = new ClassApi();

export default Api;
