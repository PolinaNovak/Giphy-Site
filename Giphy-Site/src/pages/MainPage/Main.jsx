import styles from "./styles.module.css";
import useFetch from "@hooks/useFetch";
import { getGifs } from "@api/apiFetch";
import ItemsList from "@components/ItemsList/ItemsList";

export default function Main() {
  const data = useFetch(getGifs, "gifs", "trending");
  data ? console.log(data) : null;

  //   data ? Object.entries(data).map((elem) => console.log(elem)) : null;

  return (
    <>
      <div className={styles.mainBody}>
        {data ? <ItemsList items={data} /> : null}
      </div>
    </>
  );
}
