import { Heart, Users, Globe, MessageCircle } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Empathy",
    description: "We stand with immigrants who approach life with fear, love, and hope.",
  },
  {
    icon: Users,
    title: "Unity",
    description: "Building bridges and fostering understanding within our community.",
  },
  {
    icon: Globe,
    title: "Awareness",
    description: "Highlighting the importance of immigration in shaping our interconnected world.",
  },
  {
    icon: MessageCircle,
    title: "Dialogue",
    description: "Creating spaces for meaningful conversations about immigrants' rights.",
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-6 text-balance">
            Journeys of Hope: Understanding Immigration
          </h2>
          <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed text-pretty">
            Join America&apos;s oldest student-led conference. For over 75 years, Principia&apos;s Public Affairs
            Conference has convened leading voices on the most urgent issues of our time. This year, we examine
            immigration through the lens of humanity, hope, and the search for home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="p-8 rounded-2xl bg-[#F8F4EC] hover:bg-[#F2D497]/30 transition-colors group">
              <div className="w-14 h-14 rounded-full bg-[#788668] flex items-center justify-center mb-6 group-hover:bg-[#D9A87E] transition-colors">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#3D3D3D] mb-3">{value.title}</h3>
              <p className="text-[#5C5C5C] leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 md:p-12 rounded-3xl bg-[#788668]/10 border border-[#788668]/20">
          <p className="text-xl md:text-2xl text-center text-[#3D3D3D] italic leading-relaxed text-pretty">
            "Through PAC, we aim to highlight the importance of immigration in shaping a globally interconnected world."
          </p>
        </div>
      </div>
    </section>
  )
}
