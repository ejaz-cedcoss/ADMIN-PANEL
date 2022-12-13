import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
const Dashboard = lazy(() => import("./dashboard/Dashboard"));
const Listing = lazy(() => import("./listing/Listing"));

const Panel = () => {
  return (
    <div>
      <Routes>
        <Route
          path="listing"
          element={
            <Suspense fallback={<>loading...</>}>
              <Listing />
            </Suspense>
          }
        />
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<>loading...</>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to={"/panel/dashboard"} />} />
      </Routes>
    </div>
  );
};

export default Panel;
