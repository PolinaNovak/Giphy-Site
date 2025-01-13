import { useEffect, useState } from "react";

const useFetch = (fetchFunction) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction();
        setData(result.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return Object.entries(data);
};

export default useFetch;
