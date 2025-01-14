import styles from "./styles.module.css";
import { useState } from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";

export default function Search() {
  const [searchValue, setSearchValue] = useState(
    "Search all the GIF and Stickers"
  );

  return (
    <div className={styles.searchBody}>
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <Button className={styles.searchButton}>
        <img
          src="/icons/search.svg"
          loading="lazy"
          alt="Search"
          width="50"
          height="50"
        />
      </Button>
    </div>
  );
}
