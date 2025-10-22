import Image from "next/image";
import KunalImage from "@/assets/images/kunal_3D_image.png";
export default function Home() {
  return (
    <>
      <section className="w-full h-full hidden sm:flex">
        <div className="w-3/5 h-full p-6">
          <div className="w-full h-full rounded-[16px] bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] py-6 px-8 shadow-lg flex flex-col justify-center gap-6 overflow-auto">
            <h1 className="text-[52px] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC]">
              Hi, I&apos;m Kunal Bera 👋
            </h1>
            <h2 className="text-[32px] leading-[1.4] font-semibold text-[#475569] dark:text-[#94A3B8]">
              Frontend Developer crafting real-time, scalable, and intelligent web experiences.
            </h2>
            <h3 className="text-[22.652px] leading-[1.6] font-medium text-[#0F172A] dark:text-[#F8FAFC]">
              I build high-performance, visually engaging web applications using Next.js, React, and Angular — turning complex ideas into fast, user-friendly digital products.
            </h3>
            <div className="text-[14px] flex flex-col gap-3 leading-[1.7] text-[#475569] dark:text-[#94A3B8]">
              <p>
                I&apos;m a frontend-focused full stack developer with over 2 years of experience designing and building high-performance web applications. I specialize in creating real-time, scalable, and AI-integrated interfaces using Next.js, React, and Angular — blending precision engineering with clean, intuitive design.
              </p>
              <p>
                My work has spanned from AI-driven dashboards and intelligent chatbots to interactive PDF systems and real-time data tools — each project focused on performance, usability, and visual polish.
              </p>
              <p>
                I&apos;m currently open to new opportunities where I can collaborate with dynamic teams to craft seamless, impactful digital experiences that scale beautifully across devices.
              </p>
            </div>
          </div>
        </div>
        <div className="w-2/5 h-full p-4 grid place-items-center">
          <div className="relative w-full h-full max-w-md">
            <Image
              src={KunalImage}
              alt="Kunal Bera Avatar"
              fill
              className="object-contain drop-shadow-lg/50 drop-shadow-[#3B82F6] dark:drop-shadow-[#60A5FA]"
              priority
            />
          </div>
        </div>
      </section>
      <section className="w-full h-full sm:hidden">
        <div className="w-full h-1/5">hdfcjjkdh</div>
        <div className="w-full h-4/5 relative">
          <Image
            src={KunalImage}
            alt="Kunal Bera Avatar"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>
    </>
  )
}
