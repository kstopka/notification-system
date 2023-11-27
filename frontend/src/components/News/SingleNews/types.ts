import { SingleNewsData } from "../../../types/standard";

export interface ExternalSingleNewsProps {
  getNews: () => void;
}

export type SingleNewsProps = SingleNewsData & ExternalSingleNewsProps & {};
