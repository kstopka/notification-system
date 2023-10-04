import { SingleNewsData } from "./SingleNews/types";

export interface NewsContentProps {}

export interface ResponseNewsProps {
  data: SingleNewsData[];
}

export type UseNewsProps = () => {
  news: SingleNewsData[];
  getNews: () => void;
};
