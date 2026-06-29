'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
    CartIcon,
    FoodIcon,
    ArrowDownLeftIcon,
    ArrowUpRightIcon
} from './icons';

export default function Transactions() {
    const [activeTab, setActiveTab] = useState('all');

    const tabs = [
        { key: 'all', label: 'All' },
        { key: 'expense', label: 'Expense' },
        { key: 'parties', label: 'Parties' },
        { key: 'sales', label: 'Sales' },
        { key: 'purchase', label: 'Purchase' },
    ];

    const transactions = [
        {
            id: 1,
            title: 'Grocery Store',
            time: '6:40 PM',
            amount: 'रु 24,000',
            isNegative: true,
            icon: CartIcon,
            iconBg: 'bg-sidebar-hover',
            day: 'Today',
            categories: ['all', 'purchase', 'expense']
        },
        {
            id: 2,
            title: 'Food',
            time: '2:45 PM',
            amount: 'रु 1,500',
            isNegative: true,
            icon: FoodIcon,
            iconBg: 'bg-sidebar-hover',
            day: 'Today',
            categories: ['all', 'expense']
        },
        {
            id: 3,
            title: 'Received from X',
            time: '4:45 PM',
            amount: 'रु 1,25,000',
            isNegative: false,
            icon: ArrowDownLeftIcon,
            iconBg: 'bg-green-500/12',
            day: 'Yesterday',
            categories: ['all', 'parties', 'sales']
        },
        {
            id: 4,
            title: 'Received from B',
            time: '1:35 PM',
            amount: 'रु 1,89,500',
            isNegative: false,
            icon: ArrowDownLeftIcon,
            iconBg: 'bg-green-500/12',
            day: 'Yesterday',
            categories: ['all', 'parties', 'sales']
        },
        {
            id: 5,
            title: 'Send to Y',
            time: '10:35 AM',
            amount: 'रु 1,00,500',
            isNegative: true,
            icon: ArrowUpRightIcon,
            iconBg: 'bg-red-500/12',
            day: 'Yesterday',
            categories: ['all', 'parties', 'purchase']
        }
    ];

    const filteredTransactions = transactions.filter(t => t.categories.includes(activeTab));

    const groupedDays = ["Today", "Yesterday"];

    return (
        <>
            <div className="bg-card w-full p-6 rounded-3xl shadow-sm border border-border-color transition-all duration-200 hover:-translate-y-1 hover:border-border-color/80 dark:hover:border-white/20 cursor-default">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-row items-center">
                        <Image src="/images/wallet.png" width={24} height={24} alt="wallet" className="dark:invert" />
                        <span className="font-semibold text-xl text-foreground ml-2"> Recent Transactions</span>
                    </div>
                </div>

                <div className="flex gap-1.5 mt-4 overflow-x-auto pb-1 scrollbar-none border-b border-border-color/60">
                    {tabs.map(({ key, label }) => {
                        const isActive = key === activeTab;
                        return (
                            <button
                                key={key}
                                onClick={() => setActiveTab(key)}
                                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap mb-2 ${isActive
                                        ? "bg-blue-600 hover:bg-blue-500 text-white border-blue-600 hover:border-blue-500 shadow-sm"
                                        : "bg-transparent text-muted border-border-color hover:text-foreground hover:bg-sidebar-hover"
                                    }`}
                            >
                                {label}
                            </button>
                        );
                    })}
                </div>

                <div className="space-y-4 mt-3">
                    {filteredTransactions.length === 0 ? (
                        <div className="text-center py-6 text-sm text-muted">
                            No transactions in this category.
                        </div>
                    ) : (
                        groupedDays.map(day => {
                            const dayItems = filteredTransactions.filter(t => t.day === day);
                            if (dayItems.length === 0) return null;
                            return (
                                <div key={day} className="space-y-1">
                                    <p className="text-muted text-[10px] font-semibold uppercase tracking-wider mb-2">{day}</p>
                                    {dayItems.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <div key={item.id} className="flex justify-between items-center px-4 py-3 rounded-2xl transition duration-150 hover:bg-sidebar-hover/40">
                                                <div className="flex items-center gap-3">
                                                    <div className={`${item.iconBg} w-10 h-10 rounded-xl flex items-center justify-center`}>
                                                        <Icon />
                                                    </div>
                                                    <div>
                                                        <p className="text-foreground text-sm font-semibold">{item.title}</p>
                                                        <p className="text-muted text-xs mt-0.5">{item.time}</p>
                                                    </div>
                                                </div>
                                                <span className={`${item.isNegative ? "text-red-500" : "text-[#16A34A]"} font-semibold text-sm`}>
                                                    {item.isNegative ? `- ${item.amount}` : ` + ${item.amount}`}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </>
    );
}