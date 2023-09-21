import URL_PATHS, { URLSinglePath } from "../../../constants/routes";
import "./styles.css";
import { objectToArray } from "./utils";
import { NavLink } from "react-router-dom";
import { AuthCtx, useContextState } from "../../../contexted";
import { IAuthState } from "../../../contexted/Auth/types";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const URL_PATHS_ARRAY: URLSinglePath[] = objectToArray(URL_PATHS);
  const { loggedIn } = useContextState<IAuthState>(AuthCtx, [
    "loggedIn",
    "name",
  ]);

  return (
    <header className="Header">
      <nav className="Navigation">
        {URL_PATHS_ARRAY && URL_PATHS_ARRAY.length > 0
          ? URL_PATHS_ARRAY.map(({ slug, label }) =>
              loggedIn && label !== "Login" ? (
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
      </nav>
    </header>
  );
};

export default Header;
