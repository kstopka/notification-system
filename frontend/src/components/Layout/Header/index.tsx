import URL_PATHS, { URLSinglePath } from "../../../constants/routes";
import { objectToArray } from "./utils";
import { NavLink } from "react-router-dom";
import { AuthCtx, useContextState } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";
import * as S from "./styles";
import { useState } from "react";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const URL_PATHS_ARRAY: URLSinglePath[] = objectToArray(URL_PATHS);
  const { loggedIn, permissions } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "permissions",
  ]);
  const [isActive, setIsActive] = useState(false);

  const handleActiveHamburger = () => {
    setIsActive((setIsActive) => !setIsActive);
  };

  return (
    <S.Header>
      <S.Hamburger onClick={handleActiveHamburger}>
        <S.Bar></S.Bar>
        <S.Bar></S.Bar>
        <S.Bar></S.Bar>
      </S.Hamburger>
      <S.Navigation isActive={isActive}>
        {URL_PATHS_ARRAY && URL_PATHS_ARRAY.length > 0
          ? URL_PATHS_ARRAY.map(({ slug, label, isAdmin }) =>
              (loggedIn && label !== "Login" && !isAdmin) ||
              (isAdmin && permissions === "admin") ? (
                <NavLink
                  to={slug}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  key={slug}
                >
                  {label}
                </NavLink>
              ) : null
            )
          : null}
      </S.Navigation>
    </S.Header>
  );
};

export default Header;
