import { Menu, Phone, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-gray-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400 shadow-sm" />
            <span className="text-lg font-semibold tracking-tight text-gray-900">Aurora Dental</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#services" className="hover:text-sky-600 transition-colors">Services</a>
            <a href="#technology" className="hover:text-sky-600 transition-colors">Technology</a>
            <a href="#team" className="hover:text-sky-600 transition-colors">Our Team</a>
            <a href="#reviews" className="hover:text-sky-600 transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+1234567890" className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:border-sky-300 hover:text-sky-700 transition-colors">
              <Phone className="h-4 w-4" /> (123) 456-7890
            </a>
            <a href="#book" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:from-sky-700 hover:to-cyan-600 transition-colors">
              <Calendar className="h-4 w-4" /> Book Now
            </a>
          </div>

          <button onClick={() => setOpen(o => !o)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-700">
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2">
              <a href="#services" className="rounded-lg px-3 py-2 hover:bg-gray-50">Services</a>
              <a href="#technology" className="rounded-lg px-3 py-2 hover:bg-gray-50">Technology</a>
              <a href="#team" className="rounded-lg px-3 py-2 hover:bg-gray-50">Our Team</a>
              <a href="#reviews" className="rounded-lg px-3 py-2 hover:bg-gray-50">Reviews</a>
              <a href="#contact" className="rounded-lg px-3 py-2 hover:bg-gray-50">Contact</a>
              <div className="flex items-center gap-2 px-3 py-2 text-gray-700"><MapPin className="h-4 w-4"/> 227 Smile Ave, Suite 12</div>
              <a href="tel:+1234567890" className="flex items-center gap-2 px-3 py-2 text-sky-700 font-semibold"><Phone className="h-4 w-4"/> (123) 456-7890</a>
              <a href="#book" className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-600 to-cyan-500 px-3.5 py-2 text-sm font-semibold text-white">Book Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
