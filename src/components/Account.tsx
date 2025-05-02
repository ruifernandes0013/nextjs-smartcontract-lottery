"use client";

import * as React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { FaEthereum } from "react-icons/fa";

export function Account() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <div>
      <nav className="w-full px-6 py-4 bg-white shadow-md flex flex-wrap md:flex-nowrap items-center justify-between border-b">
        <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
          <FaEthereum />
          <span>Web3 App</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="">
            <span className="text-sm font-mono text-gray-700 bg-gray-100 px-3 py-1 rounded-lg">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </span>
            <button
              onClick={() => disconnect()}
              className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg text-sm transition shadow-md"
            >
              Disconnect
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
