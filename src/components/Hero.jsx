import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold tracking-tight"
          >
            Designing playful, modern experiences that feel effortless
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-slate-600 max-w-xl"
          >
            I’m a UX designer blending research, strategy, and delightful motion to craft digital products people love to use.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#work" className="pointer-events-auto inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm hover:opacity-90 transition">See Selected Work</a>
            <a href="#contact" className="pointer-events-auto inline-flex items-center rounded-full border border-slate-300 px-6 py-3 text-sm hover:bg-white transition">Get in Touch</a>
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
