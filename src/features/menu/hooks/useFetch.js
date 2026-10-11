import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("HTTP " + response.status);
        }

        const json = await response.json();

        if (active) {
          setData(json);
        }
      } catch (err) {
        if (active) {
          setError(err.message);
        }
      } finally {
        if (active) {
          setIsLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      active = false;
    };
  }, [url]);

  return { data, isLoading, error };
}
