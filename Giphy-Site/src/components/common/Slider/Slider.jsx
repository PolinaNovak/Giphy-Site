import styles from "./styles.module.css";
import React, { useRef } from "react";
import Arrow from "@components/common/Arrow/Arrow";

export default function Slider({ children }) {
  const sliderRef = useRef(null);

  function scrollLeft() {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - 250,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + 250,
      behavior: "smooth",
    });
  }
  return (
    <div className={styles.sliderBody}>
      <Arrow direction={"left"} clickFunction={scrollLeft} />
      <div className={styles.categoriesSlider}>
        {React.cloneElement(children, { ref: sliderRef })}
      </div>
      <Arrow direction={"right"} clickFunction={scrollRight} />
    </div>
  );
}
