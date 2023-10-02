import { useNavigate } from "react-router-dom";
import URL_PATHS from "../constants/routes";
import { useContextState, AuthCtx, useActions } from "../contexted";
import { IAuthActions, IAuthState } from "../contexted/Auth/types";
import Layout from "../components/Layout";

interface AccountPageProps {}

const AccountPage: React.FC<AccountPageProps> = () => {
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
    <Layout>
      <h1>Account Page</h1>
      {permissions === "admin" && (
        <button onClick={() => navigate(URL_PATHS.admin.slug)}>
          Panel Admin
        </button>
      )}
      <button onClick={() => handleLogOut()}>logout</button>
      {loggedIn && (
        <>
          <h3>{name}</h3>
          <h3>{surname}</h3>
          <h3>{email}</h3>
        </>
      )}
    </Layout>
  );
};

export default AccountPage;
