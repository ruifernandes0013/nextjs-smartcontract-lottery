"use client";

import * as React from "react";
import { useConnect } from "wagmi";
import { FaEthereum } from "react-icons/fa";
import { RiWallet3Line } from "react-icons/ri";
import { SiWalletconnect, SiCoinbase } from "react-icons/si";

const connectorIcons: Record<string, React.ReactNode> = {
  MetaMask: <RiWallet3Line className="text-orange-500" />,
  WalletConnect: <SiWalletconnect className="text-blue-500" />,
  "Coinbase Wallet": <SiCoinbase className="text-yellow-500" />,
};

export function WalletOptions() {
  const { connect, connectors } = useConnect();

  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md flex flex-wrap md:flex-nowrap items-center justify-between border-b">
      <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
        <FaEthereum />
        <span>Web3 App</span>
      </div>

      <div className="flex items-center gap-4">
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {connectorIcons[connector.name] ?? <RiWallet3Line />}
            {connector.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
