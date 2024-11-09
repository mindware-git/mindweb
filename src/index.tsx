import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import { AboutUs } from "./AboutUs";
import { EnterpriseService } from "./Enterprise";
import { MobileApp } from "./MobileApp";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app" element={<MobileApp />} />
        <Route path="/enterprise-service" element={<EnterpriseService />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
