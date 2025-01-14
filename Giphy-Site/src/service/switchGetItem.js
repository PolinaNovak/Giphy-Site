const switchFetchItem = (trendingItemName) => {
  switch (trendingItemName) {
    case "gifs":
      return "gifs/trending";

    case "stickers":
      return "stickers/trending";
  }
};

export default switchFetchItem;
