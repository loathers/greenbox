import { ColorModeScript } from "@chakra-ui/system";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./components/App.js";
import { theme } from "./theme.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </StrictMode>,
);
