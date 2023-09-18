import initialState from "./state";
import { IAuthState, LoadAuthPayloadType } from "./types";

class AuthActions {
  logIn = (state: IAuthState, { payload }: { payload: any }) => {
    // const { id, level, email, first_name, last_name, token } = payload;
    // Cookies.set("token", token, { expires: 2 });
    const { id, email, first_name, last_name } = payload;
    return {
      ...state,
      loggedIn: true,
      id,
      email,
      first_name,
      last_name,
    };
  };

  logOut = () => {
    // Cookies.remove("token");
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
