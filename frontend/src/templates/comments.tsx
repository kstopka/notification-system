import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/Login";
import { getParamFromURL } from "../utils";
import Api from "../api/API";
import { AxiosResponse } from "axios";
import { PostCommentData, SingleNewsData } from "../types/standard";
import CommentsContent from "../components/Comments";
import PostsApi from "../api/PostsApi";
import PostCommentsApi from "../api/PostComments";

interface CommentsProps {}

const CommentsPage: React.FC<CommentsProps> = () => {
  const [post, setPost] = useState<SingleNewsData>();
  const [comments, setComments] = useState<PostCommentData[]>([]);

  const post_id = getParamFromURL("id");
  const getSingleNewsAndComments = async () => {
    try {
      if (post_id === null) return;
      const posts: AxiosResponse<any, any> = await PostsApi.getSingleNews(
        post_id
      );
      setPost(posts.data[0]);

      const comments: AxiosResponse<any, any> =
        await PostCommentsApi.getSingleNewsComments(post_id);
      setComments(comments.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleNewsAndComments();
  }, []);

  if (!post) return null;

  return (
    <Layout>
      <CommentsContent
        post={post}
        comments={comments}
        updateData={getSingleNewsAndComments}
      />
    </Layout>
  );
};

export default CommentsPage;
