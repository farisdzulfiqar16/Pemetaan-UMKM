import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import DataUMKM from "./pages/DataUMKM";
import Statistik from "./pages/Statistik";
import PetaUMKM from "./pages/PetaUMKM";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/data-umkm":
        return "Data UMKM";
      case "/statistik":
        return "Statistik UMKM";
      case "/peta-umkm":
        return "Peta UMKM";
      default:
        return "Dashboard UMKM";
    }
  };

  return (
    <div className="h-screen w-screen bg-gray-100">
      <div className="flex w-full">

        {/* SIDEBAR */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />

        {/* MAIN CONTENT */}
        <div className="flex flex-col flex-1 min-w-0">
          <Header
            title={getTitle()}
            onMenuClick={() => setSidebarOpen(true)}
          />

          <main className="flex-1 overflow-y-auto min-w-0">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/data-umkm" element={<DataUMKM />} />
              <Route path="/statistik" element={<Statistik />} />
              <Route path="/peta-umkm" element={<PetaUMKM />} />
            </Routes>
          </main>
        </div>

      </div>
    </div>
  );
}
