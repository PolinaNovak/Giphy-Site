import { useRef, useState } from "react";

const useSlider = () => {
  const sliderRef = useRef(null);
  const [distance, setDistance] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollLeft = () => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - 250,
      behavior: "smooth",
    });
    setDistance(distance - 250);
    checkArrowVisibility("left");
  };

  const scrollRight = () => {
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + 250,
      behavior: "smooth",
    });
    setDistance(distance + 250);
    checkArrowVisibility("right");
  };

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

  return {
    sliderRef,
    isHovered,
    setIsHovered,
    checkArrowVisibility,
    distance,
    scrollLeft,
    scrollRight,
  };
};

export default useSlider;
