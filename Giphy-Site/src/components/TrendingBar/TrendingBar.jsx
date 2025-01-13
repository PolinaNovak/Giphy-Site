import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";

export default function TrendingBar() {
  const 

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
        <Button>GIFs</Button>
        <Button>Stickers</Button>
        <Button>Clips</Button>
      </div>
    </div>
  );
}
