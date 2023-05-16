import { useEffect, useState } from "react";

export default function useQuery(queryFn) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    queryFn()
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsError(true);
        setError(error);
        setIsLoading(false);
      });
  }, [queryFn]);

  return [data, error, isError, isLoading];
}
