import { SingleNewsData } from "../../../types/standard";

export interface ExternalSingleNewsProps {
  updateData: () => void;
  isActiveComment?: boolean;
}

export type SingleNewsProps = SingleNewsData & ExternalSingleNewsProps & {};
