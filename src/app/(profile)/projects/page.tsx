'use client';
import { useState } from 'react';

// Sample work data - Replace with your actual experience
const workExperience = [
  {
    id: 1,
    company: "Tech Solutions Inc.",
    role: "Senior Frontend Developer",
    period: "Jan 2023 - Present",
    location: "Remote",
    logo: "🏢", // Replace with actual logo/image
    description: "Leading the frontend architecture for a real-time collaboration platform serving 100K+ users.",
    achievements: [
      "Reduced page load time by 60% through code splitting and optimization",
      "Built real-time dashboard using Next.js, React Query, and WebSockets",
      "Mentored 3 junior developers and established frontend best practices"
    ],
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "WebSockets"],
    color: "blue" // blue, purple, green
  },
  {
    id: 2,
    company: "Digital Innovators",
    role: "Frontend Developer",
    period: "Jun 2021 - Dec 2022",
    location: "Mumbai, India",
    logo: "💼",
    description: "Developed and maintained multiple client-facing web applications with focus on performance and accessibility.",
    achievements: [
      "Implemented responsive designs achieving 100% mobile compatibility",
      "Integrated RESTful APIs and GraphQL for seamless data fetching",
      "Achieved WCAG AA accessibility standards across all projects"
    ],
    tech: ["React", "Angular", "JavaScript", "SCSS", "Redux"],
    color: "purple"
  },
  {
    id: 3,
    company: "Startup Hub",
    role: "Junior Frontend Developer",
    period: "Jan 2021 - May 2021",
    location: "Hybrid",
    logo: "🚀",
    description: "Started my journey building dynamic user interfaces and learning modern web development practices.",
    achievements: [
      "Built 5+ landing pages with conversion rates above 12%",
      "Collaborated with designers using Figma to implement pixel-perfect UIs",
      "Contributed to component library used across 3 different products"
    ],
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    color: "green"
  }
];

