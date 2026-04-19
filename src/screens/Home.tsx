import { motion } from "motion/react";
import { ArrowRight, Code2, Database, LayoutPanelLeft } from "lucide-react";
import { Link } from "react-router-dom";
import profilePic from "../assets/p.jpeg";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-20 md:py-32 grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7"
        >
          <span className="gold-signal mb-4 block">Architectural Engineer</span>
          <h1 className="text-5xl md:text-8xl font-black text-navy leading-[0.9] tracking-tight mb-8">
            Java Full Stack <br />
            <span className="text-gold">Developer.</span>
          </h1>
          <p className="text-lg text-navy/60 leading-relaxed max-w-xl mb-12">
            Hi, I'm <span className="text-navy font-bold">Vaibhav Dapkara</span>. 
            I build scalable web applications using Java, Spring Boot, and modern web technologies. 
            Passionate about backend performance, clean UI, and real-world problem solving.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <Link 
              to="/projects"
              className="bg-navy text-white px-10 py-5 rounded-sm font-bold uppercase tracking-[0.15em] text-[0.8rem] hover:bg-gold transition-all duration-300 deep-shadow flex items-center gap-3 group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact"
              className="px-10 py-5 rounded-sm font-bold uppercase tracking-[0.15em] text-[0.8rem] text-navy border border-navy/10 hover:bg-surface-low transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5 relative"
        >
          <div className="aspect-[4/5] bg-surface-low rounded-[2rem] overflow-hidden hover:scale-[1.02] transition-all duration-1000 group shadow-2xl shadow-navy/20">
            <img 
              referrerPolicy="no-referrer"
              src={profilePic} 
              alt="Vaibhav Dapkara" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://picsum.photos/seed/vaibhav-professional/1000/1250";
              }}
            />
            <div className="absolute inset-0 bg-navy/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-navy p-6 rounded-3xl deep-shadow max-w-[210px] text-white border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.5)]"></div>
              <span className="text-[0.55rem] font-black uppercase tracking-[0.2em] text-white/40">Status: Active</span>
            </div>
            <h3 className="font-black text-base tracking-tighter leading-none mb-4">
              Available for <br /> 
              <span className="text-gold">Operations.</span>
            </h3>
            <div className="h-[1px] w-full bg-white/10 mb-3"></div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[0.45rem] font-bold uppercase text-white/20 mb-0.5">Location</span>
                <span className="text-[0.55rem] font-black uppercase tracking-widest text-gold text-[0.5rem]">Indore, IN</span>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-[0.45rem] font-bold uppercase text-white/20 mb-0.5">ID</span>
                <span className="text-[0.55rem] font-black uppercase tracking-widest text-white/60">RD-104</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Specializations */}
      <section className="bg-surface-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="gold-signal mb-4 block">The Toolkit</span>
              <h2 className="text-4xl md:text-5xl font-black text-navy tracking-tight leading-none">
                Technical Specializations
              </h2>
            </div>
            <p className="text-navy/40 italic text-lg max-w-xs text-right">
              "Precision in code, elegance in execution."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Code2 className="w-6 h-6" />, 
                title: "Backend Mastery", 
                desc: "Java, Spring Boot, Hibernate, and RESTful API design.",
                color: "bg-navy"
              },
              { 
                icon: <Database className="w-6 h-6" />, 
                title: "Data Architecture", 
                desc: "MySQL and complex relational schema design.",
                color: "bg-gold"
              },
              { 
                icon: <LayoutPanelLeft className="w-6 h-6" />, 
                title: "UI Engineering", 
                desc: "Modern React interfaces with accessible, editorial design.",
                color: "bg-navy"
              }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] border border-surface-highest/10 hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-12 h-12 ${skill.color} text-white rounded-xl flex items-center justify-center mb-8`}>
                  {skill.icon}
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">{skill.title}</h3>
                <p className="text-navy/60 leading-relaxed">
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
