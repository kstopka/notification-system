import { createBrowserRouter } from "react-router-dom";
import HomePage from "../templates/home";
import AccountPage from "../templates/account";
import PanelAdminPage from "../templates/panelAdmin";
import LoginPage from "../templates/login";
import NewsPage from "../templates/news";

export interface URLSinglePath {
  label: string;
  slug: string;
  isAdmin?: boolean;
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
    isAdmin: true,
  },
  account: {
    label: "Account",
    slug: "/account/",
  },
  news: {
    label: "News",
    slug: "/news/",
  },
};

export const router = createBrowserRouter([
  {
    path: URL_PATHS.home.slug,
    element: <HomePage />,
  },
  {
    path: URL_PATHS.login.slug,
    element: <LoginPage />,
  },
  {
    path: URL_PATHS.admin.slug,
    element: <PanelAdminPage />,
  },
  {
    path: URL_PATHS.account.slug,
    element: <AccountPage />,
  },
  {
    path: URL_PATHS.news.slug,
    element: <NewsPage />,
  },
]);

export default URL_PATHS;
