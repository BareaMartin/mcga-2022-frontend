import React from "react";

const SharedButton = ({ type, onClick, text }) => {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default SharedButton;
