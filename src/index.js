import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Mainnet, DAppProvider, Config } from '@usedapp/core';

const rootElement = document.getElementById("root");

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://rpc.ankr.com/eth',
  },
}

reactDom.render(
  <DAppProvider config={config}>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
      />
    </Routes>
  </BrowserRouter>
  </DAppProvider>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
