'use client';

export default function ContactForm() {
    return (
        <div className="w-full h-full bg-white/60 dark:bg-[#1E293B]/60 backdrop-blur-xl sm:border sm:border-[#E2E8F0]/60 dark:border-[#334155] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col gap-5 sm:gap-6">
            <div className="flex flex-col gap-2 mb-2">
                <h3 className="text-[1.25rem] leading-[1.3] sm:text-[2rem] sm:leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                    Send Me a Message
                </h3>
                <p className="text-[0.875rem] sm:text-[0.9375rem] text-[#64748B] dark:text-[#94A3B8] leading-[1.5]">
                    I'll get back to you as soon as possible!
                </p>
            </div>

            <form className="flex flex-col gap-4 sm:gap-5">
                <div className="flex flex-col gap-2">
                    <label className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                        Your Name
                    </label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                        Your Email
                    </label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                        required
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                        Your Message
                    </label>
                    <textarea
                        placeholder="Tell me about your project or idea..."
                        rows={3}
                        className="p-3 sm:p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[0.9375rem] sm:text-[0.9375rem] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                        required
                    ></textarea>
                </div>

                <button onClick={()=>{}} className="group mt-2 cursor-pointer w-full px-6 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white text-[0.9375rem] sm:text-[0.9375rem] font-semibold rounded-full shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]">
                    <span className="flex items-center justify-center gap-2">
                        Send Message
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </button>
            </form>
        </div>
    );
}