import ContactForm from "./_components/ContactForm";

export default function ContactPage() {
    return (
        <>
            <section className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 overflow-y-auto">
                <div className="w-full sm:w-3/5 h-auto">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] sm:p-10 p-6 shadow-lg">
                        <div className="w-full h-full flex flex-col gap-6">
                            <div className="w-full flex flex-col gap-4 sm:gap-6 ">
                                <h1 className="text-[1.625rem] leading-[1.2] sm:text-[56px] sm:leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                    Let&apos;s Build Something Great Together 🚀
                                    {/* <span className="inline-block animate-wave origin-[70%_70%]">👋</span> */}
                                </h1>
                                <h2 className="text-[1rem] leading-[1.35] sm:text-[34px] sm:leading-[1.3] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                    I&apos;m open to frontend & full stack roles, collaborations, and creative ideas.
                                </h2>
                                <p className="text-[0.75rem] leading-[1.5] sm:text-[20px] sm:leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                    Whether you&apos;re hiring, collaborating, or just saying hi — feel free to reach out.
                                    I&apos;m currently available for opportunities where I can help build seamless,
                                    high-performance digital experiences.
                                </p>
                            </div>

                            <div className="w-full h-full justify-center flex flex-col gap-5 sm:gap-6">
                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#3B82F6] dark:hover:border-[#60A5FA] transition-colors duration-300 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#3B82F6] dark:text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                            <span className="text-[#64748B] dark:text-[#94A3B8] text-[13px] font-medium">Email</span>
                                        </div>
                                        <a
                                            href="mailto:berakunal11@gmail.com"
                                            className="text-[#0F172A] dark:text-[#F8FAFC] text-[14px] sm:text-[16px] font-semibold hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors break-all">
                                            berakunal11@gmail.com
                                        </a>
                                    </div>

                                    <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] transition-colors duration-300 flex flex-col gap-2">
                                        <div className="flex items-center gap-2">
                                            <svg className="w-5 h-5 text-[#8B5CF6] dark:text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                            <span className="text-[#64748B] dark:text-[#94A3B8] text-[13px] font-medium">Phone</span>
                                        </div>
                                        <a
                                            href="tel:+919172860229"
                                            className="text-[#0F172A] dark:text-[#F8FAFC] text-[14px] sm:text-[16px] font-semibold hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors">
                                            +91 91728 60229
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center gap-3">
                                    <span className="text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">Connect with me:</span>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/kunal-bera-01b10b240"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#3B82F6] dark:hover:border-[#60A5FA] flex items-center justify-center text-[#3B82F6] dark:text-[#60A5FA] hover:scale-110 transition-all duration-300">
                                            <svg className="w-5 h-5 text-[#3B82F6] dark:text-[#60A5FA]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766c.965 0 1.75.79 1.75 1.766s-.785 1.766-1.75 1.766zm13.5 11.268h-3v-5.604c0-1.337-.025-3.055-1.865-3.055-1.867 0-2.154 1.459-2.154 2.965v5.694h-3v-10h2.879v1.367h.041c.401-.761 1.379-1.563 2.839-1.563 3.035 0 3.596 2.004 3.596 4.609v5.587z" />
                                            </svg>
                                        </a>
                                        <a
                                            href="https://github.com/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] flex items-center justify-center text-[#8B5CF6] dark:text-[#A78BFA] hover:scale-110 transition-all duration-300">
                                            <svg className="w-5 h-5 text-[#8B5CF6] dark:text-[#A78BFA]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 
    0-.285-.01-1.04-.016-2.045-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.082-.729.082-.729 
    1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.107-.775.418-1.305.762-1.605-2.665-.303-5.466-1.334-5.466-5.931 
    0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 
    1.02.005 2.047.138 3.006.404 2.289-1.553 3.295-1.23 3.295-1.23.654 1.653.243 2.874.12 3.176.77.84 1.235 1.91 
    1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 
    0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                            </svg>

                                        </a>
                                        <a
                                            href="mailto:berakunal11@gmail.com"
                                            className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#10B981] dark:hover:border-[#34D399] flex items-center justify-center text-[#10B981] dark:text-[#34D399] hover:scale-110 transition-all duration-300">
                                            <svg className="w-5 h-5 text-[#10B981] dark:text-[#34D399]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-2/5 h-full grid place-items-center">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 dark:from-[#60A5FA]/10 dark:to-[#A78BFA]/10 sm:p-10">
                        <ContactForm />
                        <div className="absolute top-8 right-8 w-32 h-32 bg-[#3B82F6]/20 dark:bg-[#60A5FA]/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </section>

            {/* <section className="w-full h-full hidden sm:flex gap-6 p-6">
                <div className="w-3/5 h-full">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] py-10 px-5 shadow-lg">
                        <div className="w-full h-full px-5 overflow-auto flex flex-col justify-center gap-8">

                            <div className="flex flex-col gap-4">
                                <h1 className="text-[56px] leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                    Let’s Build Something Great Together 🚀
                                </h1>
                                <h2 className="text-[28px] leading-[1.3] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                    I’m open to frontend & full stack roles, collaborations, and creative ideas.
                                </h2>
                                <p className="text-[20px] leading-[1.6] font-medium text-[#475569] dark:text-[#CBD5E1] max-w-[90%]">
                                    Whether you’re hiring, collaborating, or just saying hi — feel free to reach out.
                                    I’m currently available for opportunities where I can help build seamless,
                                    high-performance digital experiences.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-2">
                                <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 flex flex-col gap-1">
                                    <span className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">Email</span>
                                    <a href="mailto:berakunal11@gmail.com" className="text-[#0F172A] dark:text-[#F8FAFC] text-[18px] font-semibold hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors">
                                        berakunal11@gmail.com
                                    </a>
                                </div>
                                <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 flex flex-col gap-1">
                                    <span className="text-[#64748B] dark:text-[#94A3B8] text-sm font-medium">Phone</span>
                                    <a href="tel:+919172860229" className="text-[#0F172A] dark:text-[#F8FAFC] text-[18px] font-semibold hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors">
                                        +91 91728 60229
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-5 mt-4">
                                <a href="https://www.linkedin.com/in/kunal-bera-01b10b240" target="_blank" className="text-[#3B82F6] dark:text-[#60A5FA] text-3xl hover:scale-110 transition-transform">
                                    <i className="ri-linkedin-box-fill"></i>
                                </a>
                                <a href="https://github.com/" target="_blank" className="text-[#8B5CF6] dark:text-[#A78BFA] text-3xl hover:scale-110 transition-transform">
                                    <i className="ri-github-fill"></i>
                                </a>
                                <a href="mailto:berakunal11@gmail.com" className="text-[#10B981] dark:text-[#34D399] text-3xl hover:scale-110 transition-transform">
                                    <i className="ri-mail-fill"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 h-full grid place-items-center">
                    <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 dark:from-[#60A5FA]/10 dark:to-[#A78BFA]/10 flex items-center justify-center">
                        <form
                            className="w-[80%] bg-white/60 dark:bg-[#1E293B]/60 backdrop-blur-xl border border-[#E2E8F0]/60 dark:border-[#334155] rounded-2xl p-8 shadow-xl flex flex-col gap-6"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <h3 className="text-[32px] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                                Send Me a Message
                            </h3>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#334155]/50 text-[#0F172A] dark:text-[#F8FAFC] focus:ring-2 focus:ring-[#3B82F6] outline-none transition-all"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#334155]/50 text-[#0F172A] dark:text-[#F8FAFC] focus:ring-2 focus:ring-[#3B82F6] outline-none transition-all"
                                required
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={4}
                                className="p-3 rounded-lg bg-[#F1F5F9] dark:bg-[#334155]/50 text-[#0F172A] dark:text-[#F8FAFC] focus:ring-2 focus:ring-[#8B5CF6] outline-none transition-all resize-none"
                                required
                            ></textarea>

                            <button
                                type="submit"
                                className="py-3 rounded-lg bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA] text-white font-semibold hover:opacity-90 transition-opacity"
                            >
                                Send Message
                            </button>

                            <p className="text-sm text-[#64748B] dark:text-[#94A3B8] text-center mt-2">
                                Or email me directly at{" "}
                                <a href="mailto:berakunal11@gmail.com" className="text-[#3B82F6] dark:text-[#60A5FA] hover:underline">
                                    berakunal11@gmail.com
                                </a>
                            </p>
                        </form>
                        <div className="absolute top-8 right-8 w-32 h-32 bg-[#3B82F6]/20 dark:bg-[#60A5FA]/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </section>


            <section className="w-full h-full flex gap-6 p-6">
                <div className="w-3/4 h-full overflow-auto">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-10 shadow-lg flex flex-col justify-between">

                        <div className="flex flex-col gap-6">
                            <h1 className="text-[56px] leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                Let's Build Something Great Together 🚀
                            </h1>

                            <h2 className="text-[34px] leading-[1.3] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                I'm open to frontend & full stack roles, collaborations, and creative ideas.
                            </h2>

                            <p className="text-[20px] leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                Whether you're hiring, collaborating, or just saying hi — feel free to reach out.
                                I'm currently available for opportunities where I can help build seamless,
                                high-performance digital experiences.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#3B82F6] dark:hover:border-[#60A5FA] transition-colors duration-300 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#3B82F6] dark:text-[#60A5FA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-[#64748B] dark:text-[#94A3B8] text-[13px] font-medium">Email</span>
                                    </div>
                                    <a
                                        href="mailto:berakunal11@gmail.com"
                                        className="text-[#0F172A] dark:text-[#F8FAFC] text-[16px] font-semibold hover:text-[#3B82F6] dark:hover:text-[#60A5FA] transition-colors break-all">
                                        berakunal11@gmail.com
                                    </a>
                                </div>

                                <div className="p-4 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] transition-colors duration-300 flex flex-col gap-2">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#8B5CF6] dark:text-[#A78BFA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <span className="text-[#64748B] dark:text-[#94A3B8] text-[13px] font-medium">Phone</span>
                                    </div>
                                    <a
                                        href="tel:+919172860229"
                                        className="text-[#0F172A] dark:text-[#F8FAFC] text-[16px] font-semibold hover:text-[#8B5CF6] dark:hover:text-[#A78BFA] transition-colors">
                                        +91 91728 60229
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-[15px] font-medium text-[#64748B] dark:text-[#94A3B8]">Connect with me:</span>
                                <div className="flex gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/kunal-bera-01b10b240"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#3B82F6] dark:hover:border-[#60A5FA] flex items-center justify-center text-[#3B82F6] dark:text-[#60A5FA] hover:scale-110 transition-all duration-300">
                                        <i className="ri-linkedin-box-fill text-xl"></i>
                                    </a>
                                    <a
                                        href="https://github.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#8B5CF6] dark:hover:border-[#A78BFA] flex items-center justify-center text-[#8B5CF6] dark:text-[#A78BFA] hover:scale-110 transition-all duration-300">
                                        <i className="ri-github-fill text-xl"></i>
                                    </a>
                                    <a
                                        href="mailto:berakunal11@gmail.com"
                                        className="w-11 h-11 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent hover:border-[#10B981] dark:hover:border-[#34D399] flex items-center justify-center text-[#10B981] dark:text-[#34D399] hover:scale-110 transition-all duration-300">
                                        <i className="ri-mail-fill text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-2/5 h-full">
                    <div className="relative w-full h-full rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 dark:from-[#60A5FA]/10 dark:to-[#A78BFA]/10 border border-[#E2E8F0]/50 dark:border-[#334155]/50 flex items-center justify-center p-8">
                        <form
                            className="w-full bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] rounded-3xl p-8 shadow-lg flex flex-col gap-5"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <div className="flex flex-col gap-2 mb-2">
                                <h3 className="text-[32px] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                    Send Me a Message
                                </h3>
                                <p className="text-[15px] text-[#64748B] dark:text-[#94A3B8]">
                                    I'll get back to you as soon as possible!
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[15px] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[15px] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] dark:focus:ring-[#60A5FA] focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                    Your Message
                                </label>
                                <textarea
                                    placeholder="Tell me about your project or idea..."
                                    rows={5}
                                    className="p-3.5 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/50 border border-[#E2E8F0] dark:border-[#334155] text-[15px] text-[#0F172A] dark:text-[#F8FAFC] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] dark:focus:ring-[#A78BFA] focus:border-transparent transition-all resize-none"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="group mt-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#2563EB] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white text-[15px] font-semibold shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#1E293B]">
                                <span className="flex items-center justify-center gap-2">
                                    Send Message
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </button>
                        </form>

                        <div className="absolute top-8 right-8 w-32 h-32 bg-[#3B82F6]/20 dark:bg-[#60A5FA]/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </section> */}
        </>
    )
}


{/* <section className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-10 shadow-lg flex flex-col justify-between gap-6"></section> */ }