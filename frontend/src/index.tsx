import React from "react";
import ReactDOM from "react-dom/client";

import ContextsWrapper from "./AllContextsWrapper";
import { RouterProvider } from "react-router-dom";
import { router } from "./constants/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextsWrapper element={<RouterProvider router={router} />} />
  </React.StrictMode>
);
