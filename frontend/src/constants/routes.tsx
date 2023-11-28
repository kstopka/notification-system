import { createBrowserRouter } from "react-router-dom";
import HomePage from "../templates/home";
import AccountPage from "../templates/account";
import PanelAdminPage from "../templates/panelAdmin";
import LoginPage from "../templates/login";
import NewsPage from "../templates/news";
import TicketsPage from "../templates/tickets";
import CommentsPage from "../templates/comments";

export interface URLSinglePath {
  label: string;
  slug: string;
  isAdmin?: boolean;
  isMenu: boolean;
}

export interface URLPaths {
  [key: string]: URLSinglePath;
}

const URL_PATHS: URLPaths = {
  home: {
    label: "Home",
    slug: "/",
    isMenu: true,
  },
  login: {
    label: "Login",
    slug: "/login/",
    isMenu: true,
  },
  admin: {
    label: "Panel Admin",
    slug: "/panel-admin/",
    isAdmin: true,
    isMenu: true,
  },
  account: {
    label: "Account",
    slug: "/account/",
    isMenu: true,
  },
  news: {
    label: "News",
    slug: "/news/",
    isMenu: true,
  },
  tickets: {
    label: "Tickets",
    slug: "/tickets/",
    isMenu: true,
  },
  comments: {
    label: "Comments",
    slug: "/comments",
    isMenu: false,
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
  {
    path: URL_PATHS.tickets.slug,
    element: <TicketsPage />,
  },
  {
    path: URL_PATHS.comments.slug,
    element: <CommentsPage />,
  },
]);

export default URL_PATHS;
