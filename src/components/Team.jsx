import { Users } from 'lucide-react'

const team = [
  { name: 'Dr. Ava Bennett', role: 'Cosmetic & Restorative Dentist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Dr. Liam Carter', role: 'Implant Specialist', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Emily Chen, RDH', role: 'Hygienist', img: 'https://images.unsplash.com/photo-1544717305-996b815c338c?q=80&w=1600&auto=format&fit=crop' },
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Meet the people behind your smile</h2>
          <div className="hidden sm:flex items-center gap-2 text-sky-700"><Users className="h-5 w-5"/> Board‑certified experts</div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <p className="font-semibold text-gray-900">{m.name}</p>
                <p className="text-sm text-gray-600">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
