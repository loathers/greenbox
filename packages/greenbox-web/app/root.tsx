import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import { StrictMode } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import { PersistGate } from "redux-persist/lib/integration/react";

import { persistor, store } from "./store/index.js";
import { theme } from "./theme.js";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
      <ChakraProvider value={theme}>
        <ThemeProvider attribute="class" disableTransitionOnChange>
          <ReduxProvider store={store}>
            <PersistGate persistor={persistor}>
              <Outlet />
            </PersistGate>
          </ReduxProvider>
        </ThemeProvider>
      </ChakraProvider>
    </StrictMode>
  );
}
