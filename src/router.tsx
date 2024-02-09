import { Route, BrowserRouter, Routes } from "react-router-dom";
import ListPage from "./pages/List";
import DetailsPage from "./pages/Details";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ListPage />} path="*" />
        <Route element={<ListPage />} path="/list" />
        <Route element={<DetailsPage />} path="/list/:id" />
      </Routes>
    </BrowserRouter>
  );
};
