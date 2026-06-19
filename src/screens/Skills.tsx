import { motion } from "motion/react";
import { Terminal, Layers, Database, Cpu, Globe, Infinity, LayoutTemplate } from "lucide-react";

const skillClusters = [
  {
    title: "Backend Core",
    id: "01",
    icon: <Terminal className="w-5 h-5" />,
    description: "Architecting the invisible foundations that power performance and scale.",
    skills: [
      { name: "Java Architecture", level: 95, detail: "Expert in JVM internals and multi-threading." },
      { name: "Spring Ecosystem", level: 90, detail: "Spring Boot, Security, and Microservices." },
      { name: "Node.js & Express.js", level: 88, detail: "Scalable asynchronous backends and server-side runtimes." },
      { name: "RESTful API Design", level: 92, detail: "Optimized endpoint structures and documentation." },
      { name: "Hibernate / JPA", level: 85, detail: "Complex data mapping and performance tuning." }
    ]
  },
  {
    title: "Frontend Layer",
    id: "02",
    icon: <Layers className="w-5 h-5" />,
    description: "Building bridge-like interfaces that connect the user to the machine.",
    skills: [
      { name: "Modern React", level: 90, detail: "Functional components, Hooks, and State management." },
      { name: "Tailwind Engineering", level: 92, detail: "Utility-first design with custom architectural systems." },
      { name: "JavaScript (ES6+)", level: 85, detail: "Asynchronous patterns and functional logic." },
      { name: "UI/UX Accessibility", level: 88, detail: "Inclusive design patterns and responsive layouts." }
    ]
  },
  {
    title: "Methods & Databases",
    id: "03",
    icon: <Database className="w-5 h-5" />,
    description: "Reliable databases and workflows for consistent deployment.",
    skills: [
      { name: "MySQL / Relational", level: 90, detail: "Schema design and advanced SQL query optimization." },
      { name: "MongoDB / NoSQL", level: 88, detail: "Flexible schema and efficient aggregation pipelines." },
      { name: "Git / Versioning", level: 92, detail: "Trunk-based development and secure branching." },
      { name: "Agile / Scrum", level: 85, detail: "Iterative development and rapid prototyping." },
      { name: "Workflow Automation", level: 80, detail: "Make.com and custom pipeline scripting." }
    ]
  }
];

export default function Skills() {
  return (
    <div className="bg-base min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-32">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-32 items-end">
          <div className="md:col-span-8">
            <span className="gold-signal mb-6 block">The Architectural Stack</span>
            <h1 className="text-6xl md:text-9xl font-black text-navy leading-[0.85] tracking-tight mb-8">
              Technical <br />
              <span className="text-gold">Sovereignty.</span>
            </h1>
          </div>
          <div className="md:col-span-4 border-l border-navy/10 pl-8 pb-4">
            <p className="text-lg text-navy/60 font-medium leading-relaxed italic">
              "A system is only as strong as its weakest dependency. I build without them."
            </p>
          </div>
        </div>

        {/* Technical Data Grid Section */}
        <div className="space-y-32">
          {skillClusters.map((cluster, idx) => (
            <motion.section 
              key={cluster.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Cluster Meta */}
              <div className="lg:col-span-4 space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-black text-navy/10 tabular-nums">{cluster.id}</span>
                  <div className="w-10 h-[1px] bg-gold" />
                  <span className="gold-signal">{cluster.title}</span>
                </div>
                <div className="bg-navy p-8 rounded-3xl text-white deep-shadow flex items-center justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold uppercase tracking-tight">{cluster.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                      {cluster.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center">
                    {cluster.icon}
                  </div>
                </div>
              </div>

              {/* Skills List Grid */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                {cluster.skills.map((skill) => (
                  <div key={skill.name} className="group border-b border-navy/5 pb-8">
                    <div className="flex justify-between items-baseline mb-4">
                      <h4 className="text-lg font-black text-navy group-hover:text-gold transition-colors duration-300">
                        {skill.name}
                      </h4>
                      <span className="font-mono text-xs text-navy/40 tabular-nums">
                        {skill.level}/100
                      </span>
                    </div>
                    
                    <p className="text-sm text-navy/40 mb-6 font-medium leading-relaxed">
                      {skill.detail}
                    </p>

                    <div className="relative h-[2px] w-full bg-navy/5 overflow-hidden rounded-full">
                      <motion.div 
                        initial={{ x: "-100%" }}
                        whileInView={{ x: `${skill.level - 100}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "circOut", delay: 0.5 }}
                        className="absolute inset-0 bg-gold"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Global Infrastructure Banner */}
        <div className="mt-40 bg-white border border-navy/5 rounded-[4rem] p-12 md:p-24 overflow-hidden relative deep-shadow group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-navy leading-none mb-8">
                Ready to deploy <br />
                <span className="text-gold underline underline-offset-8 decoration-navy/10">professional scale?</span>
              </h2>
              <p className="text-navy/60 text-lg mb-12 max-w-md">
                I am currently open to full-stack opportunities that require 
                high-precision engineering and structural integrity.
              </p>
              <div className="flex gap-4">
                <a 
                  href="/contact" 
                  className="bg-navy text-white px-10 py-5 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-gold transition-all duration-500 hover:-translate-y-1 block text-center"
                >
                  Initiate Project
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Cpu />, label: "Low Latency" },
                { icon: <Globe />, label: "Global Deploy" },
                { icon: <Infinity />, label: "CI/CD Ready" },
                { icon: <LayoutTemplate />, label: "UX Excellence" }
              ].map((feature, i) => (
                <div key={i} className="bg-base border border-navy/5 p-8 rounded-[2rem] flex flex-col items-center gap-4 group-hover:border-gold/30 transition-colors duration-500">
                  <div className="text-navy/20 group-hover:text-gold transition-colors">{feature.icon}</div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-widest text-navy/40">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/3 blur-[100px] pointer-events-none"></div>
        </div>
      </div>
    </div>
  );
}

