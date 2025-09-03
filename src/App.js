import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/pages/ServicesPage";
import HowItWorksPage from "./components/pages/HowItWorksPage";
import FAQPage from "./components/pages/FAQPage";
import AboutUsPage from "./components/pages/AboutUsPage";
import ContactPage from "./components/pages/ContactPage";
import HouseClearancePage from "./components/pages/HouseClearancePage";
import GardenClearancePage from "./components/pages/GardenClearancePage";
import OfficeClearancePage from "./components/pages/OfficeClearancePage";
import SingleItemsPage from "./components/pages/SingleItemsPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/house-clearance" element={<HouseClearancePage />} />
          <Route path="/services/garden-clearance" element={<GardenClearancePage />} />
          <Route path="/services/office-clearance" element={<OfficeClearancePage />} />
          <Route path="/services/single-items" element={<SingleItemsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;