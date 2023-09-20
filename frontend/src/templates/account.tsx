import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";
import { useContextState, AuthCtx, useActions } from "../contexted";
import { IAuthActions, IAuthState } from "../contexted/Auth/types";

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
  const { name, email, surname, loggedIn } = useContextState<IAuthState>(
    AuthCtx,
    ["name", "email", "surname", "loggedIn"]
  );

  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate(URL_PATHS.home.slug);
    logOut();
  };

  return (
    <>
      <h1>Account Page</h1>
      <button onClick={() => navigate(URL_PATHS.admin.slug)}>
        Panel Admin
      </button>
      <button onClick={() => handleLogOut()}>logout</button>
      {loggedIn && (
        <>
          <h3>{name}</h3>
          <h3>{surname}</h3>
          <h3>{email}</h3>
        </>
      )}
    </>
  );
};

export default AccountPage;
