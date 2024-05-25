import React from "react";

import styles from "./style.module.scss";

export const Homework4: React.FC = () => {
  return (
    <ul className={styles.menu}>
      <li>
        <a href="*">Home</a>
      </li>
      <li>
        <a href="*">Category</a>
        <ul className={styles.dropdown}>
          <li>
            <a href="*">Category 1</a>
          </li>
          <li>
            <a href="*">Category 2</a>
          </li>
          <li>
            <a href="*">Category 3</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="*">About</a>
      </li>
      <li>
        <a href="*">Contact Us</a>
      </li>
    </ul>
  );
};
