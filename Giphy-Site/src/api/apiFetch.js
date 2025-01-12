import { urlCreation } from "@service/URLCreation";

export const getGifs = async () => {
  const url = urlCreation("gifs", "trending");

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error(`response status: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};
