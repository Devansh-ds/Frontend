import { createRoot } from "react-dom/client";
import "./index.css";

import MainBody from "./components/MainBody";

const root = createRoot(document.getElementById("root"));
root.render(<MainBody />);
