// import { SingleNewsData } from "./SingleNews/types";

export interface NewsContentProps {}

export interface ResponseNewsProps {
  data: any[];
}

export type UseNewsProps = () => {
  tickets: any[];
  getTickets: () => void;
};
