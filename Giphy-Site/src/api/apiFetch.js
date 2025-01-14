import { urlCreation } from "@service/URLCreation";

export const getItems = async (params) => {
  console.log(params);
  const url = urlCreation(params);

  console.log(url);
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`response status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getCategories = async () => {
  const url = urlCreation("gifs/categories");

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`response status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
