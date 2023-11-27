/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { ResponseNewsProps, UseNewsProps } from "./types";
import { SingleNewsData } from "../../types/standard";

export const useNews: UseNewsProps = () => {
  const [news, setNews] = useState<SingleNewsData[]>([]);

  const getNews = async () => {
    try {
      const result: AxiosResponse<any, ResponseNewsProps> = await Api.getNews();
      setNews(result.data);
    } catch (error) {}
  };

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    console.log("news", news);
  }, [news]);

  return {
    news,
    getNews,
  };
};
