'use client';
import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export function MobileNavbar() {
    const [activeTab, setActiveTab] = useState<string>('');
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { id: 'home', icon: HomeIcon, label: 'Home', route: '/home' },
        { id: 'work', icon: BriefcaseIcon, label: 'Work', route: '/home' },
        { id: 'projects', icon: FolderIcon, label: 'Projects', route: '/home' },
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
            className="w-full h-full grid grid-cols-4 gap-1 bg-white dark:bg-[#1E293B] border-t border-[#E2E8F0] dark:border-[#334155] px-2 py-1.5"
            role="navigation"
            aria-label="Main navigation">
            {
                navItems.map((items,index) => (
                    <button
                        key={items.id}
                        onClick={() => handleRouteChange(index)}
                        aria-current={activeTab === items.id ? 'page' : undefined}
                        className={`w-full h-full col-span-1 flex flex-col items-center justify-center rounded-xl transition-all duration-300 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]
                ${activeTab === items.id
                                ? 'text-[#3B82F6] dark:text-[#60A5FA] bg-[#EFF6FF] dark:bg-[#1E3A8A]/20 scale-[0.98]'
                                : 'text-[#64748B] dark:text-[#94A3B8] active:scale-95'
                            }`}>
                        <items.icon
                            className={`w-6 h-6 mb-1 transition-transform duration-300 ${activeTab === items.id ? 'scale-110' : ''
                                }`}
                            strokeWidth={activeTab === items.id ? 2.5 : 2}
                        />
                        <span className={`text-[11px] font-medium transition-all duration-300 ${activeTab === items.id ? 'font-semibold' : ''
                            }`}>
                            {items.label}
                        </span>
                    </button>
                ))
            }
        </nav>
    );
}


