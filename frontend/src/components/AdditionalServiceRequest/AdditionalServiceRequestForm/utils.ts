import * as yup from "yup";
import { YUP } from "../../../constants";
import { DefaultValuesAdditionalTicket } from "./types";

export const defaultValues: DefaultValuesAdditionalTicket = {
  description: "",
};

export const schema = yup.object().shape({
  description: YUP.textArea,
});
