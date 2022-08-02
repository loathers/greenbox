import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import MainPage from "./MainPage";

export default function App() {
  const theme = extendTheme({
    colors: {
      complete: "#afa",
      partial: "#eea",
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <MainPage />
    </ChakraProvider>
  );
}
