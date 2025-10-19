import Image from "next/image";
import KunalImage from "@/assets/images/kunal_3D_image.png";

export default function Home() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Desktop Layout */}
      {/* <section className="hidden sm:flex h-full items-center justify-center px-8">
        <div className="max-w-6xl w-full grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kunal Bera</span>
            </h1>
            <h2 className="text-2xl text-gray-700 dark:text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Passionate about creating beautiful, responsive web applications with modern technologies. 
              Specialized in React, Next.js, and TypeScript.
            </p>
            <div className="flex gap-4">
              <a 
                href="/assets/images/Kunal_Bera_Frontend.pdf" 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/kunal-bera-01b10b240/" 
                target="_blank"
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Image 
              src={kunalImage} 
              alt="Kunal Bera 3D Avatar" 
              className="w-80 h-80 object-contain"
              priority
            />
          </div>
        </div>
      </section> */}

      <section className="hidden sm:flex w-full h-full">
        <div className="w-[60%] h-full flex items-center justify-center p-8">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl space-y-6 max-w-lg">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-white">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Kunal Bera</span> 👋
              </h1>
              <h2 className="text-xl text-gray-200 font-semibold">
                Frontend-Focused Full Stack Developer
              </h2>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              I&apos;m a developer passionate about crafting high-performance and visually engaging web experiences.
              With over two years of experience in Next.js, React, and TypeScript, I build scalable, AI-driven
              interfaces that bridge design and engineering. Currently at Anzen Technologies, I&apos;m focused on
              AI-powered career growth platforms and document intelligence tools that simplify complex workflows.
            </p>
            
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="backdrop-blur-sm bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">⚡ Next.js</span>
                <span className="backdrop-blur-sm bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">⚡ React</span>
                <span className="backdrop-blur-sm bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full border border-blue-400/30">⚡ TypeScript</span>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="backdrop-blur-sm bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full border border-purple-400/30">🎨 Tailwind CSS</span>
                <span className="backdrop-blur-sm bg-green-500/20 text-green-200 px-3 py-1 rounded-full border border-green-400/30">💾 MongoDB</span>
                <span className="backdrop-blur-sm bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full border border-orange-400/30">🔥 Firebase</span>
                <span className="backdrop-blur-sm bg-green-500/20 text-green-200 px-3 py-1 rounded-full border border-green-400/30">🌐 Node.js</span>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-300">
              <p>🚀 Delivered 4+ production-grade platforms improving performance by up to 90%.</p>
              <p>🤝 Built interactive dashboards & AI-powered tools used by enterprise teams.</p>
              <p>📈 Enhanced data accuracy and UX efficiency by 40% across major projects.</p>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a 
                href="/assets/images/Kunal_Bera_Frontend.pdf" 
                target="_blank"
                className="backdrop-blur-sm bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600/90 hover:to-purple-600/90 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 border border-white/20"
              >
                View Resume
              </a>
              <a 
                href="https://www.linkedin.com/in/kunal-bera-01b10b240/" 
                target="_blank"
                className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-2xl font-medium transition-all duration-300 border border-white/30"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="w-[40%] h-full grid place-items-center">
          <div className="relative w-full h-full max-w-md">
            <Image
              src={KunalImage}
              alt="Kunal Bera Avatar"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="sm:hidden flex flex-col h-full justify-center items-center px-6 py-8">
        <div className="text-center space-y-6">
          <Image
            src={KunalImage}
            alt="Kunal Bera 3D Avatar"
            className="w-48 h-48 object-contain mx-auto"
            priority
          />
          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Kunal Bera</span>
            </h1>
            <h2 className="text-xl text-gray-700 dark:text-gray-300">
              Frontend Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Creating beautiful, responsive web applications with React, Next.js, and TypeScript.
            </p>
          </div>
          <div className="flex flex-col gap-3 w-full max-w-xs">
            <a
              href="/assets/images/Kunal_Bera_Frontend.pdf"
              target="_blank"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              View Resume
            </a>
            <a
              href="https://www.linkedin.com/in/kunal-bera-01b10b240/"
              target="_blank"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition-colors text-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
