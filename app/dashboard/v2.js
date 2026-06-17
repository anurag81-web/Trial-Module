import Links from "next/link";

export default function TransactionCard({ transaction }) {
    return (
        <div className="flex flex-wrap gap-4 px-4">
            


            <div className="w-48 ml-2 h-34 bg-[#100f0f78] border-l-8 border-green-600 p-4 rounded-2xl shadow-sm">  
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white">
                        To Receive 
                    </div>
                </div>
            </div>
            <div className="w-48 ml-2 h-34 bg-[#100f0f78] border-l-8 border-red-600 p-4 rounded-2xl shadow-sm">  
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white">  
                        To Pay
                    </div>
                </div>
            </div>
            <div className="w-48 ml-2 h-34 bg-[#100f0f78] border-l-8 border-blue-900 p-4 rounded-2xl shadow-sm">  
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white">  
                        Sales 
                    </div>
                </div>
            </div>
            <div className="w-48 ml-2 h-34 bg-[#100f0f78] border-l-8 border-purple-900 p-4 rounded-2xl shadow-sm">  
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white">  
                        Purchases  
                    </div>
                </div>
            </div>
            <div className="w-48 ml-2 h-34 bg-[#100f0f78] border-l-8 border-orange-900 p-4 rounded-2xl shadow-sm">  
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-white">  
                        Expenses 
                    </div>
                </div>
            </div>
        </div>
    );
}