import { SingleNewsProps } from "./SingleNews/types";

export interface NewsContentProps {}

export interface ResponseNewsProps {
  data: SingleNewsProps[];
}

export type UseNewsProps = () => {
  news: SingleNewsProps[];
};
