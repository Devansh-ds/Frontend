import React, { useState } from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function () {
      window.removeEventListener("resize", watchWindowWidth);
      console.log("Cleaning up...");
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
