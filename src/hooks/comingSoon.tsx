import { now_playing } from "@/components/types";
import { useState } from "react";

export const useComingSoon = () => {
  const [comingSoon, setComingSoon] = useState<now_playing["results"]>([]);
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchComingSoon = async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-GB&page=1`
    );
    const movies = await data.json();
    setComingSoon(movies.results);
    setLoading(false);
  };

  return {
    comingSoon,
    setComingSoon,
    loading,
    setLoading,
    fetchComingSoon,
  };
};
