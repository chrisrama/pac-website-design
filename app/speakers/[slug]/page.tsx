import Link from "next/link"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, ArrowRight } from "lucide-react"
import { getSpeakerBySlug, speakers } from "@/lib/speakers"
import { getAssetPath } from "@/lib/utils"

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }))
}

export default async function SpeakerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const speaker = getSpeakerBySlug(slug)

  if (!speaker) {
    notFound()
  }

  const sessionDisplay = speaker.sessionRole
    ? `${speaker.sessionRole} – ${speaker.sessionTime}`
    : speaker.sessionTime

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24 pb-20 md:pb-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Button variant="ghost" asChild className="text-[#788668] hover:text-[#6a7659]">
              <Link href="/#speaker" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Speakers
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F2D497]/30 shadow-lg">
                <img
                  src={
                    speaker.image.startsWith("http")
                      ? speaker.image
                      : getAssetPath(speaker.image)
                  }
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top "
                />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-[#3D3D3D] mb-4">
                  {speaker.name}
                </h1>
                <div className="flex items-center gap-2 text-[#788668] font-medium">
                  <Clock className="w-5 h-5 flex-shrink-0" />
                  <span>{sessionDisplay}</span>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#3D3D3D] mb-3">About</h2>
                <p className="text-lg text-[#5C5C5C] leading-relaxed">
                  {speaker.shortBio}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F8F4EC] border border-[#788668]/20">
                <h2 className="text-xl font-bold text-[#3D3D3D] mb-3">
                  What to expect
                </h2>
                <p className="text-[#5C5C5C] leading-relaxed">{speaker.whatToExpect}</p>
              </div>

              <Button asChild size="lg" className="bg-[#788668] hover:bg-[#6a7659] text-white gap-2">
                <Link href="/register">
                  Register for the conference
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
