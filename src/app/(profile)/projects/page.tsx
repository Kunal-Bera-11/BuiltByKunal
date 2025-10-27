'use client';

export default function ProjectsPage() {
    const projects = [
        {
            company: "Anzen Technologies Pvt. Ltd.",
            title: "AI-Powered Career Growth Platform",
            duration: "Jun 2025 – Present",
            location: "Navi Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "Python", "Firebase", "MongoDB"],
            summary: "An AI-assisted platform for intelligent resume parsing and keyword mapping — built to help recruiters instantly identify key skills and insights from candidate profiles.",
            highlights: [
                "🎨 **Frontend Impact:** Designed an interactive PDF intelligence viewer using `react-pdf-viewer`, enabling real-time sentence highlighting when hovering over AI-detected keywords. Built context-aware navigation and coordinate-based sentence tracking for seamless UX across all devices.",
                "🧠 **Backend Contribution:** Engineered a PyMuPDF-based coordinate extraction pipeline to accurately map sentences across multi-line resumes. Stored and synced highlights via MongoDB, achieving over **95% accuracy across 50+ resume samples**.",
                "🚀 **Result:** Delivered a 45% boost in document navigation speed and significantly enhanced AI-UX consistency for recruiters and analysts."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "Maskify.ai – Document Masking Platform",
            duration: "Aug 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "AWS S3", "Fabric.js", "Python"],
            summary: "A SaaS-based document privacy solution that detects and masks Aadhaar numbers in scanned documents using AI + human validation.",
            highlights: [
                "🧩 **System Design:** Developed complete role-based workflows for Admin, Maker, and Checker modules, ensuring smooth document handoff and approval cycles.",
                "🎨 **Frontend Engineering:** Created a custom masking canvas using `Fabric.js`, supporting free-angle and shape-adjustable bounding boxes synced with AWS S3 image storage.",
                "⚙️ **AI Integration:** Built a prototype pipeline using PaddleOCR and OpenCV for automatic Aadhaar detection, adaptable to varied orientations and lighting conditions.",
                "📊 **Result:** Reduced manual workload by **60%**, shortened review cycles by **45%**, and improved overall masking precision by **30%**."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "GeM Bid Assistant Chatbot",
            duration: "Mar 2024 – Jun 2025",
            location: "Mumbai",
            stack: ["Next.js", "Tailwind CSS", "TypeScript", "Context API"],
            summary: "An AI-powered chatbot that summarizes and answers queries from government tender PDFs, helping sales teams focus on strategy instead of manual data digging.",
            highlights: [
                "💬 **User Experience:** Designed a clean, conversational interface that enables instant interaction with document-trained AI models.",
                "🧭 **Efficiency Features:** Added intelligent filtering, category-based tagging, and cached states using Context API for fast tab switching.",
                "📈 **Impact:** Reduced tender analysis time by **30%** and improved decision accuracy across multiple business teams."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "SpeechSync – Audio Transcription POC",
            duration: "Jan 2024 – Mar 2024",
            location: "Mumbai",
            stack: ["React.js", "Tailwind CSS", "TypeScript", "Vite"],
            summary: "A minimal POC app to convert uploaded audio files into formatted text using AI-driven speech recognition APIs.",
            highlights: [
                "🎧 **Interface Design:** Built an elegant upload-and-transcribe flow with progress indicators and formatted transcript rendering.",
                "⚙️ **Integration:** Connected transcription APIs and created dynamic layouts to support multiple text export styles.",
                "📄 **Outcome:** Delivered a fast, stable prototype improving demo turnaround by **25%** and easing validation workflows."
            ]
        },
        {
            company: "Lauren Information Technologies Pvt. Ltd.",
            title: "Finalyze.ai – Cloud Cost Management Platform",
            duration: "Oct 2023 – Jan 2024",
            location: "Mumbai",
            stack: ["React.js", "Tailwind CSS", "TypeScript", "Redux", "Spring Boot"],
            summary: "An existing SaaS tool to track and optimize AWS infrastructure costs — revamped during backend migration from Django REST to Java Spring Boot.",
            highlights: [
                "🔁 **Migration & Integration:** Rewired all API layers and Redux stores to align with new backend schema, ensuring zero data conflicts.",
                "🎨 **UI Enhancements:** Modernized legacy views with reusable components and gradient-themed dashboards for better readability.",
                "📊 **Result:** Delivered a smooth migration with **30% faster API responses** and improved maintainability for future builds."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            title: "FinanceFlow – LC/BG Management Platform",
            duration: "Oct 2022 – Dec 2023",
            location: "Mumbai",
            stack: ["Angular", "Primeng", "Bootstrap", "Node.js", "PDFMake"],
            summary: "An enterprise platform designed to streamline Letters of Credit and Bank Guarantees lifecycle management for large-scale clients.",
            highlights: [
                "⚙️ **Performance Optimization:** Identified a session API overload that slowed page loads to 2 minutes. Refactored architecture to separate validation logic — achieving a **90% reduction in load time**.",
                "📄 **Functional Additions:** Built dynamic PDF generation via PDFMake and automated multi-term interest calculations.",
                "🎨 **UI/UX Revamp:** Delivered modernized interfaces for improved accessibility and consistency across roles."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            title: "CommSense.AI – Communication Training Platform",
            duration: "Aug 2023 – Dec 2023",
            location: "Mumbai",
            stack: ["Angular", "D3.js", "Bootstrap", "SCSS"],
            summary: "An AI-based internal training platform to evaluate employees' communication performance through speech and expression analysis.",
            highlights: [
                "📊 **UI Rebuild:** Created the v2 interface from scratch with a responsive layout supporting multi-role workflows.",
                "📉 **Data Visualization:** Integrated D3.js to build interactive performance charts and feedback graphs.",
                "💡 **Impact:** Enhanced user engagement by **35%** and simplified skill assessment reporting."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            title: "Trainer.AI – Live Proctoring Platform",
            duration: "Mar 2023 – Oct 2023",
            location: "Mumbai",
            stack: ["Angular", "TensorFlow.js", "Bootstrap", "SCSS"],
            summary: "A SaaS-based live proctoring and AI-assisted training system for secure, real-time assessments with facial recognition validation.",
            highlights: [
                "🎥 **Real-Time Tech:** Implemented live video and audio capture with TensorFlow.js-based facial detection and green-zone tracking.",
                "🚨 **Proctoring Intelligence:** Built client-side alerts for off-screen or multi-face detection to maintain assessment integrity.",
                "📈 **Result:** Delivered 100% live monitoring uptime and boosted testing reliability by 50%."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            title: "SmartChat – AI Chatbot POC",
            duration: "Jan 2023 – Mar 2023",
            location: "Mumbai",
            stack: ["Angular", "Bootstrap", "Node.js"],
            summary: "A conversational AI prototype designed to retrain and expand knowledge datasets dynamically.",
            highlights: [
                "💬 **Frontend Build:** Created modular chat and admin UIs with REST API integration for live conversation management.",
                "🧩 **Training Workflow:** Designed dataset upload tools enabling admins to retrain chat logic effortlessly.",
                "🚀 **Outcome:** Successfully delivered an MVP chatbot with retraining flow for internal demonstrations."
            ]
        },
        {
            company: "Technokart Consultancy Services LLP",
            title: "RegiSure – Digital Onboarding Platform",
            duration: "Nov 2022 – May 2023",
            location: "Mumbai",
            stack: ["Angular", "Bootstrap", "Node.js", "PDFMake"],
            summary: "A full-cycle onboarding platform enabling digital registration, validation, and NSDL-based e-signing for multiple client entities.",
            highlights: [
                "🧾 **Workflow Development:** Built multi-step dynamic forms with validation logic and real-time user feedback.",
                "📄 **PDF Automation:** Implemented data-driven PDF generation and digital signing using PDFMake and NSDL APIs.",
                "⚡ **Result:** Streamlined onboarding flow, reducing average registration time by **40%**."
            ]
        }
    ];

    return (
        <section className="w-full h-full overflow-y-auto flex flex-col gap-4 sm:gap-6 p-4 sm:p-6">
            <div className="w-full sm:max-w-5xl sm:mx-auto">
                <div className="w-full text-center flex flex-col gap-4 sm:gap-6">
                    <h1 className="text-[1.625rem] leading-[1.2] sm:text-[56px] sm:leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                        Crafting Solutions That Scale & Deliver Impact&nbsp;
                        <span className="inline-block animate-rocket-launch origin-[70%_70%]">🚀</span>
                    </h1>
                    <p className="text-[0.75rem] leading-[1.5] sm:text-[20px] sm:leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                        A collection of projects and proof-of-concepts I&apos;ve developed — combining intuitive UI, robust logic, and measurable impact across AI, SaaS, and enterprise platforms.
                    </p>
                </div>
            </div>

            <div className="w-full sm:max-w-5xl sm:mx-auto flex flex-col gap-4 sm:gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="w-full flex flex-col gap-4 rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] sm:p-10 p-6 shadow-lg hover:shadow-[0_20px_60px_rgba(96,165,250,0.3)] dark:hover:shadow-[0_20px_60px_rgba(96,165,250,0.2)] transition-all duration-300 hover:scale-[1.01]">
                        <div>
                            <h2 className="text-[1.5rem] sm:text-[2.125rem] leading-[1.2] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                {project.title}
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
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
                            {project.summary}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.stack.map((tech, techIndex) => (
                                <span
                                    key={techIndex}
                                    className="px-4 py-2 text-[0.875rem] font-medium rounded-full backdrop-blur-sm bg-[#60A5FA]/10 dark:bg-[#60A5FA]/20 text-[#3B82F6] dark:text-[#60A5FA] border border-[#60A5FA]/30"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <ul className="flex flex-col gap-3 list-none">
                            {project.highlights.map((highlight, highlightIndex) => {
                                const parts = highlight.split('**');
                                return (
                                    <li key={highlightIndex} className="flex gap-3 items-start">
                                        <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[#60A5FA] to-[#A78BFA]"></span>
                                        <span className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.7] text-[#475569] dark:text-[#94A3B8]">
                                            {parts.map((part, i) => 
                                                i % 2 === 1 ? <strong key={i} className="font-bold text-[#0F172A] dark:text-[#F8FAFC]">{part}</strong> : part
                                            )}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="w-full sm:max-w-5xl sm:mx-auto text-center">
                <p className="text-[1.125rem] sm:text-[1.25rem] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC] italic">
                    &quot;From concept to code — I help turn ideas into fast, scalable, and beautiful web products.&quot;
                </p>
            </div>
        </section>
    );
}
