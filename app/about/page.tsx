import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AboutUsSection from "@/components/ui/about-us-section"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Globe, Users, Mic2 } from "lucide-react"
import Image from "next/image"

const pastPACspeakers = [
  "Vincent Stanley (Author of The Responsible Company)",
  "David Miller (former president of World Wildlife Fund Canada)",
  "Shiza Shahid (founder of The Malala Fund)",
]

const pastPrincipiaSpeakers = [
  "Doris Kearns Goodwin",
  "Vincente Fox",
  "Barack Obama",
  "Margaret Thatcher",
  "George H.W. Bush",
  "Jimmy Carter",
  "Colin Powell",
  "Henry Kissinger",
  "James Baker",
  "Oscar Arias",
  "Coretta Scott King",
  "Wangari Maathai",
  "Muhammad Yunus",
  "Wole Soyinka",
  "Madeleine Albright",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F8F4EC]">
      <Header />

      <AboutUsSection />

      {/* About Principia College */}
      <section id="principia" className="py-16 md:py-20 px-4 bg-[#D9A87E]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-[#788668]/10 rounded-3xl transform -rotate-3"></div>
              <Image
                src="https://content.principia.edu/sites/pac2025/files/2023/01/Capture-de%CC%81cran-2023-01-18-a%CC%80-13.03.01-1024x791.png"
                alt="Principia College campus overlooking Mississippi River"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-lg object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#788668]/10 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-[#788668]" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">About Principia College</h2>
              </div>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                Principia is a century-old, co-educational, four-year liberal arts institution set on the bluffs
                overlooking the Mississippi River, in <span className="font-semibold">Elsah, Illinois</span>.
              </p>
              <p className="text-[#5C5C5C] text-lg leading-relaxed mb-6">
                Principia College places a strong emphasis on educating its students to be{" "}
                <span className="font-semibold text-[#788668]">active global citizens</span>.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">~350</p>
                  <p className="text-sm text-[#5C5C5C]">Students</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">40+</p>
                  <p className="text-sm text-[#5C5C5C]">States</p>
                </div>
                <div className="text-center p-4 bg-white/60 rounded-xl">
                  <p className="text-3xl font-bold text-[#D9A87E]">30+</p>
                  <p className="text-sm text-[#5C5C5C]">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distinguished Speakers at Principia */}
      <section className="py-16 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#A3C2B8]/20 flex items-center justify-center">
              <Users className="w-6 h-6 text-[#788668]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">Distinguished Speakers at Principia</h2>
          </div>
          <p className="text-[#5C5C5C] text-lg mb-8 max-w-3xl">
            Over the many years, Principia has hosted many distinguished speakers at its convocation ceremonies,
            including:
          </p>
          <div className="flex flex-wrap gap-3">
            {pastPrincipiaSpeakers.map((speaker, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white border border-[#E5DED3] rounded-full text-[#3D3D3D] font-medium hover:bg-[#788668]/5 transition-colors"
              >
                {speaker}
              </span>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
