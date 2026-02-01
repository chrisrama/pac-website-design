import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { getAssetPath } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${getAssetPath('/diverse-hands-holding-together-unity-warmth-golden.jpg')}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4EC]/90 via-[#F8F4EC]/70 to-[#F8F4EC]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-[#F2D497]/60 rounded-full">
          <span className="text-[#788668] font-medium text-sm md:text-base">
            April 2-3, 2025 • Wannamaker, Principia College
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#3D3D3D] mb-6 leading-tight text-balance">
          Journeys of Hope
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl text-[#788668] font-medium mb-8">Understanding Immigration</p>

        <p className="text-lg md:text-xl text-[#5C5C5C] max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          A Public Awareness Campaign dedicated to sharing immigrant stories, fostering understanding, and building
          bridges within our community.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-[#788668] hover:bg-[#6a7659] text-white px-8 py-6 text-lg rounded-full"
          >
            <a href="#event">Learn More</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#D9A87E] text-[#D9A87E] hover:bg-[#D9A87E] hover:text-white px-8 py-6 text-lg rounded-full bg-transparent"
          >
            <a href="#speaker">Meet Our Speakers</a>
          </Button>
        </div>

        <div className="mt-16 animate-bounce">
          <ArrowDown className="w-8 h-8 text-[#788668] mx-auto" />
        </div>
      </div>
    </section>
  )
}
