import Axios from "axios";
import Cookies from "js-cookie";

class ClassApi {
  baseUrl = "http://localhost:3002";
  getUsers() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  login({ email, password }: { email: string; password: string }) {
    return Axios.post(`${this.baseUrl}/auth`, {
      email,
      password,
    });
  }

  getNews() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getSingleNews(post_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
  getSingleNewsComments(post_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_comments/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getTickets() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_tickets`, {
      headers: { Authorization: `Bearer ${token}` },
    });
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

  additionalSingleNews(user_id: number, title: string, content: string) {
    const token = Cookies.get("token");
    return Axios.post(
      `${this.baseUrl}/additional_news`,
      {
        user_id,
        title,
        content,
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
}

const Api = new ClassApi();

export default Api;
