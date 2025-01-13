import styles from "./styles.module.css";
import Button from "../Button/Button";

export default function Category({ name }) {
  return (
    <div className={styles.categoryBody}>
      <Button>
        <img
          className={styles.categoryImage}
          widh="512"
          height="512"
          src="./icons/stonksArrow.png"
          alt="Trending"
          loading="lazy"
        ></img>
        <h2 className={styles.buttonCategory}>{name}</h2>
      </Button>
    </div>
  );
}
