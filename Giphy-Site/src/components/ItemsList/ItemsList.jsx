import styles from "./styles.module.css";
import Item from "@components/common/Item/Item";
import { getItems } from "@api/apiFetch";
import switchGetItem from "@service/switchGetItem";
import useFetch from "@hooks/useFetch";

const ItemsList = ({ trendingItem }) => {
  const itemOptions = switchGetItem(trendingItem.toLowerCase());
  const data = useFetch(getItems, itemOptions);

  return (
    <div className={styles.itemsListBody}>
      {data?.map((elem) => {
        return (
          <div key={elem.id} className={styles.imageWrapper}>
            <Item
              height={elem.images.fixed_height.height}
              width={elem.images.fixed_height.width}
              src={elem.images.fixed_height.url}
              alt={trendingItem.toLowerCase()}
              username={elem.username}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
