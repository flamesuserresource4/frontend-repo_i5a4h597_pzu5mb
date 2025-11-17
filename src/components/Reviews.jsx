import { Star } from 'lucide-react'

const reviews = [
  { name: 'Sophia', text: 'The most comfortable dental visit I have ever had. The team is amazing and the office is gorgeous.', rating: 5 },
  { name: 'Ethan', text: 'Same‑day crown blew my mind. In and out on my lunch break with a perfect result.', rating: 5 },
  { name: 'Maya', text: 'They explained everything clearly and used the latest tech. I actually look forward to visits now.', rating: 5 },
]

function Stars({ count }) {
  return (
    <div className="flex text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Loved by patients</h2>
          <p className="mt-3 text-gray-600">Real stories from people who trust us with their smiles.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-amber-300 transition-colors">
              <Stars count={r.rating} />
              <p className="mt-3 text-gray-700 leading-relaxed">“{r.text}”</p>
              <p className="mt-4 text-sm font-semibold text-gray-900">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
