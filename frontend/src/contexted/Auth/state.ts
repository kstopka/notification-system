import { IAuthState } from "./types";

const initialState: IAuthState = {
  isBusy: false,
  loggedIn: false,
  id: 0,
  email: "",
  first_name: "",
  last_name: "",
};

export default initialState;
