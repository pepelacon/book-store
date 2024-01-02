import styles from "./Shelf.module.scss";

const Shelf = () => {
  return (
    <div className={styles.shelfContainer}>
      <div className={styles.shelf}>
        <div
          className={styles.section}
          style={{ transform: "scale(1.065)" }}
        ></div>
        <div
          className={styles.torec}
          style={{ transform: "scale(1.065)" }}
        ></div>
      </div>
    </div>
  );
};

export default Shelf;
