import styles from "./styles.module.css";

export default function Arrow({ direction = "left", clickFunction }) {
  return (
    <div
      className={
        direction === "left" ? styles.arrowBodyLeft : styles.arrowBodyRight
      }
      onClick={clickFunction}
    >
      <img
        className={styles.arrow}
        src="./icons/rightArrow.svg"
        height="800"
        width="800"
        alt="Left"
        loading="lazy"
      />
      <div className={styles.gradient}></div>
    </div>
  );
}
