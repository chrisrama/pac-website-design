import Link from "next/link"
import { Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getAssetPath } from "@/lib/utils"
import { EVENT_SCHEDULE } from "@/lib/constants"

export function EventDetails() {
  return (
    <section id="event" className="py-20 md:py-32 bg-[#F2D497]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">Join Us</h2>
          <p className="text-lg text-[#5C5C5C] mb-6">Be part of this meaningful dialogue</p>
          <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
            <Link href="/register">Register Now</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#D9A87E] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Date</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">April 2-3, 2025</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#788668] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Location</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">Wannamaker</p>
                  <p className="text-[#5C5C5C]">Principia College</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-none shadow-lg">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#A3C2B8] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#788668] font-medium">Duration</p>
                  <p className="text-xl font-bold text-[#3D3D3D]">Two-Day Event</p>
                  <p className="text-[#5C5C5C]">Panels, stories, and discussions</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[400px] lg:min-h-[420px] rounded-3xl overflow-hidden">
            <img
              src={getAssetPath("211203_MarlainaMarthisen_BK-41.jpg")}
              alt="Wannamaker building at Principia College"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3D3D3D]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white text-xl font-bold">Principia College</p>
              <p className="text-white/80">Elsah, Illinois</p>
            </div>
          </div>
        </div>

        {/* Schedule - full width below for better balance and readability */}
        <Card className="mt-8 bg-white border-none shadow-lg">
          <CardContent className="p-8">
            <p className="text-lg font-semibold text-[#788668] mb-6">Schedule</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {EVENT_SCHEDULE.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-1 p-4 rounded-xl bg-[#F8F4EC]/50"
                >
                  <div className="font-semibold text-[#3D3D3D] text-base">{item.speaker}</div>
                  <div className="text-[#5C5C5C] text-sm">
                    {item.day}
                  </div>
                  <div className="text-[#788668] font-medium text-sm">
                    {item.time}
                    {item.role ? ` · ${item.role}` : ""}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
