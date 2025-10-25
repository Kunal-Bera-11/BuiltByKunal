'use client';

import { useEffect, useState } from 'react';

interface CustomNotificationProps {
    message: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    onClose: () => void;
}

export function CustomNotification({
    message,
    type = 'success',
    onClose
}: CustomNotificationProps) {
    const [isVisible, setIsVisible] = useState(true);
    const duration = 3000; // Duration before auto-close
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    const truncateMessage = (msg: string, maxLength: number = 100) => {
        if (msg.length <= maxLength) return msg;
        return msg.substring(0, maxLength - 3) + '...';
    };

    const typeConfig = {
        success: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
            ),
            gradient: 'from-[#10B981] to-[#059669]',
            darkGradient: 'dark:from-[#34D399] dark:to-[#10B981]',
            bg: 'bg-[#F8FAFC] dark:bg-[#1E293B]/95',
            border: 'border-[#E2E8F0] dark:border-[#334155]',
            iconBg: 'bg-[#10B981]/10 dark:bg-[#34D399]/10',
            iconColor: 'text-[#10B981] dark:text-[#34D399]',
            actionColor: 'text-[#10B981] dark:text-[#34D399] hover:text-[#059669] dark:hover:text-[#10B981]',
        },
        error: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
            ),
            gradient: 'from-[#EF4444] to-[#DC2626]',
            darkGradient: 'dark:from-[#F87171] dark:to-[#EF4444]',
            bg: 'bg-[#F8FAFC] dark:bg-[#1E293B]/95',
            border: 'border-[#E2E8F0] dark:border-[#334155]',
            iconBg: 'bg-[#EF4444]/10 dark:bg-[#F87171]/10',
            iconColor: 'text-[#EF4444] dark:text-[#F87171]',
            actionColor: 'text-[#EF4444] dark:text-[#F87171] hover:text-[#DC2626] dark:hover:text-[#EF4444]',
        },
        warning: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            ),
            gradient: 'from-[#F59E0B] to-[#D97706]',
            darkGradient: 'dark:from-[#FBBF24] dark:to-[#F59E0B]',
            bg: 'bg-[#F8FAFC] dark:bg-[#1E293B]/95',
            border: 'border-[#E2E8F0] dark:border-[#334155]',
            iconBg: 'bg-[#F59E0B]/10 dark:bg-[#FBBF24]/10',
            iconColor: 'text-[#F59E0B] dark:text-[#FBBF24]',
            actionColor: 'text-[#F59E0B] dark:text-[#FBBF24] hover:text-[#D97706] dark:hover:text-[#F59E0B]',
        },
        info: {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            gradient: 'from-[#3B82F6] to-[#2563EB]',
            darkGradient: 'dark:from-[#60A5FA] dark:to-[#3B82F6]',
            bg: 'bg-[#F8FAFC] dark:bg-[#1E293B]/95',
            border: 'border-[#E2E8F0] dark:border-[#334155]',
            iconBg: 'bg-[#3B82F6]/10 dark:bg-[#60A5FA]/10',
            iconColor: 'text-[#3B82F6] dark:text-[#60A5FA]',
            actionColor: 'text-[#3B82F6] dark:text-[#60A5FA] hover:text-[#2563EB] dark:hover:text-[#3B82F6]',
        },
    };

    const config = typeConfig[type];
    const displayMessage = truncateMessage(message);

    return (
        <>
            {/* Mobile Toast (bottom popup) */}
            <div
                className={`
                    fixed bottom-4 left-4 right-4 z-50
                    flex items-center gap-3 p-4 rounded-2xl shadow-2xl
                    ${config.bg} backdrop-blur-xl
                    border-2 ${config.border}
                    transition-all duration-300 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    sm:hidden
                `}
            >
                <div className={`flex-shrink-0 p-2 rounded-xl ${config.iconBg} ${config.iconColor}`}>
                    {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[0.875rem] leading-[1.5] font-medium text-[#0F172A] dark:text-[#F8FAFC] break-words">
                        {displayMessage}
                    </p>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(onClose, 300);
                    }}
                    className="flex-shrink-0 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Desktop Snackbar (bottom right) */}
            <div
                className={`
                    hidden sm:flex
                    fixed bottom-6 right-6 z-50
                    items-center gap-4 
                    p-4 rounded-2xl shadow-2xl
                    ${config.bg} backdrop-blur-xl
                    border-2 ${config.border}
                    transition-all duration-300 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
                    max-w-md min-w-[320px]
                `}
            >
                <div className={`flex-shrink-0 p-2.5 rounded-xl ${config.iconBg} ${config.iconColor}`}>
                    {config.icon}
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[0.9375rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] break-words">
                        {displayMessage}
                    </p>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(onClose, 300);
                    }}
                    className="flex-shrink-0 text-[#64748B] dark:text-[#94A3B8] hover:text-[#0F172A] dark:hover:text-[#F8FAFC] transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </>
    );
};