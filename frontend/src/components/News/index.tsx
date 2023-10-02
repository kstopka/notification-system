import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import Api from "../../api/API";
import { useNews } from "./hooks";

interface NewsContentProps {}

const NewsContent: React.FC<NewsContentProps> = () => {
  const { news } = useNews();
  return <div></div>;
};

export default NewsContent;
