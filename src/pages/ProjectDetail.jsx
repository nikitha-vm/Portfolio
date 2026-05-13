import { Link, useParams } from "react-router-dom";
import projects from "../data/Projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#fffaf7] px-6 py-20 text-[#2b1f26]">
        <div className="mx-auto max-w-4xl">
          <p>Project not found.</p>
          <Link to="/" className="mt-6 inline-block text-[#7b2d4b]">
            ← Back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 py-12 text-[#2b1f26]">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/"
          className="inline-flex rounded-full border border-[#7b2d4b]/20 bg-white/70 px-4 py-2 text-sm font-medium text-[#7b2d4b] shadow-sm transition hover:-translate-y-1"
        >
          ← Back to home
        </Link>

        <section className="relative mt-10 overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-10 shadow-xl backdrop-blur-xl">
  <div
    className={`absolute right-[-120px] top-[-120px] h-80 w-80 rounded-full bg-gradient-to-br ${project.accent} opacity-25 blur-3xl`}
  ></div>

  <div
    className={`absolute bottom-[-120px] left-[-120px] h-72 w-72 rounded-full bg-gradient-to-br ${project.accent} opacity-15 blur-3xl`}
  ></div>

  <div className="relative">
    <p className="text-sm uppercase tracking-[0.25em] text-[#7b2d4b]">
      {project.category}
    </p>

    <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight md:text-7xl">
      {project.title}
    </h1>

    <p className="mt-6 max-w-3xl text-lg leading-8 text-[#5f4b55]">
      {project.overview || project.description}
    </p>
    
    {project.tech && (
    <div className="mt-8 flex flex-wrap gap-3">
    {project.tech.map((item) => (
      <span
        key={item}
        className="rounded-full border border-[#7b2d4b]/10 bg-[#fff7fa] px-4 py-2 text-sm text-[#7b2d4b]"
      >
        {item}
      </span>
     ))}
     </div>
     )}
     
    <div className="mt-8 flex flex-wrap gap-3">
      {["Research", "UX", "Data", "Systems"].map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#7b2d4b]/15 bg-white/70 px-4 py-2 text-sm text-[#7b2d4b] shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    {project.figma && (
  <div className="mt-8">
    <a
      href={project.figma}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7b2d4b] to-[#9d4d6d] px-6 py-3 text-sm font-medium !text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
    >
      View Figma Prototype ↗
    </a>
  </div>
)}
  </div>
</section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
  <div className="rounded-[2rem] border border-[#7b2d4b]/10 bg-[#fff7fa] p-7 shadow-lg">
    <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
      Role
    </p>
    <p className="mt-4 leading-7 text-[#5f4b55]">
      {project.role || "Add your project role here."}
    </p>
  </div>

  <div className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-lg md:col-span-2">
    <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
      Problem
    </p>
    <p className="mt-4 leading-7 text-[#5f4b55]">
      {project.problem || "Add the problem statement here."}
    </p>
  </div>
</section>

        <section className="mt-8 rounded-[2.5rem] border border-white/70 bg-white/70 p-10 shadow-lg">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
            Process
          </p>

          <h2 className="mt-4 text-3xl font-semibold">
            From research insight to structured experience.
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#5f4b55]">
            {project.process || "Add your process here."}
          </p>
        </section>

        {project.features && (
          <section className="mt-8 rounded-[2.5rem] border border-white/70 bg-white/70 p-10 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
              Key Features
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[1.5rem] border border-[#7b2d4b]/10 bg-[#fff7fa] p-5 text-[#5f4b55]"
                >
                  ✦ {feature}
                </div>
              ))}
            </div>
          </section>
        )}
         {/*navi section */}
         {project.navi && (
  <section className="mt-8 overflow-hidden rounded-[2.5rem] border border-white/70 bg-gradient-to-br from-[#fff7fa] to-white p-10 shadow-lg">
    <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
      Navi
    </p>

    <h2 className="mt-4 text-3xl font-semibold">
      Designing emotional support into the experience.
    </h2>

    <p className="mt-5 max-w-4xl leading-8 text-[#5f4b55]">
      {project.navi}
    </p>

    {project.naviFeatures && (
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {project.naviFeatures.map((feature) => (
          <div
            key={feature}
            className="rounded-[1.5rem] border border-[#7b2d4b]/10 bg-white/70 p-5 text-[#5f4b55]"
          >
            ✦ {feature}
          </div>
        ))}
      </div>
    )}
  </section>
)}
{project.findings && (
  <section className="mt-8 rounded-[2.5rem] border border-white/70 bg-white/70 p-10 shadow-lg">
    <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
      Research Findings
    </p>

    <h2 className="mt-4 text-2xl font-medium tracking-tight text-[#3c2a35]">
      What usability testing revealed.
    </h2>

    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {project.findings.map((finding) => (
        <div
          key={finding}
          className="rounded-[1.5rem] border border-[#7b2d4b]/10 bg-[#fff7fa] p-5 text-[#5f4b55]"
        >
          ✦ {finding}
        </div>
      ))}
    </div>
  </section>
)}
        <section className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
              Outcomes
            </p>
            <p className="mt-4 leading-8 text-[#5f4b55]">
              {project.outcomes || "Add project outcomes here."}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7b2d4b]">
              Future Work
            </p>
            <p className="mt-4 leading-8 text-[#5f4b55]">
              {project.futureWork || "Add future work here."}
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}