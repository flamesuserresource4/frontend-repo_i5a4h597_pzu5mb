import { Sparkles, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-medium text-sky-700">
              <Sparkles className="h-3.5 w-3.5" /> Modern • Gentle • Precise
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Dentistry that looks epic and feels effortless
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Experience a new era of dental care. Digital diagnostics, same‑day crowns, and smile design powered by cutting‑edge tech — delivered by a team that genuinely cares.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#book" className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-sm hover:from-sky-700 hover:to-cyan-600">
                Book an Appointment
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-6 py-3 text-base font-semibold text-gray-700 hover:border-sky-300 hover:text-sky-700">
                Explore Services
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-sky-600"/> Same‑day crowns</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-sky-600"/> Pain‑free anesthesia</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-sky-600"/> Invisalign & veneers</div>
              <div className="flex items-center gap-2 text-gray-700"><CheckCircle2 className="h-5 w-5 text-sky-600"/> 3D digital scans</div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1600&auto=format&fit=crop" alt="Dental care" className="w-full h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-600/10 to-cyan-500/10" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4 w-56">
              <p className="text-sm font-semibold text-gray-900">Patient Comfort Score</p>
              <p className="text-3xl font-extrabold text-sky-600">9.8/10</p>
              <p className="text-xs text-gray-500">Based on 1,200+ reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
