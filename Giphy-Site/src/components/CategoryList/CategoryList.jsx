import styles from "./styles.module.css";
import Category from "@components/common/Category/Category";
import Slider from "@components/common/Slider/Slider";
import { useState } from "react";

const CategoryList = ({ items }) => {
  const [isHovered, setIsHovered] = useState(null);
  const [allHovered, setAllHovered] = useState(false);

  return (
    <div
      className={styles.categoryListBody}
      onMouseOver={() => setAllHovered(true)}
      onMouseOut={() => setAllHovered(false)}
    >
      <Slider>
        <div className={styles.categoriesList}>
          {items?.map((elem, index) => {
            return (
              <div
                onMouseOver={() => setIsHovered(index)}
                onMouseOut={() => setIsHovered(null)}
                key={index}
                className={`${styles.categoryWrapper}
              ${isHovered === index ? styles.current : ""}
              ${allHovered ? styles.darkened : ""}`}
              >
                <Category name={elem.name_encoded} />
              </div>
            );
          })}
        </div>
      </Slider>
    </div>
  );
};

export default CategoryList;
