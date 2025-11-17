import { ScanLine, Sparkles, Tooth, Smile, Syringe, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Tooth,
    title: 'Comprehensive Exams',
    desc: 'Thorough evaluations with digital x‑rays and 3D imaging for precise treatment plans.',
  },
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    desc: 'Invisalign, veneers, and whitening — custom‑designed smiles that look naturally flawless.',
  },
  {
    icon: ScanLine,
    title: 'Same‑Day Crowns',
    desc: 'CEREC technology crafts perfect crowns in a single visit. No temporaries. No hassle.',
  },
  {
    icon: Syringe,
    title: 'Gentle Care',
    desc: 'Comfort‑first approach with pain‑free anesthesia and relaxation options.',
  },
  {
    icon: ShieldCheck,
    title: 'Implants & Restorations',
    desc: 'Durable, natural‑looking implants and restorations with guided surgery.',
  },
  {
    icon: Sparkles,
    title: 'Preventive Care',
    desc: 'Cleanings, sealants, and fluoride to keep your smile bright and healthy.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Advanced care, stunning results</h2>
          <p className="mt-3 text-gray-600">We blend artistry with leading technology to deliver dentistry that’s as beautiful as it is precise.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white hover:border-sky-300 hover:shadow-lg transition-all">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 text-white grid place-items-center shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
