import styles from "./styles.module.css";

export default function Image({ src, username, width, height }) {
  return (
    <div className={styles.imageBody}>
      <img
        className={styles.image}
        src={src}
        alt="GIF"
        loading="lazy"
        width={width}
        height={height}
      />
      <span className={`${styles.title}`}>{username}</span>
    </div>
  );
}
