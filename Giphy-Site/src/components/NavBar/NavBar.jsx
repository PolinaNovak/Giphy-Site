import styles from "./styles.module.css";
import Button from "@components/common/Button/Button";

export default function NavBar() {
  const links = ["Reactions", "Entertainment", "Sports", "Stickers", "Artists"];
  return (
    <div className={styles.navBarBody}>
      <ul className={styles.buttonsList}>
        {links.map((elem, index) => {
          return (
            <li key={index} className={styles.listItem}>
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
}
