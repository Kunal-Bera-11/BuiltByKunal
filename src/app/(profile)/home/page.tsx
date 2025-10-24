import Image from "next/image";
import KunalImage from "@/assets/images/kunal_3D_image.png";
import ActionButtons from "./_components/ActionButtons";

export default function HomePage() {
    return (
        <>
            <section className="w-full h-full hidden sm:flex gap-6 p-6">
                <div className="w-3/5 h-full">
                    <div className="w-full h-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] py-10 px-5 shadow-lg">
                        <div className="w-full h-full px-5 overflow-auto flex flex-col gap-6 overflow-y-auto">
                            <div className="w-full flex flex-col gap-6 ">
                                <h1 className="text-[56px] leading-[1.1] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                                    Hi, I&apos;m Kunal Bera&nbsp;
                                    <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                                </h1>
                                <h2 className="text-[34px] leading-[1.3] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                                    Frontend Developer building real-time, scalable, and intuitive web experiences.
                                </h2>
                                <p className="text-[20px] leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                                    I create high-performance, visually engaging applications using Next.js, React, and Angular — turning complex ideas into fast, user-friendly products.
                                </p>
                            </div>

                            <div className="w-full h-full justify-center flex flex-col gap-6">
                                <div className="w-full grid grid-cols-3 gap-4">
                                    <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                        <div className="text-[28px] font-bold text-[#3B82F6] dark:text-[#60A5FA]">2+</div>
                                        <div className="text-[13px] text-[#64748B] dark:text-[#94A3B8] font-medium">Years Exp.</div>
                                    </div>
                                    <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                        <div className="text-[28px] font-bold text-[#8B5CF6] dark:text-[#A78BFA]">7+</div>
                                        <div className="text-[13px] text-[#64748B] dark:text-[#94A3B8] font-medium">Projects</div>
                                    </div>
                                    <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                        <div className="text-[28px] font-bold text-[#10B981] dark:text-[#34D399]">~90%</div>
                                        <div className="text-[13px] text-[#64748B] dark:text-[#94A3B8] font-medium">Satisfaction</div>
                                    </div>
                                </div>
                                <ActionButtons />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/5 h-full grid place-items-center">
                    <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 dark:from-[#60A5FA]/10 dark:to-[#A78BFA]/10">
                        <Image
                            src={KunalImage}
                            alt="Kunal Bera Avatar"
                            fill
                            className="object-contain"
                            priority
                        />
                        <div className="absolute top-8 right-8 w-32 h-32 bg-[#3B82F6]/20 dark:bg-[#60A5FA]/20 rounded-full blur-3xl pointer-events-none"></div>
                        <div className="absolute bottom-8 left-8 w-40 h-40 bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 rounded-full blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </section >

            <section className="w-full h-full sm:hidden flex flex-col p-4 gap-4 overflow-y-auto">
                <div className="w-full min-h-[75%] aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-[#3B82F6]/10 to-[#8B5CF6]/10 dark:from-[#60A5FA]/10 dark:to-[#A78BFA]/10 relative">
                    <Image
                        src={KunalImage}
                        alt="Kunal Bera Avatar"
                        fill
                        className="object-contain"
                        priority
                    />
                    <div className="absolute top-4 right-4 w-20 h-20 bg-[#3B82F6]/20 dark:bg-[#60A5FA]/20 rounded-full blur-2xl pointer-events-none"></div>
                    <div className="absolute bottom-4 left-4 w-24 h-24 bg-[#8B5CF6]/20 dark:bg-[#A78BFA]/20 rounded-full blur-2xl pointer-events-none"></div>
                </div>

                <div className="w-full rounded-3xl bg-white dark:bg-[#1E293B] border border-[#E2E8F0] dark:border-[#334155] p-6 shadow-lg flex flex-col gap-6">
                    <div className="w-full flex flex-col gap-4">
                        <h1 className="text-[1.625rem] leading-[1.2] font-bold text-[#0F172A] dark:text-[#F8FAFC] tracking-tight">
                            Hi, I&apos;m Kunal Bera&nbsp;
                            <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
                        </h1>
                        <h2 className="text-[1rem] leading-[1.35] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] dark:from-[#60A5FA] dark:to-[#A78BFA]">
                            Frontend Developer building real-time, scalable, and intuitive web experiences.
                        </h2>
                        <p className="text-[0.75rem] leading-[1.5] font-medium text-[#475569] dark:text-[#CBD5E1]">
                            I create high-performance, visually engaging applications using Next.js, React, and Angular — turning complex ideas into fast, user-friendly products.
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-4">
                        <div className="w-full grid grid-cols-3 gap-3">
                            <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                <div className="text-[1.5rem] font-bold text-[#3B82F6] dark:text-[#60A5FA]">2+</div>
                                <div className="text-[0.7rem] text-[#64748B] dark:text-[#94A3B8] font-medium">Years Exp.</div>
                            </div>
                            <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                <div className="text-[1.5rem] font-bold text-[#8B5CF6] dark:text-[#A78BFA]">7+</div>
                                <div className="text-[0.7rem] text-[#64748B] dark:text-[#94A3B8] font-medium">Projects</div>
                            </div>
                            <div className="w-full text-center p-3 rounded-xl bg-[#F1F5F9] dark:bg-[#334155]/40">
                                <div className="text-[1.5rem] font-bold text-[#10B981] dark:text-[#34D399]">~90%</div>
                                <div className="text-[0.7rem] text-[#64748B] dark:text-[#94A3B8] font-medium">Satisfaction</div>
                            </div>
                        </div>
                        <ActionButtons />
                    </div>
                </div>
            </section>
        </>
    )
}
