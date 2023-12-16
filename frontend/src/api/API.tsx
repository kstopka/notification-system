import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";

  getProviders() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_providers`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getNews() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getLaws() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_laws`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getVoteLaw(user_id: number) {
    const token = Cookies.get("token");
    console.log("user_id", user_id);
    return Axios.get(`${this.baseUrl}/get_vote_law/${user_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getSingleNews(post_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getSingleTicket(ticket_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_ticket/${ticket_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getSingleLaw(law_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_law/${law_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
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

  getTickets() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_tickets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  setSingleLaw(name: string, description: string, text: string) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/set_single_law`,
      {
        name,
        description,
        text,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }
  updateSingleNews(title: string, content: string, post_id: number) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/update_news/${post_id}`,
      {
        title,
        content,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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
  updateSingleLaw(status: string, law_id: number) {
    const token = Cookies.get("token");
    return Axios.patch(
      `${this.baseUrl}/patch_law/${law_id}`,
      {
        status,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
  }

  additionalSingleNews(
    user_id: number,
    title: string,
    content: string,
    type: string
  ) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_news`,
      {
        user_id,
        title,
        content,
        type,
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

  deleteSinglePost(post_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_post/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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
