import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOMClient from "react-dom/client";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
//wagmi
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from 'wagmi'


import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";


const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    alchemyProvider({ apiKey: 'yourAlchemyApiKey' as string}),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})



root.render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <BrowserRouter basename={import.meta.env.DEV ? '/' : '/BarNFT/'}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </BrowserRouter> 
    </WagmiConfig>
  </React.StrictMode>
);