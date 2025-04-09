import React from "react";
import "../../App.css";

export default function HeaderData(prop) {
  return (
    <header className="user-header">
      <img src="src/images/user-icon.png" alt="user-icon" />
      <p>{prop.userName}</p>
    </header>
  );
}
