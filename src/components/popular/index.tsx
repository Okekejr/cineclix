import {
  ContainerProps,
  Divider,
  Flex,
  Heading,
  Spinner,
} from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { GenreBadges } from "../genre";
import { Movie } from "../movie";
import { PopularFlex } from "../layout/popularFlex";
import { SectionContainer } from "../layout/SectionContainer";
import { usePopular } from "@/hooks/popular";

export const Popular: FC<ContainerProps> = (props) => {
  const {
    loading,
    badge,
    movies,
    badgeRequest,
    popularRequest,
    selectedBadgeId,
    setSelectedBadgeId,
    setMovies,
  } = usePopular();

  useEffect(() => {
    badgeRequest();
    popularRequest();
  }, []);

  return (
    <SectionContainer
      id="popular"
      mt={{ base: "5.5rem", md: "4.5rem" }}
      {...props}
    >
      <Heading
        id="popular"
        fontSize={{ base: "2rem", md: "1.5rem", lg: "2rem" }}
      >
        Popular Movies
      </Heading>
      {!loading ? (
        <Flex justifyContent="start" flexWrap="wrap" gap={4} my={8}>
          {badge
            ? badge?.map((item) => {
                return (
                  <GenreBadges
                    data={item}
                    selectedBadgeId={selectedBadgeId}
                    setSelectedBadgeId={setSelectedBadgeId}
                    setMovies={setMovies}
                    key={item.id}
                  />
                );
              })
            : "can't load Genres"}
        </Flex>
      ) : (
        <Spinner
          size="sm"
          color="blue.600"
          speed="0.65s"
          thickness="4px"
          emptyColor="gray.200"
        />
      )}
      {!loading ? (
        <PopularFlex>
          {movies?.map((item) => {
            return <Movie data={item} key={item.id} />;
          })}
        </PopularFlex>
      ) : (
        <Spinner
          size="sm"
          color="blue.600"
          speed="0.65s"
          thickness="4px"
          emptyColor="gray.200"
        />
      )}
      <Divider mt={16} />
    </SectionContainer>
  );
};
