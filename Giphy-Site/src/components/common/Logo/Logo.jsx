import styles from "./styles.module.css";

export default function Logo() {
  return (
    <div className={styles.logoBody}>
      <img
        src="/icons/logoImg.svg"
        width="28"
        height="35"
        alt="Giphy"
        loading="lazy"
      />
      <img
        src="/icons/logoText.svg"
        width="128"
        height="36"
        alt="Giphy"
        loading="lazy"
      />
    </div>
  );
}
