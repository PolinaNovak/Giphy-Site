import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";
import { BAR_ITEMS } from "@constants/constants";

const TrendingBar = ({ trendingItem, setTrendingItem }) => {
  return (
    <div className={styles.trendingBarBody}>
      <h2 className={styles.title}>
        <img
          className={styles.titleImage}
          width="512"
          height="512"
          src="./icons/stonksArrow.png"
          alt="Trending"
          loading="lazy"
        ></img>
        <span className={styles.titleText}>Trending Now</span>
      </h2>

      <div className={styles.trendingBar}>
        {BAR_ITEMS?.map((elem) => {
          return (
            <Button
              key={elem}
              className={
                elem.localeCompare(trendingItem) === 0
                  ? styles.currentButton
                  : ""
              }
              onClick={() => setTrendingItem(elem)}
            >
              {elem}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingBar;
