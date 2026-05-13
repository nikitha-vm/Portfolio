{/* FOOTER */}
export default function Footer() {
  return (
  <footer
  id="contact"
  className="relative mx-auto max-w-6xl border-t border-[#7b2d4b]/10 py-10"
  >
  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
    <div>
      <p className="font-semibold text-[#2b1f26]">
        Nikitha Vishnumolakala
      </p>
      
    </div>

    <div className="flex flex-wrap gap-4 text-sm text-[#7b2d4b]">
      <a href="mailto:nikithavishnumolakala@gmail.com" className="hover:opacity-70">
        Email
      </a>
      <a href="https://www.linkedin.com/in/nikithavishnumolakala13/" className="hover:opacity-70">
        LinkedIn
      </a>
      <a href="https://github.com/nikitha-vm" className="hover:opacity-70">
        GitHub
      </a>
      <a href="public/resume.pdf" className="hover:opacity-70">
        Resume
      </a>
    </div>
  </div>
</footer>
  );
}