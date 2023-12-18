import Axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "./API";

class ClassPostCommentsApi {
  baseUrl = "http://localhost:3002/post_comments";

  getSingleNewsComments(post_id: string) {
    const token = Cookies.get("token");
    return Axios.get(`${this.baseUrl}/get_comments/${post_id}`, {
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

  additionalSingleComment(user_id: number, post_id: number, content: string) {
    const token = Cookies.get("token");
    console.log("additionalSingleComment");
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

  deleteSingleCommentByPost(post_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_post_comment/${post_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteSingleCommentByComment(comment_id: number) {
    const token = Cookies.get("token");
    return Axios.delete(`${this.baseUrl}/delete_comment/${comment_id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const PostCommentsApi = new ClassPostCommentsApi();

export default PostCommentsApi;
