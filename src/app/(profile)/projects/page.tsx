export const metadata = {
    title: "Projects | Kunal Bera",
    description: "Discover my hands-on technical projects — blending frontend engineering, backend logic, and AI automation for real-world results.",
};


export default function ProjectsPage() {

    const projects = [
        // === 1. ANZEN (Detailed) ===
        {
            company: "Anzen Technologies Pvt. Ltd.",
            title: "AI-Powered Career Growth Platform",
            duration: "Jun 2025 – Present",
            location: "Navi Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "react-pdf-viewer", "Python", "PyMuPDF", "MongoDB", "Firebase"],
            type: "detailed",
            link: null,
            preview: null,
            description: `
An AI-driven resume intelligence system that transforms static PDFs into interactive, keyword-highlighted documents — helping recruiters instantly identify context behind extracted attributes.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Developed an interactive PDF viewer with sentence-level highlighting using react-pdf-viewer. Integrated jump-to-highlight navigation for seamless content inspection.",
                    collaboration: "Worked alongside one frontend engineer and backend developers to define the coordinate payload contract and optimize event sync between resume and keyword panels."
                },
                {
                    area: "🧠 Backend / Pipeline",
                    what: "Engineered a Python-based coordinate extraction system (PyMuPDF + substring matching) that mapped AI-extracted phrases to precise PDF coordinates stored in MongoDB.",
                    challenge: "Handled complex multi-line text and character-level variations to compute accurate bounding boxes across resumes."
                }
            ],
            impact: "Achieved ~95% mapping precision across 50+ resumes, improving resume review efficiency by 45%.",
            learning: "Bridging ML output and frontend presentation demands reproducible data mapping — not just smart models but reliable logic."
        },

        // === 2. LAUREN - Maskify.ai (Detailed) ===
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "Maskify.ai – Document Masking Platform",
            duration: "Aug 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "Fabric.js", "AWS S3", "PaddleOCR", "OpenCV", "PyTesseract", "Python"],
            type: "detailed",
            link: "https://laurengroup.ai/solutions/ybkxomzoe5269kc7n7rcti4o",
            preview: "/images/maskify-ui.png",
            description: `
A SaaS platform for detecting and redacting Aadhaar details in document images. Combines AI-powered OCR masking with a Maker–Checker verification workflow.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Built a full role-based interface (Admin, Maker, Checker) and a custom Fabric.js masking canvas supporting free-rotation, resizing, and precision placement. Integrated AWS S3 for document flows."
                },
                {
                    area: "🧠 Backend / Pipeline (developed during free cycles)",
                    what: "Prototyped a robust auto-masking engine using PaddleOCR, PyTesseract, and OpenCV for documents under varied lighting or rotation. The system was later adopted in production.",
                    challenge: "Overcame OCR inconsistencies from low-light and skewed documents via adaptive preprocessing (deskew + contrast correction)."
                }
            ],
            impact: "Reduced manual masking time by 60%, increased auto-detection reliability by 30%, and boosted overall verification throughput by ~45%.",
            collaboration: "Partnered with UI/UX and backend teams to align masking logic, compliance flow, and review UX.",
            learning: "Designing ‘human-in-the-loop’ systems improves AI reliability and builds user confidence in automation."
        },

        // === 3. LAUREN - GeM Bid Assistant Chatbot (Detailed) ===
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "GeM Bid Assistant Chatbot",
            duration: "Feb 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "Context API"],
            type: "detailed",
            description: `
An AI assistant for sales teams to query government tender PDFs and get instant contextual answers — eliminating manual document scanning.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Designed an intuitive chat interface with contextual filters mirroring GeM portal structure. Used Context API for state caching to reduce redundant API calls and enable fast tab switching."
                }
            ],
            impact: "Reduced tender analysis effort by ~30%, enabling faster response to bid opportunities.",
            collaboration: "Worked with backend AI engineers to define chunking strategies for long PDFs and improve model retrieval accuracy.",
            learning: "Conversational UX isn’t about visuals — it’s about removing friction between queries and insights."
        },

        // === 4. LAUREN - SpeechSync (Compact) ===
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "SpeechSync – Audio Transcription POC",
            duration: "Jan 2024 – Feb 2024",
            location: "Mumbai",
            stack: ["React", "Tailwind CSS", "TypeScript", "Vite"],
            type: "compact",
            description: `
Lightweight POC converting uploaded audio into structured text. Focused on clean upload states, progress feedback, and readable transcript rendering.
    `,
            impact: "Cut prototype validation time by ~25% and improved clarity for demo evaluations.",
            learning: "Simple feedback loops and progress cues are essential in asynchronous UI workflows."
        },

        // === 5. LAUREN - Finalyze.ai (Compact) ===
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "Finalyze.ai – Cloud Cost Management",
            duration: "Nov 2024 – Jan 2025",
            location: "Mumbai",
            stack: ["React", "Tailwind CSS", "TypeScript", "Redux"],
            type: "compact",
            link: "https://laurengroup.ai/solutions/c5csp3fg3taw13w31alxp14d",
            description: `
