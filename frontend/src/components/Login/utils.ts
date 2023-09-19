import * as yup from "yup";
import { YUP } from "../../constants";

export const schema = yup.object().shape({
  // email: YUP.emailSchemeValidation,
  // password: YUP.passwordSchemeValidation,
});

export const defaultValues = {
  email: "",
  password: "",
};

export const defaultResponse = {
  message: "",
  status: "",
};
