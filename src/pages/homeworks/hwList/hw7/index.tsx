import React from "react";

import styles from "./style.module.scss";
const DATA = [
  { title: "Start", price: 199, color: "green" },
  { title: "Good", price: 299, color: "orange" },
  { title: "Ultima", price: 399, color: "red" },
  { title: "Vip", price: 799, color: "blue" },
];

export const Homework7: React.FC = () => {
  return (
    <div className={styles.root} id="root">
      {DATA.map((item) => {
        return (
          <div className={styles.containerItem}>
            <h2 style={{ color: item.color, fontWeight: 100 }}>{item.title}</h2>
            <div className={styles.prefDiv}>
              <span>Responsive Design</span>
              <span>Color Customization</span>
              <span>HTML5 & CSS3</span>
              <span>Styled elements</span>
            </div>
            <div className={styles.priceDiv}>
              <h2 style={{ color: item.color }}>$ {item.price}</h2>
              <span>per month</span>
            </div>
            <button style={{ backgroundColor: item.color }}>Join Now</button>
          </div>
        );
      })}
    </div>
  );
};
