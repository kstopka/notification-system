import { SingleNewsData } from "../../types/standard";

export interface NewsContentProps {}

export interface ResponseNewsProps {
  data: SingleNewsData[];
}

export type UseNewsProps = () => {
  news: SingleNewsData[];
  getNews: () => void;
};
