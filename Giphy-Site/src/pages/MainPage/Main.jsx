import styles from "./styles.module.css";
import useFetch from "@hooks/useFetch";
import { getGifs, getCategories } from "@api/apiFetch";
import ItemsList from "@components/ItemsList/ItemsList";
import CategoryList from "@components/CategoryList/CategoryList";
import TrendingBar from "@components/TrendingBar/TrendingBar";

export default function Main() {
  const data = useFetch(getGifs);

  const categories = useFetch(getCategories);
  // categories ? console.log(categories) : null;

  //   data ? Object.entries(data).map((elem) => console.log(elem)) : null;

  return (
    <>
      <div className={styles.mainBody}>
        {categories ? <CategoryList items={categories} /> : null}
        <TrendingBar />
        {data ? <ItemsList items={data} /> : null}
      </div>
    </>
  );
}
