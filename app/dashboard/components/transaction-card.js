export default function TransactionCard() {
    return (
        <div className="w-full space-y-4">
            <div className="grid grid-cols-2 gap-4 w-full">

                <div className="col-span-2 bg-card rounded-3xl p-6 border border-border-color flex flex-col justify-between min-h-[190px] transition-all duration-200 hover:-translate-y-1 hover:border-border-color/85 dark:hover:border-white/20 cursor-default shadow-sm">
                    <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">Net Balance</p>
                    <h2 className="text-foreground text-3xl font-semibold tracking-tight mt-2 mb-4">रु 1,24,000</h2>
                    <div className="flex gap-3">
                        <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-2xl px-4 py-2.5">
                            <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">To pay</p>
                            <p className="text-[#DC2626] text-sm font-semibold mt-0.5">रु 31,000</p>
                        </div>
                        <div className="flex-1 bg-green-500/10 border border-green-500/20 rounded-2xl px-4 py-2.5">
                            <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">To receive</p>
                            <p className="text-[#16A34A] text-sm font-semibold mt-0.5">रु 52,000</p>
                        </div>
                    </div>
                </div>

                <div className="bg-card rounded-3xl p-6 border border-border-color/60 hover:border-green-500/40 flex flex-col justify-between min-h-[190px] transition-all duration-200 hover:-translate-y-1 cursor-default shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-green-500/12 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"><path d="M7 7l9.2 9.2M17 7v10H7" /></svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">To Receive</p>
                        <p className="text-foreground text-xl font-semibold tracking-tight mt-0.5">रु 52,000</p>
                    </div>
                    <hr className="border-border-color/40 my-3" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-green-500/12 text-green-500 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 8.3%</span>
                        <span className="text-[10px] text-muted">this month</span>
                    </div>
                </div>

                <div className="bg-card rounded-3xl p-6 border border-border-color/60 hover:border-red-500/40 flex flex-col justify-between min-h-[190px] transition-all duration-200 hover:-translate-y-1 cursor-default shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-red-500/12 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">To Pay</p>
                        <p className="text-foreground text-xl font-semibold tracking-tight mt-0.5">रु 31,000</p>
                    </div>
                    <hr className="border-border-color/40 my-3" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-red-500/12 text-red-500 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 4.1%</span>
                        <span className="text-[10px] text-muted">this month</span>
                    </div>
                </div>

                <div className="bg-card rounded-3xl p-6 border border-border-color/60 hover:border-blue-500/40 flex flex-col justify-between min-h-[190px] transition-all duration-200 hover:-translate-y-1 cursor-default shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/12 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"><rect x="3" y="12" width="4" height="8" /><rect x="10" y="8" width="4" height="12" /><rect x="17" y="4" width="4" height="16" /></svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">Sales</p>
                        <p className="text-foreground text-xl font-semibold tracking-tight mt-0.5">रु 84,000</p>
                    </div>
                    <hr className="border-border-color/40 my-3" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-blue-500/12 text-blue-500 text-[11px] font-semibold px-2 py-0.5 rounded-full">↑ 12%</span>
                        <span className="text-[10px] text-muted">this month</span>
                    </div>
                </div>

                <div className="bg-card rounded-3xl p-6 border border-border-color/60 hover:border-purple-500/40 flex flex-col justify-between min-h-[190px] transition-all duration-200 hover:-translate-y-1 cursor-default shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/12 flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round"><path d="M20 12V22H4V12" /><path d="M22 7H2v5h20V7z" /><path d="M12 22V7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>
                    </div>
                    <div className="mt-4">
                        <p className="text-muted text-[10px] font-semibold uppercase tracking-wider">Expense</p>
                        <p className="text-foreground text-xl font-semibold tracking-tight mt-0.5">रु 18,000</p>
                    </div>
                    <hr className="border-border-color/40 my-3" />
                    <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 bg-purple-500/12 text-purple-500 text-[11px] font-semibold px-2 py-0.5 rounded-full">↓ 1.8%</span>
                        <span className="text-[10px] text-muted">this month</span>
                    </div>
                </div>

            </div>
        </div>
    );
}