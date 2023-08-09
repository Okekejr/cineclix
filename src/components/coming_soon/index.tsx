import { FC, useEffect } from "react";
import { SideMovies } from "../sideMovies";
import { useComingSoon } from "@/hooks/comingSoon";

export const ComingSoon: FC = () => {
  const { fetchComingSoon, loading, comingSoon } = useComingSoon();

  useEffect(() => {
    fetchComingSoon();
  }, []);

  return (
    <>
      <SideMovies
        name="Coming Soon"
        loading={loading}
        comingSoon={comingSoon}
        id="coming_soon"
      />
    </>
  );
};
