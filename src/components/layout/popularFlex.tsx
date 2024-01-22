import { Flex, FlexProps } from "@chakra-ui/react";
import { FC } from "react";

interface Props extends FlexProps {
  children: React.ReactNode;
}

export const PopularFlex: FC<Props> = ({ children, ...rest }) => {
  return (
    <Flex
      gap={8}
      justifyContent="space-evenly"
      flexWrap="wrap"
      
      w={{ base: "100%" }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
