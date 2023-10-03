import * as yup from "yup";
import { YUP } from "../../../constants";
import { DefaultValuesEditSingleNewsForm } from "./types";

export const defaultValues: DefaultValuesEditSingleNewsForm = {
  title: "",
  content: "",
};

export const schema = yup.object().shape({
  title: YUP.nameSchemeValidation,
  content: YUP.nameSchemeValidation,
});
