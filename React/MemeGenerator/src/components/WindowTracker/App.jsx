import { useState } from "react";
import WindowTracker from "./WindowTracker";

export default function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prev) => !prev);
  }

  return (
    <main className="tracker-container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </main>
  );
}
