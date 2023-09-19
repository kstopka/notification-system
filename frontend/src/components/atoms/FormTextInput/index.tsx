/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useCallback } from "react";
import { useFormContext } from "react-hook-form";
import AlertSVG from "../symbols/AlertSVG";
import CheckCircleSVG from "../symbols/CheckCircleSVG";
import { FormTextInputProps, StatusType } from "./types";

import "./style.css";

const FormTextInput: React.FC<FormTextInputProps> = ({
  name,
  placeholder,
  type = "text",
  label = "",
  isDisabled = false,
}) => {
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
    <div className="wrapperLabel">
      {label.length > 0 ? <label htmlFor={name}>{label}</label> : null}
      <div className="formTextInput">
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          disabled={isDisabled}
          {...register(name, { onBlur, onChange })}
          className="textInput"
        />
        {status !== "default" && !isTyping ? (
          <div
            className={
              status === "success"
                ? "svgContainer success"
                : "svgContainer error"
            }
          >
            {status === "success" ? <CheckCircleSVG /> : <AlertSVG />}
          </div>
        ) : null}
        {!isTyping && status === "error" ? (
          <div className="error">{errorMessage}</div>
        ) : null}
      </div>
    </div>
  );
};

export default FormTextInput;
