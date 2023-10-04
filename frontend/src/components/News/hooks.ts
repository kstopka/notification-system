/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Api from "../../api/API";
import { AxiosResponse } from "axios";
import { ResponseNewsProps, UseNewsProps } from "./types";
import { SingleNewsData } from "./SingleNews/types";

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

  return {
    news,
    getNews,
  };
};
