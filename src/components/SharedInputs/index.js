import React from "react";
//import styles from './login.module.css'

const SharedInput = ({ type, placeholder, name,  }) => {
  return <input name={name} type={type} placeholder={placeholder} />;
};

export default SharedInput;
