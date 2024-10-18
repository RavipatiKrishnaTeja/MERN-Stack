import React from "react";
import styles from "./Greetings.module.css";

//styles is a object created when using module css
export const Greetings = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <h3 className={styles.App}>Hello</h3>
    </div>
  );
};
