import { createRoot } from "react-dom/client";
import Navbar from "./Components/Navbar.jsx";
import MainContent from "./Components/MainContent.jsx";
import "./App.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Navbar />
    <MainContent />
  </>
);
