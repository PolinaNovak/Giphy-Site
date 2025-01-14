export const scrollLeft = () => {
  sliderRef.current.scrollTo({
    left: sliderRef.current.scrollLeft - 250,
    behavior: "smooth",
  });
  setDistance(distance - 250);
  checkArrowVisibility("left");
  console.log(distance);
};

export const scrollRight = () => {
  sliderRef.current.scrollTo({
    left: sliderRef.current.scrollLeft + 250,
    behavior: "smooth",
  });
  setDistance(distance + 250);
  console.log(
    distance,
    sliderRef.current.scrollWidth - sliderRef.current.clientWidth
  );
};
