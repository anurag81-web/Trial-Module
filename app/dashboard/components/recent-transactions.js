import Image from "next/image";
export default function Transactions() {
    return (
        <>
            <div className="bg-[#1B1B24] w-full p-6 rounded-3xl shadow-sm border border-white/8 transition-transform duration-200 hover:-translate-y-1 hover:border-white/20 cursor-defaults">
                <div className="flex flex-row">
                    <Image src="/images/wallet.png" width={24} height={24} alt="wallet" className="invert" />
                    <span className="font-semibold text-xl text-white ml-2"> Recent Transactions</span>
                </div>
                <hr className="border-white/20 mt-2" />
                <div>
                    <p className="text-white/40 text-xs mt-4 mb-2">TODAY</p>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-xl">🛒</div>
                            <div>
                                <p className="text-white text-sm font-medium">Grocery Store</p>
                                <p className="text-white/40 text-xs">6:40 PM</p>
                            </div>
                        </div>
                        <span className="text-red-400 font-semibold text-sm">- रु 24,000</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/10 p-2 rounded-xl">🍔</div>
                            <div>
                                <p className="text-white text-sm font-medium">Food </p>
                                <p className="text-white/40 text-xs">2:45 PM</p>
                            </div>
                        </div>
                        <span className="text-red-400 font-semibold text-sm">- रु 1,500</span>
                    </div>
                    <p className="text-white/40 text-xs mt-4 mb-2">Yesterday</p>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/12 p-2 rounded-xl">￬</div>
                            <div>
                                <p className="text-white text-sm font-medium">Received from X</p>
                                <p className="text-white/40 text-xs">4:45 PM</p>
                            </div>
                        </div>
                        <span className="text-green-400 font-semibold text-sm"> रु 1,25,000 </span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-500/12 p-2 rounded-xl">￬</div>
                            <div>
                                <p className="text-white text-sm font-medium">Received from B </p>
                                <p className="text-white/40 text-xs">1:35 PM</p>
                            </div>
                        </div>
                        <span className="text-green-400 font-semibold text-sm"> रु 1,89,500</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                        <div className="flex items-center gap-3">
                            <div className="bg-red-500/12 p-2 rounded-xl">↑</div>
                            <div>
                                <p className="text-white text-sm font-medium">Send to Y</p>
                                <p className="text-white/40 text-xs">100:35 AM</p>
                            </div>
                        </div>
                        <span className="text-red-400 font-semibold text-sm"> रु 1,00,500</span>
                    </div>
                </div>
            </div>
        </>
    );

}