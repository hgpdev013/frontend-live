import React from "react";
import ReactDOM from "react-dom/client";
import ListPage from "./pages/List";
import "./styles/index";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
    <ListPage />
  </React.StrictMode>
);
