import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar"; // NOTE: Check your folder name "component" vs "components"
import Hero from "./sections/Hero";
import HomeMenu from "./sections/HomeMenu";
import Featured from "./sections/Featured"; // <--- NEW
import Footer from "./sections/Footer"; // <--- NEW
import MenuPage from "./pages/MenuPage";
import Gallery from "./pages/Gallery";

function App() {
  const [showAdmin, setShowAdmin] = useState(false);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
        <Navbar toggleAdmin={() => setShowAdmin(!showAdmin)} />

        {/* Admin Modal (Hidden) */}
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

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HomeMenu />
                <Featured /> {/* <--- Added Here */}
                <Footer /> {/* <--- Added Here */}
              </>
            }
          />

          <Route
            path="/menu"
            element={
              <>
                <MenuPage />
                <Footer /> {/* Footer on menu page too */}
              </>
            }
          />
          <Route
            path="/gallery"
            element={
              <>
                <Gallery />
                <Footer />
              </>
            }
          />

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
