import { FC, useEffect } from "react";
import { SideMovies } from "../sideMovies";
import { useTopRated } from "@/hooks/topRated";

export const TopRated: FC = () => {
  const { fetchTopRated, loading, topRated } = useTopRated();

  useEffect(() => {
    fetchTopRated();
  }, []);

  return (
    <>
      <SideMovies
        name="Top Rated"
        loading={loading}
        comingSoon={topRated}
        id="top_rated"
        mt={4}
      />
    </>
  );
};
