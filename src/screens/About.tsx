import { motion } from "motion/react";
import { Download } from "lucide-react";
import { generateAndDownloadCV } from "../utils/cvGenerator";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 lg:grid-cols-12 gap-20">
      <div className="lg:col-span-12 mb-12">
        <span className="gold-signal mb-4 block">The Journey</span>
        <h1 className="text-5xl md:text-7xl font-black text-navy leading-none tracking-tight">
          Experience & Education
        </h1>
      </div>

      {/* Narrative Intro */}
      <div className="lg:col-span-5 sticky top-32 h-fit space-y-8">
        <p className="text-xl text-navy/60 leading-relaxed">
          I am a passionate Java Full Stack Developer with a strong foundation in backend development and modern web technologies. I enjoy building scalable, efficient, and user-friendly applications.
        </p>
        <p className="text-lg text-navy/40 leading-relaxed">
          Currently, I am working as a Java Full Stack Trainee where I develop REST APIs, handle database operations, and build responsive user interfaces.
        </p>
        <button
          onClick={generateAndDownloadCV}
          className="bg-navy text-white px-8 py-4 rounded-sm font-bold uppercase tracking-[0.15em] text-[0.75rem] hover:bg-gold transition-all duration-300 deep-shadow flex items-center gap-2.5 group w-fit cursor-pointer"
        >
          <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-all duration-300" />
          Download Resume (PDF)
        </button>
        <div className="h-px w-20 bg-gold pt-2"></div>
      </div>

      {/* Timeline */}
      <div className="lg:col-span-7 space-y-24">
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl font-bold text-navy mb-12 flex items-center gap-4 uppercase tracking-widest text-[0.8rem]">
            <span className="w-10 h-px bg-surface-highest"></span>
            Professional Experience
          </h2>

          <div className="space-y-16">
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(204,168,48,0.5)] z-10 transition-transform group-hover:scale-150 duration-500"></div>
              <div className="absolute left-[5px] top-3 w-px h-[calc(100%+4rem)] bg-surface-highest"></div>
              <span className="gold-signal mb-2 block">July 2025 — Present</span>
              <h3 className="text-2xl font-bold text-navy mb-1">Java Full Stack Trainee</h3>
              <p className="text-lg font-medium text-navy/60 mb-6">Infobeans Foundation, Indore</p>
              <ul className="space-y-3 text-navy/60">
                <li className="flex gap-4">
                  <span className="text-gold mt-1.5">•</span>
                  <span>Building full stack web applications with Spring Boot</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1.5">•</span>
                  <span>Developing REST APIs and integrating MySQL databases</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1.5">•</span>
                  <span>Working on backend logic and responsive frontend UI</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold mt-1.5">•</span>
                  <span>Collaborating in a professional team environment</span>
                </li>
              </ul>
            </div>

            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-surface-highest z-10 transition-colors group-hover:bg-gold duration-500"></div>
              <div className="absolute left-[5px] top-3 w-px h-full bg-surface-highest group-last:h-0"></div>
              <span className="text-navy/30 font-bold uppercase tracking-[0.1em] text-[0.7rem] mb-2 block font-label">April 2025 — May 2025</span>
              <h3 className="text-2xl font-bold text-navy mb-1">Web Development Intern</h3>
              <p className="text-lg font-medium text-navy/60 mb-4">Shadow Fox (Remote)</p>
              <p className="text-navy/60 max-w-xl">
                Built a responsive portfolio website, improved UI/UX design, and optimized performance across multiple devices.
              </p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold text-navy mb-12 flex items-center gap-4 uppercase tracking-widest text-[0.8rem]">
            <span className="w-10 h-px bg-surface-highest"></span>
            Academic Foundation
          </h2>

          <div className="space-y-16">
            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-gold shadow-[0_0_15px_rgba(204,168,48,0.5)] z-10 transition-transform group-hover:scale-150 duration-500"></div>
              <div className="absolute left-[5px] top-3 w-px h-[calc(100%+4rem)] bg-surface-highest"></div>
              <span className="gold-signal mb-2 block">2023 — 2026</span>
              <h3 className="text-2xl font-bold text-navy mb-1">Bachelor in Computer Application (BCA)</h3>
              <p className="text-lg font-medium text-navy/60 mb-2">Govt. Holkar Science College, Indore</p>
              <div className="inline-flex items-center gap-2 bg-navy/5 px-3 py-1 rounded-full text-xs font-bold text-navy/60">
                CGPA: 8.05
              </div>
            </div>

            <div className="relative pl-12 group">
              <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-surface-highest z-10 transition-colors group-hover:bg-gold duration-500"></div>
              <div className="absolute left-[5px] top-3 w-px h-full bg-surface-highest group-last:h-0"></div>
              <span className="text-navy/30 font-bold uppercase tracking-[0.1em] text-[0.7rem] mb-2 block font-label">2022</span>
              <h3 className="text-2xl font-bold text-navy mb-1">Higher Secondary (Class 12)</h3>
              <p className="text-lg font-medium text-navy/60 mb-2">Board of Secondary Education, M.P.</p>
              <div className="inline-flex items-center gap-2 bg-navy/5 px-3 py-1 rounded-full text-xs font-bold text-navy/60">
                Score: 91.2%
              </div>
            </div>
          </div>
        </div>

        {/* Competencies / Extra section */}
        <div className="bg-white p-12 rounded-[3rem] border border-surface-highest/10">
          <h2 className="text-2xl font-bold text-navy mb-6">Achievements</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="text-gold font-black text-3xl">100+</div>
              <div>
                <h4 className="font-bold text-navy">Problem Solving Excellence</h4>
                <p className="text-navy/40 text-sm">Solved 100+ algorithmic problems on LeetCode & Coding Ninjas.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="text-gold font-black text-3xl">50</div>
              <div>
                <h4 className="font-bold text-navy">Logic Sprint Streak</h4>
                <p className="text-navy/40 text-sm">Completed a 50-day coding streak focused on Data Structures & Algorithms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
