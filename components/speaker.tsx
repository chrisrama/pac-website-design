"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TestimonialSection } from "@/components/ui/testimonials"
import { speakers } from "@/lib/speakers"
import { getAssetPath } from "@/lib/utils"

const testimonialsFromSpeakers = speakers.map((speaker, index) => ({
  id: index + 1,
  quote: speaker.shortBio,
  name: speaker.name,
  role: speaker.sessionRole
    ? `${speaker.sessionRole} – ${speaker.sessionTime}`
    : speaker.sessionTime,
  imageSrc: speaker.image.startsWith("http")
    ? speaker.image
    : getAssetPath(speaker.image),
  slug: speaker.slug,
}))

export function Speaker() {
  return (
    <div id="speaker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-8">
        <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
          <Link href="/register">Register Now</Link>
        </Button>
      </div>
      <TestimonialSection
        title="Guest Speakers"
        subtitle="Hear from leading voices in immigration advocacy"
        testimonials={testimonialsFromSpeakers}
      />
    </div>
  )
}
