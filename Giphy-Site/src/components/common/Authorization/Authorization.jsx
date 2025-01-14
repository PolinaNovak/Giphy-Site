import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";

const Authorization = () => {
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
};

export default Authorization;
