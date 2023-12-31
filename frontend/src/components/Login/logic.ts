import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { AppCtx, AuthCtx, useActions } from "../../contexted";
import { IAuthActions } from "../../contexted/Auth/types";
import { ILoginData, IUseLogin } from "./types";
import { defaultValues, schema } from "./utils";
import { IAppActions } from "../../contexted/App/types";
import UsersApi from "../../api/UsersApi";

export const useLogin = (): IUseLogin => {
  const { logIn } = useActions<IAuthActions>(AuthCtx, ["logIn"]);
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<any>({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { reset } = methods;

  const onSubmit: SubmitHandler<typeof defaultValues> = (formValues) => {
    setIsLoading(true);
    UsersApi.login(formValues)
      // .then((res: ILoginData) => {
      .then((res: any) => {
        logIn(res.data);
        reset();
        setAlert({
          isAlertVisible: true,
          status: "success",
          message: res.data.message,
        });
        navigate(URL_PATHS.home.slug);
      })
      // .catch((err: ILoginData) => {
      .catch((err: any) => {
        console.log("err", err);
        setAlert({
          isAlertVisible: true,
          status: "error",
          message: err.response.data,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    isLoading,
    methods,
    onSubmit,
  };
};
