'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    DashboardIcon,
    PartiesIcon,
    KhataIcon,
    ExpensesIcon,
    InventoryIcon,
    POSIcon,
    ReportsIcon,
    GroupsIcon,
    ToolsIcon,
    NotificationsIcon
} from './icons';

export default function SideBar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    const menuItems = [
        { name: 'Dashboard', href: '/dashboard', icon: DashboardIcon },
        { name: 'Parties', href: '/parties', icon: PartiesIcon },
        { name: 'Khata', href: '/khata', icon: KhataIcon },
        { name: 'Expenses', href: '/expenses', icon: ExpensesIcon, separator: true },
        { name: 'Inventory', href: '/inventory', icon: InventoryIcon },
        { name: 'POS', href: '/pos', icon: POSIcon, separator: true },
        { name: 'Reports', href: '/reports', icon: ReportsIcon },
        { name: 'Groups', href: '/groups', icon: GroupsIcon },
        { name: 'Tools', href: '/tools', icon: ToolsIcon },
        { name: 'Notifications', href: '/notifications', icon: NotificationsIcon }
    ];

    return (
        <>
            <div className={`sticky top-0 h-screen bg-sidebar-bg text-muted flex flex-col shrink-0 transition-all duration-300 ease-in-out rounded-r-2xl border-r border-border-color ${open ? 'w-48 overflow-y-auto' : 'w-16 overflow-visible'}`}>
                <div className="flex items-center px-3 py-4">
                    {open &&
                        (<div className="flex flex-row items-center ">
                            <Image src="/images/logo.png" alt="Logo" width={32} height={32} />
                            <span className="text-lg font-bold mt-2 text-[#C61515]">Mero Hisab</span>
                        </div>)}
                    <button type="button" onClick={() => setOpen(!open)} className="text-muted hover:text-foreground p-1.5 hover:bg-sidebar-hover rounded-lg transition ml-auto cursor-pointer">
                        {open ? '➜' : '☰'}
                    </button>
                </div>
                <ul className="space-y-2 px-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href + '/'));
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    onClick={closeMenu}
                                    className={`group relative flex items-center gap-3 py-2 px-3 rounded-lg transition-all duration-200 hover:cursor-pointer ${
                                    isActive
                                        ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400 font-medium'
                                        : 'text-muted hover:bg-sidebar-hover hover:text-foreground'
                                }`}
                            >
                                <div className={`flex items-center justify-center rounded-lg p-1.5 transition-colors duration-200 ${
                                    isActive ? 'text-blue-500' : 'bg-transparent text-muted group-hover:text-foreground'
                                }`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                {open && <span className="text-sm font-semibold">{item.name}</span>}
                                
                                {!open && (
                                    <div className="absolute left-14 top-1/2 -translate-y-1/2 ml-2 px-2.5 py-1.5 bg-card text-foreground text-xs font-semibold rounded-md shadow-xl border border-border-color opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50 whitespace-nowrap">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                            {item.separator && <hr className="border-t border-border-color/40 my-2" />}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}