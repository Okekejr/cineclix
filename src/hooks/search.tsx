import { Movies } from "@/components/types";
import { useCallback, useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Movies["results"]>([]);
  const [loading, setLoading] = useState(false);
  const [hidden, setHidden] = useState(true);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchSearch = useCallback(async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-GB&query=${search}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setResults(movies.results.slice(0, 7));
    setLoading(false);
  }, [search]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return {
    search,
    setSearch,
    results,
    setResults,
    hidden,
    setHidden,
    loading,
    setLoading,
    handleChange,
    fetchSearch,
  };
};
