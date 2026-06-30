import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import UserLayout from "../layouts/UserLayout";

function AppRouter() {

  const [bgColor, setBgColor] = useState("#F5F7FB");

  return (
    <BrowserRouter basename="/admin-user-layout">

      <Routes>

        <Route
          path="/"
          element={
            <UserLayout
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <AdminLayout
              bgColor={bgColor}
              setBgColor={setBgColor}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default AppRouter;