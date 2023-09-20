import { IAuthState } from "./types";

const initialState: IAuthState = {
  isBusy: false,
  loggedIn: false,
  id: 0,
  email: "",
  name: "",
  surname: "",
};

export default initialState;
