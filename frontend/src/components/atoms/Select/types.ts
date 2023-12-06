export interface ISelectProps {
  name: string;
  initialValue: number | string;
  options: {
    value: string | number;
    label: string;
  }[];
  handleChange?: (val: React.ChangeEvent<HTMLSelectElement>) => void;
}
