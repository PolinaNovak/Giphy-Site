import styles from "./styles.module.css";
import Category from "@components/common/Category/Category";
import Slider from "@components/common/Slider/Slider";

export default function CategoryList({ items }) {
  return (
    <div className={styles.categoryListBody}>
      <Slider>
        <div className={styles.categoriesList}>
          {items?.map((elem, index) => {
            return (
              <div key={index} className={styles.categoryWrapper}>
                <Category name={elem[1].name_encoded} />
              </div>
            );
          })}
        </div>
      </Slider>
    </div>
  );
}
