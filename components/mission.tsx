import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logos3 } from "@/components/ui/logos3"

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-6 text-balance">
            Journeys of Hope: Understanding Immigration
          </h2>
          <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed text-pretty mb-8">
            For over 75 years, Principia&apos;s Public Affairs
            Conference has convened leading voices on the most urgent issues of our time. This year, we examine
            immigration through the lens of humanity, hope, and the search for home.
          </p>
          <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>
        <Logos3/>

      </div>
    </section>
  )
}
