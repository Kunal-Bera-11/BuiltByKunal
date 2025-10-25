'use client';

import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from "next/navigation";

export function DesktopNavbar() {
    const [activeTab, setActiveTab] = useState<string>('');
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { id: 'home', icon: HomeIcon, label: 'Home', route: '/home' },
        { id: 'work', icon: BriefcaseIcon, label: 'Work', route: '/work' },
        { id: 'projects', icon: FolderIcon, label: 'Projects', route: '#' },
        { id: 'contact', icon: EnvelopeIcon, label: 'Contact', route: '/contact' }
    ];

    const handleRouteChange = (index: number) => {
        setActiveTab(navItems[index].id)
        router.push(navItems[index].route)
    }

    useEffect(() => {
        const pathIndex = navItems.findIndex(item => item.route === pathname);
        if (pathIndex !== -1) {
            setActiveTab(navItems[pathIndex].id);
        }
    }, [])

    return (
        <nav
            className="w-4/5 h-full rounded-full flex justify-center gap-1.5 bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-1.5 shadow-sm"
            role="navigation"
            aria-label="Main navigation">
            {
                navItems.map((items, index) => (
                    <button
                        key={items.id}
                        onClick={() => handleRouteChange(index)}
                        aria-current={activeTab === items.id ? 'page' : undefined}
                        className={`cursor-pointer py-2.5 px-5 flex gap-2.5 items-center rounded-full transition-all duration-200 active:scale-[0.97]
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]
                ${activeTab === items.id
                                ? 'text-white dark:text-[#0F172A] bg-[#3B82F6] dark:bg-[#60A5FA] shadow-sm'
                                : 'text-[#475569] dark:text-[#CBD5E1] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] hover:bg-[#F1F5F9] dark:hover:bg-[#334155]/60'
                            }`}>
                        <items.icon className="w-[18px] h-[18px]" strokeWidth={activeTab === items.id ? 2.5 : 2} />
                        <span className="text-[15px] font-medium leading-none">{items.label}</span>
                    </button>
                ))
            }
        </nav>
    );
}


