import Cookies from "js-cookie";
import initialState from "./state";
import { IAuthState, LoadAuthPayloadType } from "./types";

class AuthActions {
  logIn = (state: IAuthState, { payload }: { payload: any }) => {
    const { user_id: id, email, name, surname, token, permissions } = payload;
    Cookies.set("token", token, { expires: 2 });
    return {
      ...state,
      loggedIn: true,
      id,
      email,
      name,
      surname,
      permissions,
    };
  };

  logOut = () => {
    Cookies.remove("token");
    return initialState;
  };

  loadAuth = (
    state: IAuthState,
    { payload }: { payload: LoadAuthPayloadType }
  ) => {
    const { auth } = payload;

    return {
      ...state,
      ...auth,
    };
  };

  setAuthBusy = (
    state: IAuthState,
    { payload }: { payload: { isBusy: boolean } }
  ) => {
    const { isBusy } = payload;

    return {
      ...state,
      isBusy,
    };
  };

  // setAccountDetails = (
  //   state: IAuthState,
  //   { payload }: { payload: Record<string, string> }
  // ) => {
  //   const {
  //     newEmail: email,
  //     newFirstName: first_name,
  //     newLastName: last_name,
  //     newPhone: phone,
  //   } = payload;
  //   return {
  //     ...state,
  //     first_name,
  //     last_name,
  //     phone,
  //     email,
  //   };
  // };
}

const actions = new AuthActions();
export default actions;
