export function Footer() {
  return (
    <footer className="bg-surface-low py-16">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <span className="text-navy font-black tracking-tighter uppercase text-xl">
            Vaibhav Dapkara
          </span>
          <p className="text-navy/40 text-sm font-medium tracking-wide">
            © 2024 Architectural Engineer. Developed in Indore, India.
          </p>
        </div>

        <div className="flex items-center gap-10">
          <a
            href="mailto:dapkaravaibhav@gmail.com"
            className="text-navy/40 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest underline underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/vaibhav-dapkara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/40 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vaibhavdapkara14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy/40 hover:text-gold transition-colors text-sm font-bold uppercase tracking-widest underline underline-offset-4"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
