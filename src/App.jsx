import { useState } from 'react'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500"></div>
              <span className="font-semibold text-lg">OnePager</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors">Get Started</a>
            </nav>
            <button
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-200 text-gray-700"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 py-2"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-center">Get Started</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-indigo-50 to-white">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              A clean, modern one‑page site
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Launch quickly with a simple, beautiful page featuring a hero, features, about, and contact. Fully responsive and fast.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-gray-800">
                Explore Features
              </a>
              <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50">
                Contact Us
              </a>
            </div>
            <div className="mt-6 text-sm text-gray-500">No frameworks to learn—just a polished starting point.</div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 p-1 shadow-xl">
              <div className="h-full w-full rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="mx-auto h-14 w-14 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                      <path d="M11.7 2.3a1 1 0 0 1 1.6 0l8 10A1 1 0 0 1 20.6 14H3.4a1 1 0 0 1-.8-1.7l9.1-10Z"/><path d="M3 16a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3Z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Ready to Impress</h3>
                  <p className="mt-2 text-gray-600">Drop in your branding and copy to go live fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Features</h2>
            <p className="mt-3 text-gray-600">Everything you need in a single, elegant page.</p>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Responsive by default', desc: 'Looks great on phones, tablets, and desktops.' },
              { title: 'Fast & light', desc: 'Minimal, accessible, and optimized.' },
              { title: 'Easy to customize', desc: 'Edit text, colors, and sections in minutes.' },
              { title: 'Built with Tailwind', desc: 'Utility-first styling with clean classes.' },
              { title: 'Anchor navigation', desc: 'Jump to sections smoothly with one click.' },
              { title: 'Modern aesthetics', desc: 'Soft gradients, glass, and subtle shadows.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="h-10 w-10 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d="M12 2a1 1 0 0 1 1 1v7h7a1 1 0 1 1 0 2h-7v7a1 1 0 1 1-2 0v-7H4a1 1 0 1 1 0-2h7V3a1 1 0 0 1 1-1Z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About this template</h2>
            <p className="mt-4 text-gray-600">
              This one‑pager is crafted to help you launch quickly. Swap the text, tweak colors,
              and you have a clean presence ready to share. Keep it simple or extend with more sections.
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">✓</span> Minimal setup, maximum polish</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">✓</span> Flexible layout that grows with you</li>
              <li className="flex items-start gap-3"><span className="mt-1 h-5 w-5 rounded-full bg-green-500/10 text-green-600 flex items-center justify-center">✓</span> Smooth section navigation</li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/3] rounded-2xl border border-gray-200 bg-white shadow-sm flex items-center justify-center p-8">
              <div className="grid grid-cols-3 gap-3 w-full">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="h-16 rounded-xl bg-gradient-to-br from-indigo-100 to-fuchsia-100 border border-white"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Get in touch</h2>
            <p className="mt-3 text-gray-600">Have a question or want to work together? Send a message.</p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              const form = e.currentTarget
              const data = new FormData(form)
              const subject = encodeURIComponent(`Message from ${data.get('name')}`)
              const body = encodeURIComponent(`${data.get('message')}`)
              window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`
              form.reset()
            }}
            className="mt-10 grid gap-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                <input id="name" name="name" type="text" required className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                <input id="email" name="email" type="email" required className="h-11 rounded-lg border border-gray-300 px-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} required className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} OnePager. All rights reserved.</p>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#home" className="hover:text-gray-900">Home</a>
            <a href="#features" className="hover:text-gray-900">Features</a>
            <a href="#about" className="hover:text-gray-900">About</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
