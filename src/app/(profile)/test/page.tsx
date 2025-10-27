export default function TestProjectsPage() {
    const projects = [
        {
            title: "AI Document Intelligence Platform",
            company: "Anzen Technologies",
            duration: "2025",
            description: "Smart PDF viewer with AI-powered contextual search, keyword highlighting, and coordinate extraction for enhanced document navigation.",
            tech: ["Next.js", "Firebase", "MongoDB", "AI/ML"],
            impact: ["45% navigation efficiency", "40% accuracy improvement"],
            category: "AI/ML"
        },
        {
            title: "AI Tender Analysis Chatbot",
            company: "Lauren Information Technologies",
            duration: "2024-2025",
            description: "Intelligent chatbot interface for automated tender document analysis, reducing manual review time significantly.",
            tech: ["React", "Next.js", "AI Integration"],
            impact: ["50% reduced manual effort", "Real-time analysis"],
            category: "AI/ML"
        },
        {
            title: "Real-Time Log Dashboard",
            company: "Lauren Information Technologies",
            duration: "2024",
            description: "WebSocket-powered live monitoring dashboard for system logs with filtering, search, and alert capabilities.",
            tech: ["React", "WebSocket", "Tailwind CSS"],
            impact: ["40% operational visibility", "Real-time monitoring"],
            category: "Real-Time"
        },
        {
            title: "TATA LCBG Management System",
            company: "Technokart Consultancy",
            duration: "2022-2023",
            description: "Complete system revamp with performance optimization, modern UI, and enhanced user workflows.",
            tech: ["Angular", "Node.js", "Bootstrap"],
            impact: ["90% faster load times", "25% engagement boost"],
            category: "Enterprise"
        },
        {
            title: "AI Coaching Platform",
            company: "Technokart Consultancy",
            duration: "2023",
            description: "Real-time AI-driven coaching tools using TensorFlow for live performance feedback and skill assessment.",
            tech: ["Angular", "TensorFlow.js", "WebRTC"],
            impact: ["Live feedback", "AI-powered insights"],
            category: "AI/ML"
        }
    ];

    return (
        <section className="w-full h-full overflow-y-auto flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
            <div className="w-full sm:max-w-5xl sm:mx-auto">
                <div className="w-full text-center flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-[1.625rem] leading-[1.2] sm:text-[56px] sm:leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Featured Projects&nbsp;
                        <span className="inline-block animate-rocket-launch origin-[70%_70%]">🚀</span>
                    </h1>
                    <p className="text-[0.75rem] leading-[1.5] sm:text-[20px] sm:leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                        A showcase of production-grade applications — from AI-powered platforms to real-time dashboards, each built to solve real problems with measurable impact.
                    </p>
                </div>
            </div>

            <div className="w-full sm:max-w-5xl sm:mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="w-full flex flex-col gap-4 rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-6 sm:p-8 shadow-lg hover:shadow-[0_20px_60px_rgba(96,165,250,0.3)] dark:hover:shadow-[0_20px_60px_rgba(96,165,250,0.2)] transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <h2 className="text-[1.125rem] sm:text-[1.5rem] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                                {project.title}
                            </h2>
                            <span className="flex-shrink-0 px-3 py-1 text-[0.75rem] font-medium rounded-full bg-[#60A5FA]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA] border border-[#60A5FA]/30">
                                {project.category}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="text-[0.875rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                {project.company}
                            </p>
                            <p className="text-[0.75rem] text-[#64748B] dark:text-[#94A3B8]">
                                {project.duration}
                            </p>
                        </div>

                        <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.6] text-[#475569] dark:text-[#94A3B8]">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-3 py-1.5 text-[0.75rem] font-medium rounded-full bg-[#F1F5F9] dark:bg-[#334155]/60 text-[#475569] dark:text-[#CBD5E1] border border-[#E2E8F0] dark:border-[#334155]"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.impact.map((item, impactIndex) => (
                                <span
                                    key={impactIndex}
                                    className="flex items-center gap-1.5 text-[0.75rem] font-medium text-[#10B981] dark:text-[#34D399]"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] dark:bg-[#34D399]"></span>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full sm:max-w-5xl sm:mx-auto text-center">
                <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] italic">
                    &quot;Each project represents a commitment to quality, performance, and user-centric design.&quot;
                </p>
            </div>
        </section>
    );
}
