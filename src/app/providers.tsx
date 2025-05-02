"use client";
import { State, useAccount, WagmiProvider } from "wagmi";
import { config } from "../../config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Account } from "../components/Account";
import { WalletOptions } from "../components/WalletOptions";

const queryClient = new QueryClient();

function ConnectWallet() {
  const { isConnected } = useAccount();
  if (isConnected) return <Account />;
  return <WalletOptions />;
}

export function Providers({
  children,
  initialState,
}: {
  children: React.ReactNode;
  initialState: State | undefined;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <ConnectWallet />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}
