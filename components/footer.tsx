import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-[#788668] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Journeys of Hope</h3>
            <p className="text-white/80 leading-relaxed">
              Understanding Immigration through education, awareness, and dialogue.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Event Details</h4>
            <p className="text-white/80">April 2-3, 2025</p>
            <p className="text-white/80">Wanamaker</p>
            <p className="text-white/80">Principia College</p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Our Values</h4>
            <p className="text-white/80">Welcoming • Empathy</p>
            <p className="text-white/80">Warmth • Unity</p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/20 text-center">
          <p className="text-white/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#F2D497] fill-[#F2D497]" /> at Principia College
          </p>
          <p className="text-white/60 text-sm mt-2">© 2026 Principia PAC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
