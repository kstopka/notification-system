/* eslint-disable react-hooks/exhaustive-deps */
import AlertSVG from "../symbols/AlertSVG";
import CheckCircleSVG from "../symbols/CheckCircleSVG";

import React, { useMemo, useState, useEffect, useCallback } from "react";
import { useFormContext } from "react-hook-form";

import * as S from "./styles";
import { StatusType } from "./types";

interface FormTextInputProps {
  name: string;
  placeholder: string;
  label?: string;
  type?: string;
  direction?: "row" | "column";
  isDisabled?: boolean;
  className?: string;
  isDark?: boolean;
}

const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  placeholder,
  label = "",
  type = "text",
  direction = "column",
  isDisabled = false,
  className = "",
  isDark = false,
}): JSX.Element => {
  const { register, setValue, formState, clearErrors } = useFormContext();

  const { errors, dirtyFields } = formState;

  const [status, setStatus] = useState<StatusType>("default");
  const [isTyping, setIsTyping] = useState(false);
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

  const onBlur = useCallback(({ target }: { target: { value: string } }) => {
    clearErrors(name);
    setValue(name, target.value.trim().replace(/\s\s+/g, " "), {
      shouldValidate: true,
      shouldTouch: true,
    });
    setIsTyping(false);
  }, []);

  const onChange = useCallback(({ target }: { target: { value: string } }) => {
    clearErrors(name);
    setIsTyping(true);
    setValue(name, target.value);
  }, []);

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
            type={type}
            status={status}
            placeholder={placeholder}
            disabled={isDisabled}
            {...register(name, { onBlur, onChange })}
            className="textInput"
            isDark={isDark}
          />
          {status !== "default" && !isTyping ? (
            <S.SVGContainer status={status}>
              {status === "success" ? <CheckCircleSVG /> : <AlertSVG />}
            </S.SVGContainer>
          ) : null}
        </S.InputContainer>
        {!isTyping && status === "error" ? (
          <S.StyledDescription status={status}>
            {errorMessage}
          </S.StyledDescription>
        ) : null}
      </S.StyledContainer>
    </>
  );
};

export default FormTextInput;
