import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DAppProvider } from "@usedapp/core";
import { SnackbarProvider } from 'notistack';
import detectEthereumProvider from "@metamask/detect-provider";

import { CHAIN_ID } from './constants/strings'

const config = {
  readOnlyChainId: CHAIN_ID,
  readOnlyUrls: {
    [CHAIN_ID]: "https://eth-rinkeby.alchemyapi.io/v2/0nLMqcsk11OwZyIX-Xyd-OmwqPAjyhdn",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));

async function index() {
  const provider = await detectEthereumProvider();

  root.render(
    <React.StrictMode>
      <SnackbarProvider maxSnack={3}>
        <DAppProvider config={provider ? config : {}}>
          <App />
        </DAppProvider>
      </SnackbarProvider>
    </React.StrictMode>
  );
}

index();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
