import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <Link to={project.path}>
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative min-h-[350px] flex-col justify-between overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/70 p-8 shadow-lg backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-2xl"
    >
      {/* top glow line */}
      <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#7b2d4b]/30 to-transparent"></div>

      {/* gradient glow */}
      <div
        className={`absolute right-[-40px] top-[-40px] h-40 w-40 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl transition duration-500 group-hover:scale-125`}
      ></div>

      {/* project number */}
      <p className="text-xs font-semibold tracking-[0.35em] text-[#9d4d6d]">
        {project.number}
      </p>

      {/* title */}
      <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[#2b1f26] md:text-4xl">
        {project.title}
      </h3>

      {/* category */}
      <p className="mt-3 text-sm uppercase tracking-[0.18em] text-[#7b2d4b]">
        {project.category}
      </p>

      {/* description */}
      <p className="mt-6 max-w-md text-[15px] leading-7 text-[#5f4b55]">
        {project.description}
      </p>

      {/* button */}
      <div className="mt-10 flex items-center gap-2 text-sm font-medium text-[#7b2d4b] transition group-hover:translate-x-1">
        View Case Study <span>↗</span>
      </div>
    </motion.article>
    </Link>
  );
}