'use client';

export default function ActionButtons() {

    const handleResumeClick = () => {
        const KunalResume = '/documents/Kunal_Bera_Frontend.pdf'
        window.open(KunalResume, '_blank', 'noopener,noreferrer')
    }

    return (
        <div className="w-full flex flex-col sm:flex-row gap-4">
            <button onClick={handleResumeClick} className="group cursor-pointer flex-1 px-6 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white text-[15px] font-semibold rounded-full shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]">
                <span className="flex items-center justify-center gap-2">
                    View My Resume
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </span>
            </button>

            <button className="cursor-pointer hidden sm:flex-1 px-6 py-3.5 bg-[#F1F5F9] dark:bg-[#334155]/60 text-[#0F172A] dark:text-[#F8FAFC] text-[15px] font-semibold rounded-full border-2 border-[#E2E8F0] dark:border-[#334155] hover:border-[#3B82F6] dark:hover:border-[#60A5FA] hover:bg-[#EFF6FF] dark:hover:bg-[#1E3A8A]/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]">
                <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Get in Touch
                </span>
            </button>
        </div>
    )
}