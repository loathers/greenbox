import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryParamProvider } from "use-query-params";
import { WindowHistoryAdapter } from "use-query-params/adapters/window";

import { persistor, store } from "../store/index.js";
import { theme } from "../theme.js";

import MainPage from "./MainPage.js";

export default function App() {
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
