'use client';
import SideBar from "./components/side-bar";
import TransactionCard from "./components/transaction-card";
import Chart from "./components/charts"
import Transactions from "./components/recent-transactions";

export default function Dashboard() {
  return (
    <div className="flex flex-row min-h-screen">
      < SideBar />
      <div className="flex-1 min-w-0 flex flex-col">
        <div className="flex flex-col p-4">
          <h1 className="text-2xl font-bold mb-4 text-white/60">Dashboard</h1>
          <span className="text-lg font-bold mb-4 text-white/60">Welcome Anurag.</span>
        </div>
        <TransactionCard />
        <div className="flex flex-col md:flex-row lg:flex-row overflow-hidden">
          <div className="min-w-0 flex-1 pr-4">
            < Chart />
          </div>
          <div className="min-w-0 flex-1 p-4">
            < Transactions />
          </div>
        </div>
      </div>

    </div>
  );
}