import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
