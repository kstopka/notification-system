import * as yup from "yup";
import { YUP } from "../../../../constants";
import { DefaultValuesEditSingleCommentForm } from "./types";

export const defaultValues: DefaultValuesEditSingleCommentForm = {
  content: "",
};

export const schema = yup.object().shape({
  content: YUP.nameSchemeValidation,
});
