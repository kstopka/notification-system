import { useState } from "react";
import * as S from "./styles";
import { ISelectProps } from "./types";

const Select = ({
  name,
  initialValue,
  options,
  handleChange,
}: ISelectProps): JSX.Element => {
  return (
    <S.Select name={name} value={initialValue} onChange={handleChange}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </S.Select>
  );
};

export default Select;
