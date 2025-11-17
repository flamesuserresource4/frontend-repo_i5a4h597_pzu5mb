import { MapPin, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-sky-500 to-cyan-400" />
              <p className="text-lg font-semibold text-gray-900">Aurora Dental</p>
            </div>
            <p className="mt-3 text-sm text-gray-600">Modern, gentle dentistry in the heart of the city. New patients welcome.</p>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> 227 Smile Ave, Suite 12</div>
            <a href="mailto:hello@auroradental.com" className="flex items-center gap-2 hover:text-sky-700"><Mail className="h-4 w-4"/> hello@auroradental.com</a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-sky-700"><Phone className="h-4 w-4"/> (123) 456-7890</a>
          </div>
          <div className="text-sm text-gray-500 md:text-right">© {new Date().getFullYear()} Aurora Dental. All rights reserved.</div>
        </div>
      </div>
    </footer>
  )
}
