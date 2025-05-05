import { contractConfig } from "@/utils/constants";
import { useState } from "react";
import {
  useAccount,
  useBalance,
  useReadContracts,
  useWriteContract,
} from "wagmi";
import { ethers } from "ethers";

const raffleState = {
  0: "Open",
  1: "Calculating new winner",
};

export default function Raffle() {
  const [value, setValue] = useState(0);
  const { address, chainId } = useAccount();
  const { data: balance } = useBalance({ address });
  const { data: totalPrize } = useBalance({ address: contractConfig.address });
  const { writeContract } = useWriteContract();

  const { data } = useReadContracts({
    contracts: [
      { ...contractConfig, functionName: "getEntranceFee" },
      { ...contractConfig, functionName: "getInterval" },
      { ...contractConfig, functionName: "getRecentWinner" },
      { ...contractConfig, functionName: "getRaffleState" },
    ],
  });

  const [contractEntranceFee, interval, prevWinner, status] = data || [];

  const formattedBalance = balance ? ethers.formatEther(balance.value) : "-";

  const formattedEntranceFee = contractEntranceFee?.result
    ? ethers.formatEther(contractEntranceFee.result.toString())
    : "-";

  const formattedTotalPrize = totalPrize
    ? ethers.formatEther(totalPrize.value)
    : "-";

  const formattedStatus =
    typeof status?.result === "number"
      ? raffleState[status.result as keyof typeof raffleState] || "Unknown"
      : "-";

  async function enterRaffle(e: React.FormEvent) {
    e.preventDefault();
    writeContract({
      address: contractConfig.address,
      abi: contractConfig.abi,
      functionName: "enterRaffle",
      args: [],
      value: ethers.parseEther(value.toString()),
    });
  }

  return (
    <div className="p-6 rounded-lg w-full">
      <div className="flex w-full justify-between gap-x-6 mb-4 text-white font-medium">
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Address</h1>
          <p className="block text-black">
            {address ? address.slice(0, 6) + "..." + address.slice(-4) : "-"}
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Balance</h1>
          <p className="block text-black">{formattedBalance.slice(0, 5)}</p>
        </div>
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Chain Id</h1>
          <p className="block text-black">{chainId || "-"}</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <h1 className="text-black text-xl font-bold">The Raffle Lottery</h1>
        <p>This is a decentralized lottery app.</p>
        <p>
          To enter the game you must enter the entrance fee of{" "}
          {formattedEntranceFee} ETH.
        </p>
        <b>
          A new winner picked every {Number(interval?.result?.toString() ?? 0)}{" "}
          seconds.
        </b>
      </div>

      <div className="flex w-full justify-between gap-x-6 my-6 text-white font-medium">
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Previous Winner</h1>
          <p className="block text-black">
            {prevWinner?.result
              ? prevWinner.result.toString().slice(0, 6) +
                "..." +
                prevWinner.result.toString().slice(-4)
              : "-"}
          </p>
        </div>
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Total Prize</h1>
          <p className="block text-black">{formattedTotalPrize.slice(0, 5)}</p>
        </div>
        <div className="flex-1">
          <h1 className="text-black text-xl font-bold">Lottery Status</h1>
          <p className="block text-black">{formattedStatus}</p>
        </div>
      </div>

      {/* Form section */}
      <form onSubmit={enterRaffle} className="space-y-4">
        <label className="block text-black">
          Enter Raffle
          <input
            type="text"
            className="w-full mt-1 bg-gray-200 focus:bg-white p-2 rounded"
            placeholder="0.01 ETH"
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </label>
        <button
          type="submit"
          // disabled={status?.result !== 0}
          className="w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded disabled:opacity-50"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
