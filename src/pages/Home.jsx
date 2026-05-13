import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

import projects from "../data/Projects";
import profilePic from "../assets/profile_pic.jpeg";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-10 text-[#2b1f26]">
      {/* BACKGROUND BLURS */}
      <div className="absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-[#d48ba3]/20 blur-3xl"></div>

      <div className="absolute right-[0px] top-[300px] h-[250px] w-[250px] rounded-full bg-[#7b2d4b]/10 blur-3xl"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative mx-auto grid max-w-6xl gap-10 pt-28 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        {/* LEFT SIDE */}
        <div>
          <p className="mb-5 inline-flex rounded-full border border-[#7b2d4b]/20 bg-white/70 px-4 py-2 text-sm text-[#7b2d4b] shadow-sm">
            Human-Centered AI • Data Analytics • UX Engineering • HCI
          </p>

          <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
            Human-centered systems built through AI, data, and design.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f4b55]">
            I’m Nikitha, an MS Computer Science student focused on
            human-centered AI, data-driven systems, and UX engineering. My work
            blends machine learning, research, and product design to create
            experiences that are intuitive, accessible, and grounded in real
            user needs.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#work"
              className="rounded-full bg-gradient-to-r from-[#7b2d4b] to-[#9d4d6d] px-6 py-3 text-sm font-medium !text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="rounded-full border border-[#7b2d4b]/30 bg-white/70 px-6 py-3 text-sm font-medium text-[#7b2d4b] shadow-sm transition hover:-translate-y-1"
            >
              Resume
            </a>

          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="relative">
          <div className="rounded-[2rem] border border-white/80 bg-white/70 p-6 shadow-xl backdrop-blur">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#7b2d4b] via-[#b85c7a] to-[#e8a4a8] p-8 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                What I Work On
              </p>

              <h2 className="mt-5 text-3xl font-semibold">
                Building thoughtful systems through AI, data, and
                human-centered design.
              </h2>

              <div className="mt-8 space-y-4 text-sm leading-6 text-white/85">
                <p>✦ Human-centered AI systems</p>
                <p>✦ NLP & intelligent interfaces</p>
                <p>✦ Data-informed product experiences</p>
                <p>✦ UX research & usability</p>
                <p>✦ Front-end engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section
        id="work"
        className="relative mx-auto max-w-6xl scroll-mt-32 py-20"
      >
        <p className="text-sm uppercase tracking-[0.25em] text-[#7b2d4b]">
          Selected Work
        </p>

        <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight">
          Projects across AI, data, HCI, and product design.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative mx-auto grid max-w-6xl gap-10 py-24 md:grid-cols-[0.85fr_1.15fr] md:items-center"
      >
        {/* LEFT SIDE — PORTRAIT */}
        <div className="relative">
          {/* soft blur */}
          <div className="absolute -left-6 top-10 h-48 w-48 rounded-full bg-[#d48ba3]/20 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-3 shadow-xl backdrop-blur-xl">
            <img
              src={profilePic}
              alt="Nikitha Vishnumolakala"
              className="h-[520px] w-full rounded-[2rem] object-cover object-center"
            />
          </div>
        </div>

        {/* RIGHT SIDE — TEXT */}
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-[#7b2d4b]">
            About Me
          </p>

          <h2 className="mt-4 max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-[#2b1f26]">
            Building thoughtful systems at the intersection of AI, data, and
            human experience.
          </h2>

          <p className="mt-8 max-w-2xl text-[17px] leading-8 text-[#5f4b55]">
            I’m Nikitha, a Master’s student in Computer Science at UMass Lowell
            focused on human-centered AI, UX engineering, and data-driven
            systems.
          </p>

          <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#5f4b55]">
            My work combines machine learning, HCI research, NLP, and front-end
            development to create digital experiences that are intuitive,
            accessible, and grounded in real user needs. I enjoy designing
            systems that reduce uncertainty, improve usability, and make complex
            information feel more human.
          </p>

          {/* SKILLS */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Python",
              "SQL",
              "React",
              "Machine Learning",
              "NLP",
              "UX Research",
              "Data Analytics",
              "HCI",
              "Frontend Development",
              "Usability Testing",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#7b2d4b]/15 bg-white/70 px-4 py-2 text-sm text-[#7b2d4b] shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}