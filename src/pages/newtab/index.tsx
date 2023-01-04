import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import Home from "@pages/newtab/containers/Home/Home";
import "@pages/newtab/index.css";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import theme from "./theme";

refreshOnUpdate("pages/newtab");

function init() {
  const appContainer = document.querySelector("#app-container");
  if (!appContainer) {
    throw new Error("Can not find AppContainer");
  }
  const root = createRoot(appContainer);
  root.render(
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  );
}

init();
