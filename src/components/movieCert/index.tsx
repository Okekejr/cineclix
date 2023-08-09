import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { useMovieCert } from "@/hooks/movieCert";

interface Props {
  id: number;
}

export const MovieCert: FC<Props> = ({ id }) => {
  const { fetchMovieCert, loading, cert } = useMovieCert(id);

  useEffect(() => {
    fetchMovieCert();
  }, [fetchMovieCert]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      {cert ? (
        <Flex
          border="2px solid"
          borderColor="gray.200"
          borderRadius="md"
          mr="2"
          px="0.2rem"
        >
          {cert ? cert : ""}
        </Flex>
      ) : (
        ""
      )}
    </>
  );
};
