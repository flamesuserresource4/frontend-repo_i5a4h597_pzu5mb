import { Calendar, Phone } from 'lucide-react'

export default function CTA() {
  return (
    <section id="book" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-cyan-500 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready for your best dental visit yet?</h3>
              <p className="mt-3 text-white/90">Call or request an appointment — we’ll take care of the rest.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <a href="tel:+1234567890" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20 ring-1 ring-inset ring-white/30">
                <Phone className="h-4 w-4"/> (123) 456-7890
              </a>
              <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-sky-700 hover:bg-white/90">
                <Calendar className="h-4 w-4"/> Request Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
