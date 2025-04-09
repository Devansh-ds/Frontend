import React from "react";

export default function Pad(props) {
  return (
    <button
      style={{
        backgroundColor: props.color,
        opacity: props.on ? 1 : 0.1,
      }}
      onClick={() => props.onClick(props.id)}
    ></button>
  );

  function handleClick() {
    setOn((prev) => !prev);
  }
}
