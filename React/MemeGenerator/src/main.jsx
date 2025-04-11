import { createRoot } from "react-dom/client";
import "./index.css";

import MemeHeader from "./components/Meme/Header";
import MemeMain from "./components/Meme/Main";

import App from "./components/WindowTracker/App";

import FetchData from "./components/FetchData/FetchData";

const root = createRoot(document.getElementById("root"));

root.render(<Meme />);

function Meme() {
  return (
    <>
      <MemeHeader />
      <MemeMain />
    </>
  );
}

function StateFetchLearn() {
  return (
    <>
      <FetchData />
    </>
  );
}

function WindowTracker() {
  return <App />;
}
