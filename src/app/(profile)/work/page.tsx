'use client';
export default function WorkPage() {
    const experiences = [
        {
            company: "Anzen Technologies Pvt. Ltd.",
            role: "Frontend Developer",
            duration: "Jun 2025 – Present",
            location: "Navi Mumbai",
            stack: ["Next.js", "Firebase", "MongoDB", "Tailwind CSS"],
            projects: "🧩 1 Project",
            highlights: [
                "Developing an AI-powered document intelligence platform, boosting navigation efficiency by 45%.",
                "Designed and implemented a smart PDF viewer with contextual search and keyword highlighting.",
                "Collaborated on coordinate extraction logic to enhance data mapping accuracy by 40%."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            role: "Frontend Developer",
            duration: "Aug 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["React", "Next.js", "WebSocket", "Tailwind CSS"],
            projects: "🧩 2 Projects + 2 POCs Delivered",
            highlights: [
                "Led development of enterprise-grade web apps, improving delivery speed by 30%.",
                "Developed an AI chatbot interface for tender analysis, reducing manual effort by 50%.",
                "Built real-time log dashboards using WebSocket, increasing operational visibility by 40%."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            role: "Associate Full Stack Developer",
            duration: "Oct 2022 – Dec 2023",
            location: "Mumbai",
            stack: ["Angular", "Node.js", "TensorFlow", "Bootstrap"],
            projects: "🧩 4 Projects Delivered + 1 POCs Delivered",
            highlights: [
                "Revamped the TATA LCBG management system, cutting load times by 90%.",
                "Built real-time AI-driven coaching tools with TensorFlow for live performance feedback.",
                "Enhanced platform engagement by 25% through modern UI improvements and interactivity."
            ]
        }
    ];

    const totalExperiences = experiences.length - 1;

    return (
        <>
            <section className="w-full h-full overflow-y-auto flex flex-col gap-4 sm:gap-6 p-6 sm:p-6">
                <div className="w-full sm:max-w-5xl sm:mx-auto">
                    <div className="w-full text-center flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[1.625rem] leading-[1.2] sm:text-[56px] sm:leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                            Building Scalable, Impactful Web Experiences&nbsp;
                            <span className="inline-flex items-center ml-2 relative">
                                <span className="relative animate-cloud-float origin-[70%_70%]">
                                    ☁️
                                    <span className="absolute top-[2px] right-[8px] text-[0.4em] animate-cloud-sparkle" style={{ animationDelay: '0s' }}>✨</span>
                                    <span className="absolute top-[8px] left-[4px] text-[0.35em] animate-cloud-sparkle" style={{ animationDelay: '1s' }}>✨</span>
                                    <span className="absolute bottom-[4px] right-[4px] text-[0.3em] animate-cloud-sparkle" style={{ animationDelay: '1.5s' }}>⭐</span>
                                </span>
                                <span className="absolute top-[-4px] left-[14px] sm:top-[-6px] sm:left-[18px] animate-lightning-strike origin-[70%_70%] drop-shadow-lg">
                                    ⚡
                                </span>
                            </span>
                        </h1>
                        <p className="text-[0.75rem] leading-[1.5] sm:text-[20px] sm:leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                            Over the past 2+ years, I&apos;ve contributed to 7+ production-grade platforms and multiple POCs —
                            developing AI-driven, scalable interfaces that elevate performance, reliability, and user experience across modern web ecosystems.
                        </p>
                    </div>
                </div>

                <div className="w-full sm:max-w-5xl sm:mx-auto flex flex-col gap-4 sm:gap-6">
                    {experiences.map((experience, index) => (
                        <div key={index} className="w-full flex">
                            <div className="w-[100px] h-auto relative hidden sm:flex flex-col items-center">
                                <div className="w-6 h-6 absolute z-10 top-[20%] rounded-full grid place-items-center bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent shadow-lg">
                                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] dark:bg-[#60A5FA]"></div>
                                </div>
                                {(index < totalExperiences) && <div className="absolute w-1 h-[calc(100%+1.5rem)] top-[calc(20%+12px)] bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]"></div>}
                            </div>
                            <div className="w-full sm:w-[calc(100%-100px)] h-full flex flex-col gap-4 rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] sm:p-10 p-6 shadow-lg hover:shadow-[0_20px_60px_rgba(96,165,250,0.3)] dark:hover:shadow-[0_20px_60px_rgba(96,165,250,0.2)] transition-all duration-300 hover:scale-[1.02]">
                                <div className="">
                                    <h2 className="text-[1.5rem] sm:text-[2.125rem] leading-[1.2] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                        {experience.company}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <h3 className="text-[1.125rem] sm:text-[1.25rem] font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {experience.role}
                                        </h3>
                                        <span className="hidden sm:block text-[#94A3B8]">•</span>
                                        <p className="text-[0.875rem] sm:text-[1rem] text-[#64748B] dark:text-[#94A3B8]">
                                            {experience.duration} | {experience.location}
                                        </p>
                                    </div>
                                </div>

                                <div className="w-fit min-w-2/5 px-4 py-2 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/60 border border-[#E2E8F0] dark:border-[#334155]">
                                    <p className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                        {experience.projects}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {experience.stack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-2 text-[0.875rem] font-medium rounded-full backdrop-blur-sm bg-[#60A5FA]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA] border border-[#60A5FA]/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <ul className="flex flex-col gap-2 list-none">
                                    {experience.highlights.map((highlight, highlightIndex) => (
                                        <li key={highlightIndex} className="flex gap-3 items-start">
                                            <span className="flex-shrink-0 mt-2.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]"></span>
                                            <span className="text-[0.9375rem] sm:text-[1rem] leading-[1.7] text-[#475569] dark:text-[#94A3B8]">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full sm:max-w-5xl sm:mx-auto text-center">
                    <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] italic">
                        &quot;Every project I&apos;ve worked on has reinforced one goal — to make web experiences faster, smarter, and more human.&quot;
                    </p>
                </div>

                <div className="fixed inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A78BFA]/20 rounded-full blur-3xl animate-bounce"></div>
                </div>
            </section>
        </>
    )
}
