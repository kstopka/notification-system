import * as yup from "yup";
import { YUP } from "../../../../constants";
import { DefaultValuesEditSingleNewsForm } from "./types";

export const defaultValues: DefaultValuesEditSingleNewsForm = {
  content: "",
};

export const schema = yup.object().shape({
  content: YUP.nameSchemeValidation,
});
