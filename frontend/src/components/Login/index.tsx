import { useLogin } from "./logic";
import Alert from "../atoms/Alert";
import { FormProvider } from "react-hook-form";
import FormTextInput from "../atoms/FormTextInput";
import { useEffect } from "react";

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = () => {
  const {
    isLoading,
    isAlertVisible,
    response,
    methods,
    onSubmit,
    onCloseAlert,
  } = useLogin();

  const { handleSubmit } = methods;

  const login = ({ key }: KeyboardEvent) => {
    if (key === "1")
      onSubmit({ email: "alice@example.com", password: "tajnehaslo" });
  };

  useEffect(() => {
    window.addEventListener("keydown", login);

    return () => {
      window.removeEventListener("keydown", login);
    };
  }, []);

  return (
    <>
      {isAlertVisible && (
        <Alert
          handleClose={onCloseAlert}
          title={response.status}
          description={response.message}
          status={response.status}
        />
      )}

      <div className="LoginWrapper">
        <h2>Zaloguj się</h2>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="LoginForm">
            <FormTextInput name="email" label="E-mail" placeholder="E-mail" />
            <FormTextInput
              type="password"
              name="password"
              label="Hasło"
              placeholder="Hasło"
            />
            <button
              type="submit"
              className={`primaryBtn ${isLoading ? "loading" : ""}`}
            >
              {isLoading ? "Proszę czekać" : "Zaloguj się"}
            </button>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default LoginForm;
