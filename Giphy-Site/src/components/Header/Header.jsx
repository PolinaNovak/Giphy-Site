import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";
import NavBar from "@components/NavBar/NavBar";
import Authorization from "@components/common/Authorization/Authorization";

export default function Header({ items }) {
  return (
    <header className={styles.headerBody}>
      <img
        className={styles.logo}
        src="/icons/logo.svg"
        width="100"
        height="60"
        alt="Giphy"
        loading="lazy"
      />

      <NavBar />

      <div className={styles.buttonsMenu}>
        <Button className={styles.uploadButton}>Upload</Button>
        <Button className={styles.createButton}>Create</Button>
      </div>

      <Authorization />
    </header>
  );
}
