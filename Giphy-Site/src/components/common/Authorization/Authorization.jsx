import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";

export default function Authorization() {
  return (
    <div className={styles.authorizeBody}>
      <img
        className={styles.authorizeImg}
        src="/icons/user.svg"
        width="50"
        height="50"
        alt="Authorization"
        loading="lazy"
      />
      <Button className={styles.authorizeButton}>Log In</Button>
    </div>
  );
}
