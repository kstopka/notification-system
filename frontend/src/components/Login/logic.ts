import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { AppCtx, AuthCtx, useActions, useContextState } from "../../contexted";
import { IAuthActions, IAuthState } from "../../contexted/Auth/types";
import { ILoginData, IResponse, IUseLogin } from "./types";
import { defaultValues, schema } from "./utils";
import Api from "../../api/API";
import { IAppActions } from "../../contexted/App/types";

export const useLogin = (): IUseLogin => {
  const loggedIn = useContextState<IAuthState>(AuthCtx, ["loggedIn"]);
  const { logIn } = useActions<IAuthActions>(AuthCtx, ["logIn"]);
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<IResponse>({
    message: "",
    status: "info",
  });
  const [isAlertVisible, setIsAlertVisible] = useState(false);

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset } = methods;

  useEffect(() => {
    console.log("isAlertVisible", isAlertVisible);
  }, [isAlertVisible]);

  const onSubmit: SubmitHandler<typeof defaultValues> = (formValues) => {
    setIsLoading(true);
    Api.login(formValues)
      // .then((res: ILoginData) => {
      .then((res: any) => {
        logIn(res.data);
        reset();
        console.log("res.data", res.data);
        setAlert({
          isAlertVisible: true,
          status: "success",
          message: "success",
        });
        navigate(URL_PATHS.account.slug);
      })
      .catch((err: ILoginData) => {
        console.log("err", err);
        // setResponse({
        //   status: "error",
        //   message: err.data.message,
        // });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (!loggedIn) {
      navigate(URL_PATHS.account.slug);
    }
  }, [loggedIn]);

  useEffect(() => {
    const redirectToLoginTimer = setTimeout(() => {
      setIsAlertVisible(false);
      setResponse((prevstate) => {
        return { ...prevstate, message: "" };
      });
    }, 5000);

    return () => clearTimeout(redirectToLoginTimer);
  }, [response.message, response.status]);

  return {
    isLoading,
    methods,
    onSubmit,
  };
};
