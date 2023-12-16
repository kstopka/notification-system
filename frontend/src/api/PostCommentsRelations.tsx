import Axios from "axios";
import Cookies from "js-cookie";

class ClassPostCommentsRelations {
  baseUrl = "http://localhost:3002/post_comments_relations";

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
}

const PostCommentsRelations = new ClassPostCommentsRelations();

export default PostCommentsRelations;