Maintenance and feature alignment project during backend migration from Django to Spring Boot — focused on ensuring UI–API consistency and stable Redux data flow.
    `,
            impact: "Improved API sync reliability and reduced perceived latency by ~30%.",
            learning: "Strong state management prevents regressions during backend transitions."
        },

        // === 6. TKCS - LCBG Tech (Detailed) ===
        {
            company: "Technokart Consultancy Services LLP",
            title: "LCBG Tech – LC/BG Management Platform",
            duration: "Oct 2022 – Aug 2023",
            location: "Mumbai",
            stack: ["Angular", "PrimeNG", "Bootstrap", "Node.js", "PDFMake"],
            type: "detailed",
            description: `
An enterprise-grade platform managing Letters of Credit and Bank Guarantees — optimizing document processing, interest calculations, and reporting performance.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Revamped the UI/UX for LC and BG workflows, added precision interest calculators, and built client-ready PDF generation via PDFMake."
                },
                {
                    area: "🧠 Backend (Performance RCA)",
                    what: "Performed deep trace analysis to find a bottleneck in the authorization flow returning unnecessary payloads. Refactored API validation logic and data contracts for minimal overhead.",
                    challenge: "Diagnosing cascading latency across modules demanded aligning front-end behavior with backend validation layers."
                }
            ],
            impact: "Cut page load times from ~120s to under 10s (~90% faster) and improved user satisfaction dramatically.",
            learning: "Performance optimization starts with collaboration — not code — aligning API design with actual user flow."
        },

        // === 7. TKCS - Trainer.AI (Detailed) ===
        {
            company: "Technokart Consultancy Services LLP",
            title: "Trainer.AI – Live Proctoring & Assessment Platform",
            duration: "Oct 2023 – Dec 2023",
            location: "Mumbai",
            stack: ["Angular", "TensorFlow.js", "Bootstrap", "SCSS", "WebRTC"],
            type: "detailed",
            link: "https://netspractice.ai/",
            preview: "/images/trainerai-feature.png",
            description: `
A live training & proctoring solution for real-time video/audio analysis, featuring AI-based face detection, live monitoring, and time-based assessments.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Built the live video capture module with TensorFlow.js face detection. Designed UI warnings for off-frame or multi-face detection and integrated a timed MCQ system."
                },
                {
                    area: "🤝 Collaboration",
                    what: "Partnered with UI/UX and AI engineers to fine-tune detection thresholds and deliver consistent real-time alerts."
                }
            ],
            impact: "Enhanced test reliability and participant compliance; featured visuals integrated into public Netspractice marketing pages.",
            learning: "Balancing accuracy with user comfort is key — calm visual feedback reduces test anxiety and improves trust."
        },

        // === 8. TKCS - CommSense.AI (Compact) ===
        {
            company: "Technokart Consultancy Services LLP",
            title: "Netspractice (ICICI Bank) – Communication Training Platform",
            duration: "Jun 2023 – Aug 2023",
            location: "Mumbai",
            stack: ["Angular", "D3.js", "Bootstrap", "SCSS"],
            type: "compact",
            description: `
Revamped training dashboards with D3.js visualizations for real-time speech and expression analytics, improving trainee feedback clarity.
    `,
            impact: "Increased engagement and comprehension by ~35%, helping users visualize skill progress more intuitively.",
            learning: "Data visualization transforms abstract analytics into actionable growth signals."
        },

        // === 9. TKCS - HDFC LIFE (Compact) ===
        {
            company: "Technokart Consultancy Services LLP",
            title: "HDFC LIFE – AI Chatbot POC",
            duration: "Jan 2023 – Mar 2023",
            location: "Mumbai",
            stack: ["Angular", "Bootstrap", "Node.js"],
            type: "compact",
            description: `
Admin-configurable chatbot system for dataset uploads and retraining workflows. Built a modular, clean chat interface for rapid experimentation.
    `,
            impact: "Enabled internal retraining demos with reusable UI components.",
            learning: "Fast prototyping clarifies scope before scaling — early UX saves rework."
        },

        // === 10. TKCS - Gainn Fintech (Detailed) ===
        {
            company: "Technokart Consultancy Services LLP",
            title: "Gainn Fintech – Digital Onboarding Platform",
            duration: "Mar 2023 – Jun 2023",
            location: "Mumbai",
            stack: ["Angular", "Typescript", "Scss", "Bootstrap", "PDFMake", "NSDL eSign"],
            type: "detailed",
            description: `
End-to-end onboarding system for multiple entity types with dynamic validation, document generation, and secure e-sign integrations.
    `,
            contributions: [
                {
                    area: "💻 Frontend",
                    what: "Developed multi-step form flows with validation and PDF review preview before signing using PDFMake."
                },
                {
                    area: "🤝 Integration & Troubleshooting",
                    what: "Integrated NSDL eSign and debugged BE handshake issues during sandbox testing to stabilize production flows."
                }
            ],
            impact: "Reduced onboarding time by ~40% and improved client data consistency across entity types.",
            learning: "Structured documentation accelerates handovers and future maintenance."
        }
    ];

    const totalProjects = projects.length - 1;

    return (
        <>
            <section className="w-full h-full overflow-y-auto flex flex-col gap-4 sm:gap-6 p-6 sm:p-6">
                <div className="w-full sm:max-w-5xl sm:mx-auto">
                    <div className="w-full text-center flex flex-col gap-4 sm:gap-6">
                        <h1 className="text-[1.625rem] leading-[1.2] sm:text-[56px] sm:leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                            Crafting Solutions That Scale & Deliver Impact&nbsp;
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
                            A collection of projects and proof-of-concepts I&apos;ve developed — combining intuitive UI, robust logic, and measurable impact across AI, SaaS, and enterprise platforms.
                        </p>
                    </div>
                </div>

                {/* Projects */}
                <div className="w-full sm:max-w-5xl sm:mx-auto flex flex-col gap-4 sm:gap-6">
                    {projects.map((project, index) => (
                        <div key={index} className="w-full flex">
                            <div className="w-[100px] h-auto relative hidden sm:flex flex-col items-center">
                                <div className="w-6 h-6 absolute z-10 top-[100px] rounded-full grid place-items-center bg-[#F1F5F9] dark:bg-[#334155]/40 border border-transparent shadow-lg">
                                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] dark:bg-[#60A5FA]"></div>
                                </div>
                                {(index < totalProjects) && <div className="absolute w-1 h-[calc(100%+1.5rem)] top-[112px] bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]"></div>}
                            </div>
                            <div className="w-full sm:w-[calc(100%-100px)] h-full flex flex-col gap-4 rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] sm:p-10 p-6 shadow-lg hover:shadow-[0_20px_60px_rgba(96,165,250,0.3)] dark:hover:shadow-[0_20px_60px_rgba(96,165,250,0.2)] transition-all duration-300 hover:scale-[1.02]">
                                <div>
                                    <h2 className="text-[1.5rem] sm:text-[2.125rem] leading-[1.2] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                        {project.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                        <h3 className="text-[1.125rem] sm:text-[1.25rem] font-semibold text-[#0F172A] dark:text-[#F8FAFC]">
                                            {project.company}
                                        </h3>
                                        <span className="hidden sm:block text-[#94A3B8]">•</span>
                                        <p className="text-[0.875rem] sm:text-[1rem] text-[#64748B] dark:text-[#94A3B8]">
                                            {project.duration} | {project.location}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[0.875rem] sm:text-[1rem] leading-[1.6] text-[#475569] dark:text-[#94A3B8]">
                                    {project?.description?.trim()}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.stack?.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-4 py-2 text-[0.875rem] font-medium rounded-full backdrop-blur-sm bg-[#60A5FA]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA] border border-[#60A5FA]/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {project.contributions && project.contributions.length > 0 && (
                                    <div className="flex flex-col gap-3">
                                        {project.contributions.map((contrib, contribIndex) => (
                                            <div key={contribIndex} className="flex flex-col gap-2">
                                                <h4 className="text-[0.875rem] font-bold text-[#3B82F6] dark:text-[#60A5FA]">
                                                    {contrib.area}
                                                </h4>
                                                <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.7] text-[#475569] dark:text-[#94A3B8]">
                                                    {contrib.what}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex flex-col gap-2 pt-2 border-t border-[#E2E8F0] dark:border-[#334155]">
                                    {project.impact && (
                                        <div className="flex gap-2 items-start">
                                            <span className="text-[1rem]">📈</span>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[0.875rem] font-bold text-[#10B981] dark:text-[#34D399]">Impact</h4>
                                                <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.6] text-[#10B981] dark:text-[#34D399]">
                                                    {project.impact}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.collaboration && (
                                        <div className="flex gap-2 items-start">
                                            <span className="text-[1rem]">🤝</span>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[0.875rem] font-bold text-[#0F172A] dark:text-[#F8FAFC]">Collaboration</h4>
                                                <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.6] text-[#475569] dark:text-[#94A3B8]">
                                                    {project.collaboration}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {project.learning && (
                                        <div className="flex gap-2 items-start">
                                            <span className="text-[1rem]">💡</span>
                                            <div className="flex flex-col gap-1">
                                                <h4 className="text-[0.875rem] font-bold text-[#8B5CF6] dark:text-[#A78BFA]">Learning</h4>
                                                <p className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.6] italic text-[#475569] dark:text-[#94A3B8]">
                                                    {project.learning}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full sm:max-w-5xl sm:mx-auto text-center">
                    <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] italic">
                        &quot;From concept to code — I help turn ideas into fast, scalable, and beautiful web products.&quot;
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
