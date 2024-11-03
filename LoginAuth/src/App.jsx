import { useState } from "react";
import FirstPage from "./FirstPage";
import AuthComponent from "./AuthComponent";
import FreeComponent from "./FreeComponent";
import { Route, Routes, Router } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<FirstPage />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/auth" element={<AuthComponent />} />
          </Route>

          <Route path="/free" element={<FreeComponent />} />
        </Routes>
    </div>
  );
}

export default App;
