import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { StrictMode } from "react";
import { Provider } from "react-redux";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./store/index.js";
import { theme } from "./theme.js";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Outlet />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </StrictMode>
  );
}
