import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "13d3a38d-3ffe-4cd2-bd01-6474faad2d6d");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus("success");
        (event.target as HTMLFormElement).reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        <div className="lg:col-span-12 mb-12">
          <span className="gold-signal mb-4 block">Get in touch</span>
          <h1 className="text-5xl md:text-8xl font-black text-navy leading-none tracking-tight">
            Let's build <br />
            <span className="text-gold">Together.</span>
          </h1>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-10 md:p-16 rounded-[3rem] deep-shadow border border-surface-highest/10 relative overflow-hidden">
          {submitStatus === "success" ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center h-full text-center py-20"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="text-3xl font-black text-navy mb-4 tracking-tight">Message Received.</h3>
              <p className="text-navy/60 font-medium max-w-sm mb-8">
                Your coordinates have been received. I will establish contact shortly.
              </p>
              <button 
                onClick={() => setSubmitStatus("idle")}
                className="text-gold font-black uppercase tracking-[0.2em] text-xs hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative">
                  <label className="text-[0.6rem] font-bold text-navy/40 uppercase tracking-widest mb-2 block">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-navy/10 py-4 focus:outline-none focus:border-gold transition-colors font-bold text-navy"
                    placeholder="John Doe"
                  />
                </div>
                <div className="relative">
                  <label className="text-[0.6rem] font-bold text-navy/40 uppercase tracking-widest mb-2 block">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-navy/10 py-4 focus:outline-none focus:border-gold transition-colors font-bold text-navy"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="text-[0.6rem] font-bold text-navy/40 uppercase tracking-widest mb-2 block">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full bg-transparent border-b border-navy/10 py-4 focus:outline-none focus:border-gold transition-colors font-bold text-navy resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {submitStatus === "error" && (
                <div className="flex items-center gap-3 text-rose-500 text-xs font-bold uppercase tracking-widest bg-rose-50 p-4 rounded-xl">
                  <AlertCircle className="w-4 h-4" />
                  Failed to send. Please try again.
                </div>
              )}

              <motion.button 
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 rounded-xl font-bold uppercase tracking-[0.2em] text-[0.8rem] transition-all duration-300 ${
                  isSubmitting ? 'bg-surface-highest text-white cursor-wait' : 'bg-navy text-white hover:bg-gold'
                }`}
              >
                {isSubmitting ? "Processing..." : "Establish Connection"}
              </motion.button>
              
              <div className="flex items-center justify-center gap-4 opacity-20">
                <div className="h-[1px] flex-1 bg-navy"></div>
                <span className="text-[0.5rem] font-black uppercase tracking-widest">End Encryption</span>
                <div className="h-[1px] flex-1 bg-navy"></div>
              </div>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-surface-low rounded-2xl flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="gold-signal mb-1 block">Email Me</span>
                <p className="font-bold text-xl text-navy">dapkaravaibhav@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-surface-low rounded-2xl flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="gold-signal mb-1 block">Call Me</span>
                <p className="font-bold text-xl text-navy">+91 9171761675</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-surface-low rounded-2xl flex items-center justify-center text-navy group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="gold-signal mb-1 block">Location</span>
                <p className="font-bold text-xl text-navy">Indore, India</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-surface-highest/20">
            <span className="gold-signal mb-6 block">Social Channels</span>
            <div className="flex gap-6">
              {[
                { icon: <Linkedin />, link: "https://linkedin.com/in/vaibhav-dapkara" },
                { icon: <Github />, link: "https://github.com/vaibhavdapkara14" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
