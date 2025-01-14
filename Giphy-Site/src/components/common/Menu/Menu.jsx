import styles from "./styles.module.css";
import { useState } from "react";
import Button from "../Button/Button";

const Menu = () => {
  const [searchValue, setSearchValue] = useState("");

  return <div className={styles.menuBody}>
    <table className={styles.table}>
      
    </table>
  </div>;
};

export default Search;
