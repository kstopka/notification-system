import { createBrowserRouter } from "react-router-dom";
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
    slug: "/panel_admin/",
  },

  // registiation: {
  //   label: "Registiation",
  //   slug: "/registiation/",
  // },
  // resetPassword: {
  //   label: "Reset Password",
  //   slug: "/reset-password/",
  // },
};

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home.slug,
    element: <div>home</div>,
  },
  {
    path: URL_PATHS.login.slug,
    element: <div>login</div>,
  },
  {
    path: URL_PATHS.admin.slug,
    element: <div>panel admin</div>,
  },
]);

export default URL_PATHS;
