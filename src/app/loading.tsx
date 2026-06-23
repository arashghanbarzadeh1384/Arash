import React from "react";
import styles from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.terminalLoader}>
        <div className={styles.terminalHeader}>
          <div className={styles.terminalTitle}>Status</div>
          <div className={styles.terminalControls}>
            <div className={`${styles.control} ${styles.close}`} />
            <div className={`${styles.control} ${styles.minimize}`} />
            <div className={`${styles.control} ${styles.maximize}`} />
          </div>
        </div>
        <div className={styles.text}>Loading...</div>
      </div>
    </div>
  );
};

export default Loader;
