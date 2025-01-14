import styles from "./styles.module.css";
import useFetch from "@hooks/useFetch";
import { getCategories } from "@api/apiFetch";
import ItemsList from "@components/ItemsList/ItemsList";
import CategoryList from "@components/CategoryList/CategoryList";
import TrendingBar from "@components/TrendingBar/TrendingBar";
import { useState } from "react";

import Search from "@components/common/Search/Search";
import Header from "@components/Header/Header";

export default function Main() {
  const [trendingItem, setTrendingItem] = useState("GIFs");

  const categories = useFetch(getCategories);

  return (
    <>
      <div className={styles.mainBody}>
        <Header />
        <Search />
        {categories ? <CategoryList items={categories} /> : null}
        <TrendingBar
          trendingItem={trendingItem}
          setTrendingItem={setTrendingItem}
        />
        <ItemsList trendingItem={trendingItem} />
      </div>
    </>
  );
}
