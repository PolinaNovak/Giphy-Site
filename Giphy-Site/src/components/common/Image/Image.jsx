import styles from "./styles.module.css";

export default function Image({ src, username }) {
  // console.log(src, username);
  return (
    <div className={styles.imageBody}>
      <img src={src} alt="GIF" loading="lazy" />
      <span className={styles.title}>{username}</span>
    </div>
  );
}
