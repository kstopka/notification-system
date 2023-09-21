import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import URL_PATHS from "../../constants/routes";
import { AppCtx, AuthCtx, useActions, useContextState } from "../../contexted";
import { IAuthActions, IAuthState } from "../../contexted/Auth/types";
import Footer from "./Footer";
import Head from "./Head";
import Header from "./Header";
import "./styles.css";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { GlobalStyles } from "../../styles/global";
import Alert from "../atoms/Alert";
import { IAppActions, IAppState } from "../../contexted/App/types";
import { initialAlert } from "../../contexted/App/state";

interface ILayout {
  children: React.ReactNode;
  seo?: Record<string, any>;
}

const Layout: React.FC<ILayout> = ({ children, seo = {} }): JSX.Element => {
  const location = useLocation();
  const { loggedIn } = useContextState<IAuthState>(AuthCtx, ["loggedIn"]);
  const { logOut } = useActions<IAuthActions>(AuthCtx, ["logOut"]);

  const { alert } = useContextState<IAppState>(AppCtx, ["alert"]);
  const { setAlert } = useActions<IAppActions>(AppCtx, ["setAlert"]);

  const navigate = useNavigate();

  const escapeLogOut = ({ key }: KeyboardEvent) => {
    if (key === "Escape") logOut();
  };

  useEffect(() => {
    window.addEventListener("keydown", escapeLogOut);

    return () => {
      window.removeEventListener("keydown", escapeLogOut);
    };
  }, []);

  useEffect(() => {
    if (!loggedIn && location.pathname !== "/login/") {
      navigate(URL_PATHS.login.slug);
    }
  }, [loggedIn, location.pathname, loggedIn, navigate]);

  useEffect(() => {
    if (alert.isAlertVisible) {
      const timeout = setTimeout(() => {
        setAlert(initialAlert);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [alert.isAlertVisible]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <HelmetProvider>
        <div className="Layout">
          <Head seo={seo} location={location} />
          <Header />
          {alert.isAlertVisible && (
            <Alert
              title={alert.status}
              description={alert.message}
              status={alert.status}
            />
          )}
          <main>{children}</main>
          <Footer />
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Layout;
