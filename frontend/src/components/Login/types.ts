import { UseFormReturn } from "react-hook-form";
import { IAuthState } from "../../contexted/Auth/types";

import { defaultValues } from "./utils";

type TLoginDefaultState = typeof defaultValues;

export interface ILoginData {
  data: {
    message: string;
  };
  userData: Omit<IAuthState, "isBusy" | "loggedIn">;
}

export interface IUseLogin {
  isLoading: boolean;
  methods: UseFormReturn<TLoginDefaultState>;
  onSubmit: any;
  // onSubmit: (
  //   formValues: TLoginDefaultState
  // ) => SubmitHandler<TLoginDefaultState>;
}
