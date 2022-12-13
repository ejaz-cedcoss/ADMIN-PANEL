import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./component/Auth/Auth";
import Panel from "./component/Panel/Panel";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/panel/*" element={<Panel />} />
        <Route path="*" element={<Navigate to={"/auth/login"} />} />
      </Routes>
    </>
  );
}

export default App;
