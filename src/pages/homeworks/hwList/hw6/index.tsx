import React from "react";

import styles from "./style.module.scss";

export const Homework6: React.FC = () => {
  return (
    <div className={styles.root}>
      <form className={styles.form}>
        <div className={styles.inputGroupData}>
          <input placeholder="Name" />
          <input placeholder="Email" />
        </div>
        <input className={styles.subject} placeholder="Subject" />
        <textarea className={styles.message} placeholder="Message" rows={5}></textarea>
        <button className={styles.sendBtn}>Send</button>
      </form>
    </div>
  );
};
