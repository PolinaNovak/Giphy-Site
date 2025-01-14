import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";
import { useState } from "react";

export default function TrendingBar({ tredingItem, setTrendingItem }) {
  const [activeButton, setActiveButton] = useState(0);
  const barItems = ["GIFs", "Stickers", "Clips"];

  const changeTrendingItem = (index) => {
    setActiveButton(index);
    setTrendingItem(barItems[index]);
  };

  return (
    <div className={styles.trendingBarBody}>
      <h2 className={styles.title}>
        <img
          className={styles.titleImage}
          widh="512"
          height="512"
          src="./icons/stonksArrow.png"
          alt="Trending"
          loading="lazy"
        ></img>
        <span className={styles.titleText}>Trending Now</span>
      </h2>

      <div className={styles.trendingBar}>
        {barItems.map((elem, index) => {
          return (
            <Button
              key={index}
              className={activeButton === index ? styles.currentButton : ""}
              onClick={() => changeTrendingItem(index)}
            >
              {elem}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
