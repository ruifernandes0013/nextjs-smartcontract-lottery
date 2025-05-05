// app/providers.tsx
"use client";

import { useEffect, useState } from "react";
import { State, useAccount, WagmiProvider } from "wagmi";
import { config } from "../../config";
import { cookieToInitialState } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Account } from "../components/Account";
import { WalletOptions } from "../components/WalletOptions";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  return isConnected ? <Account /> : <WalletOptions />;
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [initialState, setInitialState] = useState<State | undefined>();

  useEffect(() => {
    const cookie = document.cookie;
    const state = cookieToInitialState(config, cookie);
    setInitialState(state);
  }, []);

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
