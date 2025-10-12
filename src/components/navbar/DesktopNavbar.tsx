'use client';
import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function DesktopNavbar() {
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', icon: HomeIcon, label: 'Home' },
        { id: 'work', icon: BriefcaseIcon, label: 'Work' },
        { id: 'projects', icon: FolderIcon, label: 'Projects' },
        { id: 'contact', icon: EnvelopeIcon, label: 'Contact' }
    ];

    return (
        <nav className="w-full h-full flex flex-col justify-center gap-3 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 p-2">
            {
                navItems.map((items) => (
                    <div
                        key={items.id}
                        onClick={() => setActiveTab(items.id)}
                        className={`w-full py-3 px-4 cursor-pointer flex gap-2 items-center rounded-lg transition-all duration-200
                        ${activeTab === items.id
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}>
                        <items.icon className="w-5 h-5" />
                        <span className="text-lg font-semibold">{items.label}</span>
                    </div>
                ))
            }
        </nav>
    );
}


