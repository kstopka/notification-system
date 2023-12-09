import * as yup from "yup";
import { YUP } from "../../../constants";
import { DefaultValuesSingleLawForm } from "./types";

export const defaultValues: DefaultValuesSingleLawForm = {
  name: "",
  description: "",
  text: "",
};

export const schema = yup.object().shape({
  name: YUP.textArea,
  description: YUP.textArea,
  text: YUP.textArea,
});
