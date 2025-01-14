import styles from "./styles.module.css";
import Button from "../Button/Button";

const Category = ({ name }) => {
  return (
    <div className={styles.categoryBody}>
      <Button>
        <img
          className={styles.categoryImage}
          width="512"
          height="512"
          src="./icons/stonksArrow.png"
          alt="Trending"
          loading="lazy"
        ></img>
        <h2 className={styles.buttonCategory}>{name}</h2>
      </Button>
    </div>
  );
};

export default Category;
