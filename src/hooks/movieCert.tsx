import { ReleaseDatesEntity, ResultsEntity } from "@/components/types";
import { useCallback, useState } from "react";

export const useMovieCert = (id: number) => {
  const [cert, setCert] = useState<ReleaseDatesEntity["certification"]>();
  const [loading, setLoading] = useState(false);
  const APIKEY = process.env.NEXT_PUBLIC_MOVIEDB_APIKEY;

  const fetchMovieCert = useCallback(async () => {
    setLoading(true);

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${APIKEY}&language=en-GB`
    );
    const certs = await data.json();

    const GB = certs.results.filter(
      (cert: ResultsEntity) => cert.iso_3166_1 === "GB"
    )[0];

    setCert(GB?.release_dates[0]?.certification);
    setLoading(false);
  }, [id]);

  return {
    cert,
    setCert,
    loading,
    setLoading,
    fetchMovieCert,
  };
};
