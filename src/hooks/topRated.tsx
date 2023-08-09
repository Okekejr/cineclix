import { now_playing } from "@/components/types";
import { useState } from "react";

export const useTopRated = () => {
  const [topRated, setTopRated] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchTopRated = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setTopRated(movies.results.slice(0, 10));
    setLoading(false);
  };

  return {
    topRated,
    loading,
    fetchTopRated,
  };
};
