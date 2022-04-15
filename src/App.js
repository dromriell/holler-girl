import "./common/App.css";
import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderBar from "./components/HeaderBar";
import SideMenu from "./components/SideMenu";

import Home from "./components/home/Home";
import Tickets from "./components/tickets/Tickets";

function App() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(location);
  return (
    <main>
      <HeaderBar handleMenuToggle={handleMenuToggle} />
      <SideMenu
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        currentPath={location.pathname}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </main>
  );
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
