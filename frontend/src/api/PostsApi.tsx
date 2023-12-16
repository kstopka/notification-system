import Axios from "axios";
import Cookies from "js-cookie";

class ClassPostsApi {
  baseUrl = "http://localhost:3002/posts";

  getNews() {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_news`, {
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

  deleteSinglePost(post_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_post/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const PostsApi = new ClassPostsApi();

export default PostsApi;
