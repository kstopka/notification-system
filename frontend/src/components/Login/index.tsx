import { useLogin } from "./logic";
import Alert from "../atoms/Alert";
import { FormProvider } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import { useEffect } from "react";
import { useActions, AppCtx } from "../../contexted";
import { IAppActions } from "../../contexted/App/types";
import * as S from "./styles";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const { isLoading, methods, onSubmit } = useLogin();

  const { handleSubmit } = methods;

  const login = ({ key }: KeyboardEvent) => {
    if (key === "1") {
      onSubmit({ email: "alice@example.com", password: "tajnehaslo" });
    }
    if (key === "2") {
      onSubmit({ email: "alice@example.com", password: "tajnehaslo2" });
    }
    if (key === "3") {
      onSubmit({ email: "john@example.com", password: "haslo123" });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", login);

    return () => {
      window.removeEventListener("keydown", login);
    };
  }, []);

  return (
    <>
      <S.LoginWrapper>
        <h2>Zaloguj się</h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <FormTextInput
              name="email"
              label="E-mail"
              placeholder="E-mail"
              isDark
            />
            <FormTextInput
              type="password"
              name="password"
              label="Hasło"
              placeholder="Hasło"
              isDark
            />
            <button type="submit" className={`${isLoading ? "loading" : ""}`}>
              {isLoading ? "Proszę czekać" : "Zaloguj się"}
            </button>
          </form>
        </FormProvider>
      </S.LoginWrapper>
    </>
  );
};

export default LoginForm;
