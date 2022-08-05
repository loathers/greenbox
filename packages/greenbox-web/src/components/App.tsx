import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryParamProvider } from "use-query-params";
import { WindowHistoryAdapter } from "use-query-params/adapters/window";

import { persistor, store } from "../store";

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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <QueryParamProvider adapter={WindowHistoryAdapter}>
            <MainPage />
          </QueryParamProvider>
        </PersistGate>
      </Provider>
    </ChakraProvider>
  );
}
