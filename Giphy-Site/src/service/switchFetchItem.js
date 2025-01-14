const switchFetchItem = (trendingItemName) => {
  switch (trendingItemName) {
    case "gifs":
      return {
        trendingItemName: trendingItemName,
        trendingItemQuery: "trending",
      };

    case "stickers":
      return {
        trendingItemName: trendingItemName,
        trendingItemQuery: "trending",
      };

    case "clips":
      return {
        trendingItemName: trendingItemName,
        trendingItemQuery: "search",
      };
  }
};

export default switchFetchItem;
