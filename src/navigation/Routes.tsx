import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayoutBasic from "../components/sideDrawer/SideDrawer";
import LandingPage from "../pages/landingPageScreen/LandingPage";
import FormsPage from "../pages/LoginSignupScreen/LoginSignupPage/LoginSignupPage";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/profile" element={<DashboardLayoutBasic />}></Route>
      <Route path="/forms" element={<FormsPage />} />
    </Routes>
  );
};

export default AppRouter;
