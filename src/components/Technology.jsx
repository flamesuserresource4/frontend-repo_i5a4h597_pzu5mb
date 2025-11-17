import { Cpu, Camera, MonitorSmartphone, Radio, Activity } from 'lucide-react'

const tech = [
  { icon: Camera, title: '3D Scanners', desc: 'High‑precision digital impressions — no messy molds.' },
  { icon: Cpu, title: 'CEREC CAD/CAM', desc: 'Design and mill crowns the same day, in‑house.' },
  { icon: MonitorSmartphone, title: 'Digital Smile Design', desc: 'Preview your future smile with realistic simulations.' },
  { icon: Radio, title: 'Low‑Dose Imaging', desc: 'Crystal‑clear diagnostics with minimal radiation.' },
  { icon: Activity, title: 'AI Diagnostics', desc: 'Smarter analysis helps detect issues earlier.' },
]

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Technology that elevates your experience</h2>
            <p className="mt-4 text-gray-600">We invest in tools that make dentistry faster, gentler, and more predictable — so you spend less time in the chair and more time smiling.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {tech.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-gray-200 bg-white p-5 hover:border-sky-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-md bg-sky-600 text-white grid place-items-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{title}</p>
                      <p className="text-sm text-gray-600">{desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img className="rounded-2xl shadow-2xl ring-1 ring-black/5" src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixid=M3w3OTkxMTl8MXwxfHNlYXJjaHwxfHxUZWNobm9sb2d5fGVufDB8MHx8fDE3NjMzNTIwMjh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Technology" />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4 w-60">
              <p className="text-sm font-semibold text-gray-900">Average visit time</p>
              <p className="text-3xl font-extrabold text-sky-600">45 mins</p>
              <p className="text-xs text-gray-500">From check‑in to checkout</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
