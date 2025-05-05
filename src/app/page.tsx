"use client";
import Raffle from "@/components/Raffle";

export const runtime = "edge";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <Raffle />
    </div>
  );
}
