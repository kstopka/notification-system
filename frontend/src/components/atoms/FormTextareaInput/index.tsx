import AlertSVG from "../symbols/AlertSVG";
import CheckCircleSVG from "../symbols/CheckCircleSVG";
import React, { useMemo, useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

import * as S from "./styles";
import { StatusType, FormTextInputProps } from "./types";

const FormTextareaInput: React.FC<FormTextInputProps> = ({
  name,
  placeholder,
  label = "",
  direction = "column",
  isDisabled = false,
  className = "",
  maxLength,
  isDark = false,
}): JSX.Element => {
  const { register, setValue, formState, clearErrors } = useFormContext();
  const { errors, dirtyFields } = formState;

  const [status, setStatus] = useState<StatusType>("default");
  const [errorMessage, setErrorMessage] = useState<any>("");

  useEffect(() => {
    const fieldError = errors[name];
    setErrorMessage(fieldError?.message);
    const fieldDirty = dirtyFields[name];
    const hasError = fieldError !== undefined;
    const isValid = !hasError && fieldDirty !== undefined;

    switch (true) {
      case hasError:
        setStatus("error");
        break;
      case isValid:
        setStatus("success");
        break;
      default:
        setStatus("default");
    }
  }, [name, errors, dirtyFields, formState]);

  const onBlur = ({ target }: { target: { value: string } }) => {
    clearErrors(name);
    setValue(name, target.value.trim(), {
      shouldValidate: true,
      shouldTouch: true,
    });
  };

  const onChange = ({ target }: { target: { value: string } }) => {
    clearErrors(name);
    setValue(name, target.value);
  };

  return (
    <>
      <S.StyledContainer
        inputDirection={direction}
        className={`formTextInputContainer ${className}`}
      >
        {label.length > 0 ? (
          <S.StyledLabel htmlFor={name} isDark={isDark}>
            {label}
          </S.StyledLabel>
        ) : null}
        <S.InputContainer isDark={isDark}>
          <S.TextInput
            id={name}
            status={status}
            placeholder={placeholder}
            disabled={isDisabled}
            {...register(name, { onBlur, onChange })}
            className="textArea"
            maxLength={maxLength}
            isDark={isDark}
          />
          {status !== "default" ? (
            <S.SVGContainer status={status}>
              {status === "success" ? <CheckCircleSVG /> : <AlertSVG />}
            </S.SVGContainer>
          ) : null}
        </S.InputContainer>
        {status === "error" ? (
          <S.StyledDescription status={status}>
            {errorMessage}
          </S.StyledDescription>
        ) : null}
      </S.StyledContainer>
    </>
  );
};

export default FormTextareaInput;
