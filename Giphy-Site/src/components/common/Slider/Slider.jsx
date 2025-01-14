import styles from "./styles.module.css";
import React, { useRef } from "react";
import Arrow from "@components/common/Arrow/Arrow";
import { useState } from "react";

export default function Slider({ children }) {
  const sliderRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  function scrollLeft() {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - 250,
      behavior: "smooth",
    });
    setDistance(distance - 250);
    checkArrowVisibility("left");
    console.log(distance);
  }

  function scrollRight() {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + 250,
      behavior: "smooth",
    });
    setDistance(distance + 250);
    console.log(
      distance,
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth
    );
  }

  const checkArrowVisibility = (direction) => {
    switch (direction) {
      case "left":
        return distance !== 0;

      case "right":
        return (
          distance <
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth
        );
    }
  };
  return (
    <div
      className={styles.sliderBody}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {isHovered && checkArrowVisibility("left") && (
        <Arrow direction={"left"} clickFunction={scrollLeft} />
      )}
      <div className={styles.categoriesSlider} ref={sliderRef}>
        {children}
      </div>
      {isHovered && checkArrowVisibility("right") && (
        <Arrow direction={"right"} clickFunction={scrollRight} />
      )}
    </div>
  );
}
