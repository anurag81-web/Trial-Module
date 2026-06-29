'use client';

import SideBar from "./components/side-bar";
import TransactionCard from "./components/transaction-card";
import Chart from "./components/charts";
import Transactions from "./components/recent-transactions";
import { useTheme } from "next-themes";

export default function Dashboard() {
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex flex-row min-h-screen">
            <SideBar />

            <div className="flex-1 min-w-0 flex flex-col">
                <div className="sticky top-0 z-10 flex flex-row items-center px-6 py-4 justify-between border-b border-border-color bg-background/80 backdrop-blur-md">
                    <div>
                        <h1 className="text-xl font-semibold text-foreground">
                            Good afternoon
                        </h1>
                    </div>
                </div>
                <div className="flex-1 grid grid-cols-1 lg:grid-cols-[45%_55%]">
                    <div className="flex flex-col p-5 lg:p-6 border-r border-border-color">
                        <TransactionCard />
                    </div>
                    <div className="flex flex-col gap-6 p-5 lg:p-6">
                        <Chart />
                        <Transactions />
                    </div>
                </div>
            </div>
        </div>
    );
}