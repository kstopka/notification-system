import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoginForm from "../components/Login";
import { getParamFromURL } from "../utils";
import Api from "../api/API";
import { AxiosResponse } from "axios";
import { CommentData, SingleNewsData } from "../types/standard";
import CommentsContent from "../components/Comments";

interface CommentsProps {}

const CommentsPage: React.FC<CommentsProps> = () => {
  const [post, setPost] = useState<SingleNewsData>();
  const [comments, setComments] = useState<CommentData[]>([]);

  const post_id = getParamFromURL("id");
  const getSingleNews = async () => {
    try {
      if (post_id === null) return;
      const posts: AxiosResponse<any, any> = await Api.getSingleNews(post_id);
      setPost(posts.data[0]);
      const comments: AxiosResponse<any, any> = await Api.getSingleNewsComments(
        post_id
      );
      setComments(comments.data);
    } catch (error) {}
  };

  useEffect(() => {
    getSingleNews();
  }, []);

  if (!post) return null;

  return (
    <Layout>
      <CommentsContent
        post={post}
        comments={comments}
        getSingleNews={getSingleNews}
      />
    </Layout>
  );
};

export default CommentsPage;
