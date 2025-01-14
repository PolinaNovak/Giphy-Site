import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";
import NavBar from "@components/NavBar/NavBar";
import Authorization from "@components/common/Authorization/Authorization";
import Logo from "@components/common/Logo/Logo";

export default function Header() {
  return (
    <header className={styles.headerBody}>
      <Logo />

      <NavBar />

      <div className={styles.buttonsMenu}>
        <Button className={styles.uploadButton}>Upload</Button>
        <Button className={styles.createButton}>Create</Button>
      </div>

      <Authorization />
    </header>
  );
}
