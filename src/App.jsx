import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Hero from "./sections/Hero";
import HomeMenu from "./sections/HomeMenu";
import MenuPage from "./pages/MenuPage";

const AdminDashboard = () => (
  <div className="p-20 text-white">Admin Panel (Restricted)</div>
);

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
        {/* Navbar stays on all pages */}
        <Navbar toggleAdmin={() => setShowAdmin(!showAdmin)} />

        {/* Admin Modal Overlay */}
        {showAdmin && (
          <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center">
            <div className="bg-[#1a1a1a] p-8 rounded-2xl w-full max-w-2xl relative border border-white/10">
              <button
                onClick={() => setShowAdmin(false)}
                className="absolute top-4 right-4 text-white hover:text-red-500"
              >
                ✕ Close
              </button>
              <h2 className="text-3xl font-['Oswald'] text-orange-500 mb-6">
                Owner Dashboard
              </h2>
              <p className="text-gray-400">Inventory controls coming soon...</p>
            </div>
          </div>
        )}

        {/* Page Routing */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeMenu />
                {/* Add Footer Here later */}
              </>
            }
          />
          <Route path="/menu" element={<MenuPage />} />

          {/* Fallback for 404 */}
          <Route
            path="*"
            element={
              <div className="p-20 text-center text-gray-500">
                Page not found
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
