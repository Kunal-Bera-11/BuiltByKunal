'use client';
import { HomeIcon, BriefcaseIcon, FolderIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export function MobileNavbar() {
    const [activeTab, setActiveTab] = useState('home');

    const navItems = [
        { id: 'home', icon: HomeIcon, label: 'Home' },
        { id: 'work', icon: BriefcaseIcon, label: 'Work' },
        { id: 'projects', icon: FolderIcon, label: 'Projects' },
        { id: 'contact', icon: EnvelopeIcon, label: 'Contact' }
    ];

    return (
        <nav className="w-full h-full grid grid-cols-4 gap-2 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 p-2">

            {
                navItems.map((items) => (
                    <div
                        key={items.id}
                        onClick={() => setActiveTab(items.id)}
                        className={`w-full h-full col-span-1 flex flex-col items-center justify-center rounded-lg transition-all duration-200
                        ${activeTab === items.id
                                ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
                            }`}>
                        <items.icon className="w-5 h-5 mb-1" />
                        <span className="text-xs font-medium">{items.label}</span>
                    </div>
                ))
            }
        </nav>
    );
}


