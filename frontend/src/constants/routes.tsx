import { createBrowserRouter } from "react-router-dom";
import HomePage from "../templates/home";
import AccountPage from "../templates/account";
import PanelAdminPage from "../templates/panelAdmin";
import LoginPage from "../templates/login";
import NewsPage from "../templates/news";
import TicketsPage from "../templates/tickets";
import CommentsPage from "../templates/comments";
import AdditionalTicketPage from "../templates/additionalTicket";
import SingleTicketPage from "../templates/singleTicket";

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
    label: "Strona główna",
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

  news: {
    label: "Aktualności",
    slug: "/news/",
    isMenu: true,
  },
  additionalTicket: {
    label: "Dodaj zgłoszenie",
    slug: "/new-ticket/",
    isMenu: true,
  },
  tickets: {
    label: "Zgłoszenia",
    slug: "/tickets/",
    isMenu: true,
  },
  comments: {
    label: "Comments",
    slug: "/comments",
    isMenu: false,
  },
  account: {
    label: "Konto",
    slug: "/account/",
    isMenu: true,
  },
  ticket: {
    label: "Ticket",
    slug: "/ticket",
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
  {
    path: URL_PATHS.additionalTicket.slug,
    element: <AdditionalTicketPage />,
  },
  {
    path: URL_PATHS.ticket.slug,
    element: <SingleTicketPage />,
  },
]);

export default URL_PATHS;
