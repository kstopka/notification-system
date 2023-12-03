import * as yup from "yup";
import { YUP } from "../../../constants";
import { DefaultValuesAdditionalTicket } from "./types";

export const defaultValues: DefaultValuesAdditionalTicket = {
  subject: "",
  description: "",
};

export const schema = yup.object().shape({
  subject: YUP.textArea,
  description: YUP.textArea,
});
