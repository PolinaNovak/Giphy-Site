export const urlCreation = (queryObject) => {
  const url = `${import.meta.env.VITE_API_BASE}/${
    import.meta.env.VITE_API_VERSION
  }/${queryObject}?api_key=${import.meta.env.VITE_API_KEY}`;
  return url;
};
