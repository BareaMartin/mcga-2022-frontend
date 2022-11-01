import React from "react";
import SharedInput from "../SharedInputs";
import SharedButton from "../SharedButton";
import { useNavigate } from "react-router-dom";

const SharedForm = () => {
  const navigate = useNavigate();

  return (
    <form
      style={{
        display: "flex",
        "flex-direction": "column",
        width: "40%",
        gap: "10px",
      }}
    >
      <SharedInput type="text" placeholder="Email" name="Email" />
      <SharedInput type="text" placeholder="Password" name="Password" />
      <SharedButton
        type="button"
        onClick={() => navigate("/products")}
        text="Login"
      />
    </form>
  );
};

export default SharedForm;
