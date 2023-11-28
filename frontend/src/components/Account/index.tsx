import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { useContextState, AuthCtx, useActions } from "../../contexted";
import { IAuthState, IAuthActions } from "../../contexted/Auth/types";
import * as S from "./styles";
import { AccountContentProps } from "./types";

const AccountContent: React.FC<AccountContentProps> = () => {
  const { name, email, surname, loggedIn, permissions } =
    useContextState<IAuthState>(AuthCtx, [
      "name",
      "email",
      "surname",
      "loggedIn",
      "permissions",
    ]);

  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate(URL_PATHS.home.slug);
    logOut();
  };
  return (
    <S.AccountWrapper>
      {permissions === "admin" && (
        <button onClick={() => navigate(URL_PATHS.admin.slug)}>
          Panel Admin
        </button>
      )}
      <button onClick={() => handleLogOut()}>logout</button>
      {loggedIn && (
        <>
          <h3>Imie: {name}</h3>
          <h3>Nazwisko: {surname}</h3>
          <h3>Email: {email}</h3>
        </>
      )}
    </S.AccountWrapper>
  );
};

export default AccountContent;
