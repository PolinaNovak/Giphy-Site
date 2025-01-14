import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";
import { LINKS } from "@constants/constants";

const NavBar = () => {
  return (
    <div className={styles.navBarBody}>
      <ul className={styles.buttonsList}>
        {LINKS.map((elem) => {
          return (
            <li key={elem} className={styles.listItem}>
              <Button className={styles.navBarButton}>{elem}</Button>
            </li>
          );
        })}
        <li className={styles.listItem}>
          <Button className={styles.navBarButton}>
            {
              <img
                src="/icons/menu.svg"
                width="6"
                height="22"
                alt="Menu"
                loading="lazy"
              />
            }
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
