import { motion } from 'framer-motion'

export default function ProjectCard({ title, description, tags, cover, link, index }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition-shadow"
    >
      <div className="aspect-[16/10] w-full bg-gradient-to-tr from-fuchsia-100 via-violet-100 to-blue-100" />
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-xs text-slate-500">Case study →</span>
        </div>
        <p className="mt-2 text-slate-600 text-sm">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.map((t) => (
            <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{t}</span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}
