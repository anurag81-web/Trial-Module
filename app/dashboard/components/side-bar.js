'use client';
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <>
            <div className={`sticky top-0 h-screen bg-[#000000] text-white/60 flex flex-col shrink-0 transition-all duration-300 ease-in-out overflow-hidden rounded-r-2xl border-r border-white/8 ${open ? "w-48" : "w-16"}`}>
                <div className="flex items-center px-3 py-4">
                    {open &&
                        (<div className="flex flex-row items-center ">
                            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
                            <span className="text-lg font-bold mt-2 text-[#C61515]">Mero Hisab</span>
                        </div>)}
                    <button type="button" onClick={() => setOpen(!open)} className="text-red-600/60 hover:text-red-800 p-1 rounded transition ml-auto">
                        {open ? "➜]" : "☰"}
                    </button>
                </div>
                <hr className="border-t border-white/10 my-2" />
                <ul className="space-y-2">
                    <li>
                        <Link href="/dashboard" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/dashboard.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && <span>Dashboard</span>}
                        </Link>
                    </li>
                    <li>
                        <Link href="/parties" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/parties.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Parties"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/khata" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/khata.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Khata"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/expenses" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/expenses.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Expenses"}
                        </Link>
                    </li>
                    <hr className="border-t border-white/10 my-2" />
                    <li>
                        <Link href="/inventory" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/inventory.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Inventory"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/pos" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/pos.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "POS"}
                        </Link>
                    </li>
                    <hr className="border-t border-white/10 my-2" />
                    <li>
                        <Link href="/reports" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/reports.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Reports"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/groups" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/groups.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Groups"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/tools" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/tool.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Tools"}
                        </Link>
                    </li>
                    <li>
                        <Link href="/notifications" onClick={closeMenu} className="flex items-center gap-3 py-2 px-4 rounded hover:bg-[#3a3a3b] transition hover:cursor-pointer hover:text-[#BC7067]">
                            <Image src="/icons/notification.png" alt="Dashboard" width={24} height={24} className="invert opacity-80 hover:opacity-100 transition " />
                            {open && "Notifications"}
                        </Link>
                    </li>
                </ul>
            </div >
        </>
    );
}