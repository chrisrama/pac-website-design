import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={getAssetPath("/diverse-hands-holding-together-unity-warmth-golden.jpg")}
          alt="Diverse community coming together in unity"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: transparent on left for image, darkens toward right for text */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D3D3D]/30 via-[#3D3D3D]/50 to-[#3D3D3D]/85 md:from-[#3D3D3D]/10 md:via-[#3D3D3D]/40 md:to-[#3D3D3D]/90" />
        {/* Bottom gradient for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8F4EC] via-transparent to-transparent h-full" style={{ top: "80%" }} />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center min-h-[calc(100vh-5rem)]">
          {/* Spacer for left side (image shows through) */}
          <div className="hidden md:block md:w-1/2" />

          {/* Right side text overlay */}
          <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
            {/* Eyebrow text */}
            <p className="text-[#F2D497] font-medium text-sm md:text-base tracking-wide uppercase mb-6">
              {"America's Oldest Student-Led Conference"} &bull; Est. 1939
            </p>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Journeys of Hope
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#F8F4EC]/90 max-w-lg mb-8 leading-relaxed text-pretty">
              Five voices. Two days. One urgent question: What does it mean to search for home in America?
            </p>

            {/* Date / Location info */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-1 h-12 bg-[#D9A87E] rounded-full" />
              <div>
                <p className="text-white font-semibold text-base md:text-lg">April 2 &ndash; 3, 2025</p>
                <p className="text-[#F8F4EC]/70 text-sm md:text-base">Principia College &bull; Free Admission</p>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-[#D9A87E] hover:bg-[#c9956b] text-white px-8 py-6 text-lg rounded-full gap-2 group"
            >
              <Link href="/register">
                Register Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
