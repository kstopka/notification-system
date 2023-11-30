import { useNavigate } from "react-router-dom";
import URL_PATHS from "../../../constants/routes";
import { AuthCtx, useActions, useContextState } from "../../../contexted";
import { IAuthActions, IAuthState } from "../../../contexted/Auth/types";
import * as S from "./styles";

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = (): JSX.Element => {
  const { loggedIn, name } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "name",
  ]);
  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);
  const navigate = useNavigate();
  return (
    <S.Footer>
      {loggedIn && (
        <div>
          Zalogowano jako: <S.Name>{name}</S.Name>
        </div>
      )}
      {loggedIn && (
        <button
          className={`primaryBtn`}
          onClick={() => {
            logOut();
            navigate(URL_PATHS.login.slug);
          }}
        >
          Logout
        </button>
      )}
    </S.Footer>
  );
};

export default Footer;
