import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Vans from "./pages/Vans";
import VanDetail from "./pages/VanDetail";
import Details from "./pages/Host/Vans/Details";
import Pricing from "./pages/Host/Vans/Pricing";
import Photos from "./pages/Host/Vans/Photos";

import HostVans from "./pages/Host/Vans/HostVans";
import HostVansDetail from "./pages/Host/Vans/HostVansDetail";

import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./pages/Host/Host";

import "./server";
import Layout from "./components/Layout";

const root = createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVansDetail />}>
              <Route index element={<Details />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
