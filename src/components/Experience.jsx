export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl py-24"
    >
      <p className="text-sm uppercase tracking-[0.25em] text-[#7b2d4b]">
        Experience
      </p>

      <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight">
        Research, leadership, and people-centered experience.
      </h2>

      <div className="mt-12 space-y-6">

        {/* GRI */}
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-medium text-[#2b1f26]">
                Graduate Research Intern
              </h3>

              <p className="mt-1 text-[#7b2d4b]">
                UMass Lowell
              </p>
            </div>

            <p className="text-sm text-[#5f4b55]">
              Oct 2025 – Dec 2025
            </p>
          </div>

          <p className="mt-6 max-w-4xl leading-8 text-[#5f4b55]">
            Conducted NLP-focused research involving SEC 10-K filings and
            Critical Audit Matter extraction workflows. Worked on data
            preprocessing, rule-based text extraction, and structuring
            financial disclosures for downstream analysis.
          </p>
        </div>

        {/* ORIENTATION */}
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-medium text-[#2b1f26]">
                Orientation Leader
              </h3>

              <p className="mt-1 text-[#7b2d4b]">
                UMass Lowell
              </p>
            </div>

            <p className="text-sm text-[#5f4b55]">
              May 2025 – May 2026
            </p>
          </div>

          <p className="mt-6 max-w-4xl leading-8 text-[#5f4b55]">
            Supported incoming students through orientation programming,
            campus guidance, onboarding activities, and peer interaction.
            Helped create welcoming first-time experiences and improve
            student engagement.
          </p>
        </div>

        {/* CUSTOMER EXPERIENCE */}
        <div className="rounded-[2rem] border border-white/70 bg-white/70 p-8 shadow-lg backdrop-blur-xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-2xl font-medium text-[#2b1f26]">
                Customer Experience & Operations
              </h3>

              <p className="mt-1 text-[#7b2d4b]">
                Einstein Bros. Bagels • Starbucks
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-4xl leading-8 text-[#5f4b55]">
            Worked in fast-paced customer-facing environments focused on
            communication, collaboration, adaptability, and operational
            efficiency while supporting daily service workflows.
          </p>
        </div>

      </div>
    </section>
  );
}