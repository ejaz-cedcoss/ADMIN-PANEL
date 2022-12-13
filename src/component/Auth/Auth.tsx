import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const Login = lazy(() => import("./Login/Login"));
const Registration = lazy(() => import("./Registration/Registration"));

const Auth = () => {
  return (
    <>
      <Routes>
        <Route
          path="login"
          element={
            <Suspense fallback={<>loading...</>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="registration"
          element={
            <Suspense fallback={<>loading...</>}>
              <Registration />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={'/auth/login'}/>}/>
      </Routes>
    </>
  );
};

export default Auth;
