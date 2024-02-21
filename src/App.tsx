import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatfromSelector from "./components/PlatfromSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import { SiAdobeacrobatreader } from "react-icons/si";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    //
    <Grid
      templateAreas={{
        // screen size breakpoint of ChakraUI
        base: `"nav""main"`,
        lg: `"nav nav""aside main"`, // >1024px
      }}
      templateColumns={{
        base: "1fr", // small device
        lg: "200px 1fr", // large device
        // fr = stretching and take up all available space
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* show "aside" when above lg screen size */}
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex paddingLeft={2} marginBottom={5}>
          <Box marginRight={5}>
            <PlatfromSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
          </Box>
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </Flex>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
