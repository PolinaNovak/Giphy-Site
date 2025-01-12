import styles from "./styles.module.css";
import Image from "@components/common/Image/Image";

export default function ItemsList({ items }) {
  return (
    <div className={styles.itemsListBody}>
      {items?.map((elem, index) => {
        return (
          <Image
            className={styles.image}
            key={index}
            height={elem[1].images.fixed_height.height}
            width={elem[1].images.fixed_height.width}
            src={elem[1].images.fixed_height.url}
            username={elem[1].username}
          />
        );
      })}
    </div>
  );
}
