/* This component is built to avoid duplicated card styles code 
in different component, e.g., GameCard & GameCard Skeleton */

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box borderRadius={10}>{children}</Box>;
};

export default GameCardContainer;
