/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";

export const useNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const result = await Api.getNews();
        setNews(result.data);
      } catch (error) {}
    };

    getNews();
  }, []);

  return {
    news,
  };
};