function WorkShowcase() {
  const [selectedWork, setSelectedWork] = useState(workExperience[0]);

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        border: "border-[#3B82F6] dark:border-[#60A5FA]",
        bg: "bg-[#3B82F6]/10 dark:bg-[#60A5FA]/10",
        text: "text-[#3B82F6] dark:text-[#60A5FA]",
        tag: "bg-[#EFF6FF] dark:bg-[#1E3A8A]/20 text-[#3B82F6] dark:text-[#60A5FA]"
      },
      purple: {
        border: "border-[#8B5CF6] dark:border-[#A78BFA]",
        bg: "bg-[#8B5CF6]/10 dark:bg-[#A78BFA]/10",
        text: "text-[#8B5CF6] dark:text-[#A78BFA]",
        tag: "bg-[#F5F3FF] dark:bg-[#5B21B6]/20 text-[#8B5CF6] dark:text-[#A78BFA]"
      },
      green: {
        border: "border-[#10B981] dark:border-[#34D399]",
        bg: "bg-[#10B981]/10 dark:bg-[#34D399]/10",
        text: "text-[#10B981] dark:text-[#34D399]",
        tag: "bg-[#ECFDF5] dark:bg-[#065F46]/20 text-[#10B981] dark:text-[#34D399]"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <>
      {/* DESKTOP VERSION */}
      <section className="w-full h-full hidden sm:flex gap-6 p-6">
        {/* LEFT - Timeline/List */}
        <div className="w-2/5 h-full">
          <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-6 shadow-lg flex flex-col gap-4 overflow-auto">
            <div className="flex flex-col gap-2 mb-2">
              <h2 className="text-[32px] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
                Work Experience
              </h2>
              <p className="text-[15px] text-[#64748B] dark:text-[#94A3B8]">
                My professional journey & contributions
              </p>
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-3">
              {workExperience.map((work) => {
                const colors = getColorClasses(work.color);
                const isSelected = selectedWork.id === work.id;
                
                return (
                  <button
                    key={work.id}
                    onClick={() => setSelectedWork(work)}
                    className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] dark:focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2
                      ${isSelected 
                        ? `${colors.border} ${colors.bg}` 
                        : 'border-[#E2E8F0] dark:border-[#334155] bg-[#F8FAFC] dark:bg-[#334155]/20 hover:border-[#3B82F6] dark:hover:border-[#60A5FA]'
                      }`}>
                    <div className="flex items-start gap-3">
                      {/* Logo/Icon */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40 flex items-center justify-center text-2xl">
                        {work.logo}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-[16px] font-bold mb-1 ${isSelected ? colors.text : 'text-[#0F172A] dark:text-[#F8FAFC]'}`}>
                          {work.role}
                        </h3>
                        <p className="text-[14px] font-semibold text-[#475569] dark:text-[#CBD5E1] mb-1">
                          {work.company}
                        </p>
                        <p className="text-[12px] text-[#64748B] dark:text-[#94A3B8]">
                          {work.period}
                        </p>
                      </div>
                      
                      {/* Selected Indicator */}
                      {isSelected && (
                        <div className={`flex-shrink-0 w-2 h-2 rounded-full ${colors.text}`}></div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT - Details */}
        <div className="w-3/5 h-full">
          <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-10 shadow-lg overflow-auto">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${getColorClasses(selectedWork.color).bg} flex items-center justify-center text-4xl`}>
                  {selectedWork.logo}
                </div>
                <div className="flex-1">
                  <h2 className={`text-[42px] leading-[1.2] font-bold ${getColorClasses(selectedWork.color).text} mb-2`}>
                    {selectedWork.role}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-[16px] text-[#475569] dark:text-[#CBD5E1]">
                    <span className="font-semibold">{selectedWork.company}</span>
                    <span className="w-1 h-1 rounded-full bg-[#94A3B8]"></span>
                    <span>{selectedWork.period}</span>
                    <span className="w-1 h-1 rounded-full bg-[#94A3B8]"></span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {selectedWork.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[18px] leading-[1.6] text-[#475569] dark:text-[#CBD5E1]">
                {selectedWork.description}
              </p>

              {/* Achievements */}
              <div>
                <h3 className="text-[20px] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-3">
                  Key Achievements
                </h3>
                <ul className="flex flex-col gap-3">
                  {selectedWork.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${getColorClasses(selectedWork.color).bg} flex items-center justify-center mt-0.5`}>
                        <svg className={`w-4 h-4 ${getColorClasses(selectedWork.color).text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="flex-1 text-[16px] leading-[1.6] text-[#475569] dark:text-[#CBD5E1]">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-[20px] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedWork.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className={`px-4 py-2 rounded-full text-[14px] font-medium ${getColorClasses(selectedWork.color).tag}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE VERSION */}
      <section className="w-full h-full sm:hidden flex flex-col overflow-auto">
        <div className="flex flex-col gap-4 p-4 pb-24">
          {/* Header */}
          <div className="w-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-6 shadow-lg">
            <h2 className="text-[26px] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
              Work Experience
            </h2>
            <p className="text-[15px] text-[#64748B] dark:text-[#94A3B8]">
              My professional journey & contributions
            </p>
          </div>

          {/* Work Cards */}
          {workExperience.map((work) => {
            const colors = getColorClasses(work.color);
            
            return (
              <div 
                key={work.id}
                className="w-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-6 shadow-lg flex flex-col gap-4">
                
                {/* Header */}
                <div className="flex items-start gap-3">
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center text-3xl`}>
                    {work.logo}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-[20px] leading-[1.2] font-bold ${colors.text} mb-1`}>
                      {work.role}
                    </h3>
                    <p className="text-[15px] font-semibold text-[#475569] dark:text-[#CBD5E1] mb-1">
                      {work.company}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[13px] text-[#64748B] dark:text-[#94A3B8]">
                      <span>{work.period}</span>
                      <span className="w-1 h-1 rounded-full bg-[#94A3B8]"></span>
                      <span>{work.location}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[15px] leading-[1.6] text-[#475569] dark:text-[#CBD5E1]">
                  {work.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-[16px] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                    Key Achievements
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {work.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center mt-0.5`}>
                          <svg className={`w-3 h-3 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="flex-1 text-[14px] leading-[1.5] text-[#475569] dark:text-[#CBD5E1]">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-[16px] font-bold text-[#0F172A] dark:text-[#F8FAFC] mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {work.tech.map((tech, index) => (
                      <span 
                        key={index} 
                        className={`px-3 py-1.5 rounded-full text-[13px] font-medium ${colors.tag}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default WorkShowcase;