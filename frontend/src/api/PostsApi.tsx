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
}

const PostsApi = new ClassPostsApi();

export default PostsApi;
