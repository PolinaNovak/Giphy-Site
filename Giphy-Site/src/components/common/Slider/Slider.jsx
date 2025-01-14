import styles from "./styles.module.css";
import React from "react";
import Arrow from "@components/common/Arrow/Arrow";
import useSlider from "@hooks/useSlider";

const Slider = ({ children }) => {
  const {
    sliderRef,
    isHovered,
    setIsHovered,
    checkArrowVisibility,
    distance,
    scrollLeft,
    scrollRight,
  } = useSlider();

  return (
    <div
      className={styles.sliderBody}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered && checkArrowVisibility("left", distance) && (
        <Arrow direction={"left"} clickFunction={scrollLeft} />
      )}
      <div className={styles.categoriesSlider} ref={sliderRef}>
        {children}
      </div>
      {isHovered && checkArrowVisibility("right", distance) && (
        <Arrow direction={"right"} clickFunction={scrollRight} />
      )}
    </div>
  );
};

export default Slider;
