import styles from "./styles.module.css";

const Item = ({ src, username, width, height, alt }) => {
  return (
    <div className={styles.imageBody}>
      <img
        className={styles.image}
        src={src}
        alt={alt}
        loading="lazy"
        width={width}
        height={height}
      />
      <span className={`${styles.title}`}>{username}</span>
    </div>
  );
};

export default Item;
