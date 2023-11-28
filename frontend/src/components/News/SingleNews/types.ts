import { SingleNewsData } from "../../../types/standard";

export interface ExternalSingleNewsProps {
  getNews: () => void;
  isActiveComment?: boolean;
}

export type SingleNewsProps = SingleNewsData & ExternalSingleNewsProps & {};
