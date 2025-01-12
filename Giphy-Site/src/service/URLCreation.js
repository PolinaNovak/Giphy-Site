export const urlCreation = (queryObject, queryTheme) => {
  const url = `${import.meta.env.VITE_API_BASE}/${
    import.meta.env.VITE_API_VERSION
  }/${queryObject}/${queryTheme}?api_key=${import.meta.env.VITE_API_KEY}`;
  return url;
};
