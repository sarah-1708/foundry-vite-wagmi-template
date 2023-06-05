import React from 'react';
import ReactDOM from 'react-dom/client';
import { WagmiConfig, configureChains, createConfig, sepolia } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import App from './App.tsx';
import './index.css';

const { publicClient, webSocketPublicClient } = configureChains([sepolia], [publicProvider()]);
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <App />
    </WagmiConfig>
  </React.StrictMode>,
);
