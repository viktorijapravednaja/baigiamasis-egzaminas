import React from "react";
import "./App.css";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";

// Pages
import HomePage from "./pages/HomePage/index";
import RegistrationPage from "./pages/RegistrationPage/index";
import CustomersPage from "./pages/CustomersPage/index";

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/customers" element={<CustomersPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
