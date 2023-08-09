import { Root, popular } from "@/components/types";
import { useCallback, useState } from "react";

export const usePopular = () => {
  const [movies, setMovies] = useState<popular["results"]>();
  const [badge, setBadge] = useState<Root["genres"]>([]);
  const [selectedBadgeId, setSelectedBadgeId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const badgeRequest = useCallback(async () => {
    try {
      setLoading(true);
      const query = await fetch(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKEY}&language=en-GB`
      );
      const genreData = await query.json();
      setBadge(genreData.genres);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  }, []);

  const popularRequest = async () => {
    try {
      setLoading(true);
      const query = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-GB&page=1`
      );
      const popularMovies = await query.json();
      setMovies(popularMovies.results);
      setLoading(false);
    } catch (error) {
      alert(error);
    }
  };

  return {
    movies,
    setMovies,
    badge,
    setBadge,
    selectedBadgeId,
    setSelectedBadgeId,
    loading,
    badgeRequest,
    popularRequest,
  };
};
