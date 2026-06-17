export default function TransactionCard() {
    return (
        <div className="bg w-full px-4 py-3">
            <div className="grid grid-cols-2 md:grid-cols-[1.8fr_repeat(5,1fr)] gap-3 w-full">

                <div className="col-span-2 md:col-span-1 bg-[#1B1B24] rounded-3xl p-5 border border-white/7 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 cursor-default">
                    <p className="text-gray-400 text-[11px] font-medium uppercase tracking-widest">Net Balance</p>
                    <h2 className="text-white text-3xl font-semibold tracking-tight mt-2 mb-3">रु 1,24,000</h2>
                    <div className="flex gap-2">
                        <div className="flex-1 bg-red-500/9 border border-red-500/18 rounded-xl px-3 py-2">
                            <p className="text-gray-400 text-[10px]">To pay</p>
                            <p className="text-red-400 text-sm font-semibold mt-0.5">रु 31,000</p>
                        </div>
                        <div className="flex-1 bg-green-500/9 border border-green-500/18 rounded-xl px-3 py-2">
                            <p className="text-gray-400 text-[10px]">To receive</p>
                            <p className="text-green-400 text-sm font-semibold mt-0.5">रु 52,000</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#1B1B24] rounded-3xl p-4 border border-green-950 flex flex-col justify-between min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:border-green-500/12 cursor-default">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-green-500/12 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">To Receive</p>
                        <p className="text-white text-xl font-semibold tracking-tight mt-0.5">रु 52,000</p>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-green-500/12 text-green-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 8.3%</span>
                        <span className="text-[10px] text-gray-500">this month</span>
                    </div>
                </div>

                <div className="bg-[#1B1B24] rounded-3xl p-4 border border-red-950 flex flex-col justify-between min-h-[180px] transition-transforn duration-200 hover:-translate-y-1 hover:border-red-500/12 cursor-default">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-red-500/12 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"><path d="M7 7l9.2 9.2M17 7v10H7" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">To Pay</p>
                        <p className="text-white text-xl font-semibold tracking-tight mt-0.5">रु 31,000</p>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-red-500/12 text-red-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 4.1%</span>
                        <span className="text-[10px] text-gray-500">this month</span>
                    </div>
                </div>

                <div className="bg-[#1B1B24] rounded-3xl p-4 border border-blue-950 flex flex-col justify-between min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:border-blue-500/12 cursor-default">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-blue-500/12 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><rect x="3" y="12" width="4" height="8" /><rect x="10" y="8" width="4" height="12" /><rect x="17" y="4" width="4" height="16" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Sales</p>
                        <p className="text-white text-xl font-semibold tracking-tight mt-0.5">रु 84,000</p>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-blue-500/12 text-blue-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 12%</span>
                        <span className="text-[10px] text-gray-500">this month</span>
                    </div>
                </div>

                <div className="bg-[#1B1B24] rounded-3xl p-4 border border-orange-950 flex flex-col justify-between min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:border-orange-500/12 cursor-default">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-orange-500/12 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Purchase</p>
                        <p className="text-white text-xl font-semibold tracking-tight mt-0.5">रु 41,000</p>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-orange-500/12 text-orange-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">↓ 2.4%</span>
                        <span className="text-[10px] text-gray-500">this month</span>
                    </div>
                </div>

                <div className="bg-[#1B1B24] rounded-3xl p-4 border border-purple-950 flex flex-col justify-between min-h-[180px] transition-transform duration-200 hover:-translate-y-1 hover:border-purple-500/12 cursor-default">
                    <div className="flex justify-between items-start">
                        <div className="w-8 h-8 rounded-lg bg-purple-500/12 flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"><path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                        </div>
                    </div>
                    <div>
                        <p className="text-gray-400 text-[11px] font-medium uppercase tracking-wider">Expense</p>
                        <p className="text-white text-xl font-semibold tracking-tight mt-0.5">रु 18,000</p>
                    </div>
                    <hr className="border-white/20" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-purple-500/12 text-purple-400 text-[11px] font-semibold px-2 py-0.5 rounded-full">↓ 1.8%</span>
                        <span className="text-[10px] text-gray-500">this month</span>
                    </div>
                </div>

            </div>
        </div>
    );
}