export default function WorkPage() {
    const experiences = [
        {
            company: "Anzen Technologies Pvt. Ltd.",
            role: "Frontend Developer",
            duration: "Jun 2025 – Present",
            location: "Navi Mumbai",
            stack: ["Next.js", "Firebase", "MongoDB", "Tailwind CSS"],
            projects: "🧩 1 Project + 1 POC Delivered",
            highlights: [
                "Built an AI-powered document intelligence platform improving navigation efficiency by 45%.",
                "Designed a smart PDF viewer with keyword highlighting and contextual search.",
                "Collaborated on coordinate extraction logic improving accuracy by 40%."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            role: "Frontend Developer",
            duration: "Aug 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["React", "Next.js", "WebSocket", "Firebase"],
            projects: "🧩 4 Projects + 2 POCs Delivered",
            highlights: [
                "Led development of enterprise-grade web apps, improving delivery speed by 30%.",
                "Built AI chatbot UI for tender analysis reducing manual effort by 50%.",
                "Created real-time log dashboards using WebSocket for 40% higher efficiency."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            role: "Associate Full Stack Developer",
            duration: "Oct 2022 – Dec 2023",
            location: "Mumbai",
            stack: ["Angular", "Node.js", "TensorFlow.js", "WebRTC"],
            projects: "🧩 5 Projects Delivered",
            highlights: [
                "Revamped TATA LCBG management system, cutting load times by 90%.",
                "Built AI-driven real-time coaching tools with TensorFlow.js for live feedback.",
                "Enhanced engagement by 25% with interactive dashboards and modern UI."
            ]
        }
    ];

    return (
        <div className="w-full h-full overflow-y-auto scrollbar-custom">
            {/* Background decorative elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#60A5FA]/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A78BFA]/20 rounded-full blur-3xl animate-bounce"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto p-6 sm:p-10 space-y-10 sm:space-y-16">
                {/* Header Section */}
                <div className="text-center space-y-6">
                    <h1 className="text-[2.5rem] sm:text-[3.5rem] leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        Professional Experience
                    </h1>
                    <p className="text-[1rem] sm:text-[1.25rem] leading-[1.6] text-[#475569] dark:text-[#94A3B8] max-w-3xl mx-auto">
                        Over the past 2+ years, I&apos;ve contributed to 10+ production-grade platforms and multiple POCs — building AI-driven, scalable web interfaces that improve performance and user experience.
                    </p>
                </div>

                {/* Timeline Section */}
                <div className="relative space-y-8 sm:space-y-12">
                    {/* Timeline line - hidden on mobile, visible on desktop */}
                    <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#60A5FA] to-[#A78BFA]"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className="relative">
                            {/* Timeline dot - hidden on mobile */}
                            <div className="hidden sm:block absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] border-4 border-[#F8FAFC] dark:border-[#1E293B] shadow-lg"></div>

                            {/* Experience Card */}
                            <div className="sm:ml-20 backdrop-blur-xl bg-[#FFFFFF] dark:bg-[#1E293B]/95 border-2 border-[#E2E8F0] dark:border-[#334155] rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-[0_20px_60px_rgba(96,165,250,0.3)] dark:hover:shadow-[0_20px_60px_rgba(96,165,250,0.2)] transition-all duration-300 hover:scale-[1.02] space-y-6">
                                
                                {/* Company & Role */}
                                <div className="space-y-3">
                                    <h2 className="text-[1.5rem] sm:text-[2.125rem] leading-[1.2] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                        {exp.company}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <h3 className="text-[1.125rem] sm:text-[1.25rem] font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {exp.role}
                                        </h3>
                                        <span className="hidden sm:block text-[#94A3B8]">•</span>
                                        <p className="text-[0.875rem] sm:text-[1rem] text-[#64748B] dark:text-[#94A3B8]">
                                            {exp.duration} | {exp.location}
                                        </p>
                                    </div>
                                </div>

                                {/* Projects Count */}
                                <div className="inline-block px-4 py-2 rounded-full bg-[#F1F5F9] dark:bg-[#334155]/60 border border-[#E2E8F0] dark:border-[#334155]">
                                    <p className="text-[0.875rem] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                        {exp.projects}
                                    </p>
                                </div>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.stack.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1.5 text-[0.875rem] font-medium rounded-full backdrop-blur-sm bg-[#60A5FA]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA] border border-[#60A5FA]/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Highlights */}
                                <div className="space-y-3">
                                    {exp.highlights.map((highlight, highlightIndex) => (
                                        <div key={highlightIndex} className="flex gap-3">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]"></span>
                                            <p className="text-[0.9375rem] sm:text-[1rem] leading-[1.7] text-[#475569] dark:text-[#94A3B8]">
                                                {highlight}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div className="text-center py-8">
                    <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] italic">
                        &quot;Every project I&apos;ve worked on has reinforced one goal — to make web experiences faster, smarter, and more human.&quot;
                    </p>
                </div>

                {/* CTA Section */}
                <div className="backdrop-blur-xl bg-[#F1F5F9] dark:bg-[#1E293B]/60 border-2 border-[#E2E8F0] dark:border-[#334155] rounded-3xl p-8 sm:p-10 text-center space-y-6">
                    <h3 className="text-[1.5rem] sm:text-[2rem] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                        Want to see more of my work?
                    </h3>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/documents/Kunal_Bera_Frontend.pdf"
                            target="_blank"
                            className="group px-6 py-3.5 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] dark:from-[#60A5FA] dark:to-[#3B82F6] text-white text-[0.9375rem] font-semibold rounded-full shadow-lg shadow-blue-500/25 dark:shadow-blue-400/20 hover:shadow-xl hover:shadow-blue-500/40 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                📄 View Resume
                            </span>
                        </a>
                        <a
                            href="/contact"
                            className="px-6 py-3.5 backdrop-blur-sm bg-[#FFFFFF] dark:bg-[#1E293B]/60 text-[#0F172A] dark:text-[#F8FAFC] text-[0.9375rem] font-semibold rounded-full border-2 border-[#E2E8F0] dark:border-[#334155] hover:border-[#3B82F6] dark:hover:border-[#60A5FA] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            <span className="flex items-center justify-center gap-2">
                                💬 Let&apos;s Connect
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
