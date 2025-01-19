import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayoutBasic from "../components/UI/sideDrawer/SideDrawer";
import LandingPage from "../pages/landingPageScreen/LandingPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<DashboardLayoutBasic />}></Route>
    </Routes>
  );
};

export default AppRouter;
