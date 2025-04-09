import React from "react";
import "../../App.css";
import padData from "./padData.js";
import Pad from "./Pad.jsx";

export default function App(props) {
  const [pads, setPads] = React.useState(padData);
  const padDisplay = pads.map((padItem) => {
    return <Pad id={padItem.id} onClick={toggle} on={padItem.on} key={padItem.id} color={padItem.color} />;
  });

  function toggle(id) {
    setPads((prevData) => {
      return prevData.map((item) => {
        return item.id === id ? { ...item, on: !item.on } : item;
      });
    });
  }

  return (
    <main>
      <div className="pad-container">{padDisplay}</div>
    </main>
  );
}
