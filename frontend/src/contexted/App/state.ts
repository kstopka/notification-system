import { IAlert, IAppState } from "./types";

export const initialAlert: IAlert = {
  isAlertVisible: false,
  status: "info",
  message: "",
};

const initialState: IAppState = {
  imBusy: true,
  isModalOpen: false,
  alert: initialAlert,
};

export default initialState;
