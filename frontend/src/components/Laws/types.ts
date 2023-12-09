import { BasicSingeLawData } from "../../types/standard";

export interface LawsContentProps {}

export interface ResponseLawsProps {
  data: BasicSingeLawData[];
}

export type UseLawsProps = () => {
  laws: BasicSingeLawData[];
  getLaws: () => void;
};
