import { useEffect, useState } from "react";

const useFetch = (fetchFunction, params) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchFunction(params);
        setData(result.data);
        // console.log(result);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [fetchFunction, params]);

  return Object.entries(data);
};

export default useFetch;
