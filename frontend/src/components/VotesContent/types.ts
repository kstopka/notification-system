import { BasicPostData } from "../../types/standard";

export interface NewsContentProps {}

export interface ResponseNewsProps {
  data: BasicPostData[];
}

export type UseVoteLawProps = () => {
  voteLaw: BasicPostData[];
  getVoteLaw: () => void;
};
