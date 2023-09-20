import { createBrowserRouter } from "react-router-dom";
import HomePage from "../templates/home";
import AccountPage from "../templates/account";
import PanelAdminPage from "../templates/panelAdmin";
// import { HomePage } from "../templates";
// import LoginPage from "../templates/Auth/login";
// import PanelAdmin from "../templates/panel_admin";
// import PartsPage from "../templates/parts";

export interface URLSinglePath {
  label: string;
  slug: string;
}

export interface URLPaths {
  [key: string]: URLSinglePath;
}

const URL_PATHS: URLPaths = {
  home: {
    label: "Home",
    slug: "/",
  },

  login: {
    label: "Login",
    slug: "/login/",
  },
  admin: {
    label: "Panel Admin",
    slug: "/panel-admin/",
  },
  account: {
    label: "Account",
    slug: "/account/",
  },
};

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home.slug,
    element: <HomePage />,
  },
  {
    path: URL_PATHS.login.slug,
    element: <div>login</div>,
  },
  {
    path: URL_PATHS.admin.slug,
    element: <PanelAdminPage />,
  },
  {
    path: URL_PATHS.account.slug,
    element: <AccountPage />,
  },
]);

export default URL_PATHS;
