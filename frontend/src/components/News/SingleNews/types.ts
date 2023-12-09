import { SingleNewsData } from "../../../types/standard";

export interface ExternalSingleNewsProps {
  updateData: () => void;
  isActiveComment?: boolean;
  isVoteOpen?: boolean;
}

export type SingleNewsProps = SingleNewsData & ExternalSingleNewsProps & {};
