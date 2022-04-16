import "./common/App.css";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import SideMenu from "./components/SideMenu";

import HomePage from "./components/home/HomePage";
import TicketsPage from "./components/tickets/TicketsPage";
import LineupPage from "./components/lineup/LineupPage";
import CampingPage from "./components/camping/CampingPage";
import MerchPage from "./components/merch/MerchPage";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <main>
      <HeaderBar handleMenuToggle={handleMenuToggle} />
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentPath={location.pathname}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tickets" element={<TicketsPage />} />
        <Route path="/lineup" element={<LineupPage />} />
        <Route path="/camping" element={<CampingPage />} />
        <Route path="/merch" element={<MerchPage />} />
      </Routes>
    </main>
  );
}

export default App;
