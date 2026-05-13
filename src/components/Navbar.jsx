export default function Navbar() {
  return (
    <nav className="fixed left-1/2 top-6 z-50 flex w-[calc(100%-3rem)] max-w-6xl -translate-x-1/2 items-center justify-between rounded-full border border-white/60 bg-white/70 px-6 py-4 shadow-lg backdrop-blur-xl">
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-[#2b1f26]">
          Nikitha Vishnumolakala
        </h1>
      </div>

      <div className="hidden gap-6 text-sm text-[#5f4b55] md:flex">
        <a href="#work" className="transition hover:text-[#7b2d4b]">
          Work
        </a>
        <a href="#about" className="transition hover:text-[#7b2d4b]">
          About
        </a>
        <a href="#contact" className="transition hover:text-[#7b2d4b]">
          Contact
        </a>
      </div>
    </nav>
  );
}