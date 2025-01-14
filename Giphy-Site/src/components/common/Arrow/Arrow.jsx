import styles from "./styles.module.css";

const Arrow = ({ direction = "left", clickFunction, className = "" }) => {
  return (
    <div
      className={`${
        direction === "left" ? styles.arrowBodyLeft : styles.arrowBodyRight
      } ${className}`}
      onClick={clickFunction}
    >
      <img
        className={styles.arrow}
        src="./icons/rightArrow.svg"
        height="800"
        width="800"
        alt={direction === "left" ? "Scroll left" : "Scroll right"}
        loading="lazy"
      />
      <div className={styles.gradient}></div>
    </div>
  );
};

export default Arrow;
