import { fetchGraphQL } from "api/graphQL/fetchGraphQL";
import { useState, useEffect } from "react";


export const useContentfulData = <TProps>(collection: string, query: string) => {
  const [ data, setData ] = useState<TProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGraphQL(query);

        setData(response.data[collection]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [query, collection]);

  return data;
};
