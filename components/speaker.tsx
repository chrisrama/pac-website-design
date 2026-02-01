"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Mic, Scale, ChevronLeft, ChevronRight, ExternalLink, Clock } from "lucide-react"
import { useState } from "react"
import { getAssetPath } from "@/lib/utils"

const speakers = [
  {
    name: "Lauren Blodgett",
    title: "Executive Director & Founder at The Brave House",
    image: "/SpeakersHeadshots/Blodgett-Lauren.jpg",
    badges: [
      { label: "Immigration Attorney", icon: Scale, color: "bg-[#788668]" },
      { label: "TEDx Speaker", icon: Mic, color: "bg-[#D9A87E]" },
      { label: "Forbes 30 Under 30", icon: Award, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Lauren Blodgett is a human rights and immigration attorney dedicated to protecting and advocating for vulnerable communities. As the founder of The Brave House, she has created safe spaces and resources for those seeking refuge and a new beginning.",
    achievements: [
      "Forbes 30 Under 30 for Law and Policy",
      "TEDx Speaker on Immigration Rights",
      "Human Rights & Immigration Attorney",
    ],
    featuredBadge: "Forbes 30 Under 30",
    sessionTime: "Friday, April 3 · 3:10–4:20 PM",
    sessionRole: null,
  },
  {
    name: "Tanya Golash-Boza",
    title: "Executive Director, UC Washington Center; Professor of Sociology, UC Merced",
    image: "/SpeakersHeadshots/Golash-Boza.jpg",
    badges: [
      { label: "Sociologist", icon: Award, color: "bg-[#788668]" },
      { label: "TED Speaker", icon: Mic, color: "bg-[#D9A87E]" },
      { label: "Public Scholar", icon: Scale, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Tanya Golash-Boza is an American sociologist and executive director of the University of California Washington Center, where she leads academic and public-facing programs that connect UC students with policy and research in Washington, D.C. She is also a Professor of Sociology at the University of California, Merced, a TED speaker on race and immigration, and founder of the Racism, Capitalism, and the Law Lab, which investigates how legal and economic systems reproduce racial inequality. A Washington, D.C. native fluent in French, Spanish, and Portuguese, she is also a widely sought public scholar and speaker, contributing to outlets such as Al Jazeera, The Nation, and The Chronicle of Higher Education, and mentoring a new generation of scholars and advocates working at the intersection of race, capitalism, and law.",
    achievements: [
      "Distinguished Early Career Award from the American Sociological Association's Section on Racial and Ethnic Minorities",
      "Multiple University of California awards for distinguished scholarly public service and excellence in faculty mentorship",
      "Leadership roles in major academic diversity and equity committees",
      "Sought-after public scholar (Al Jazeera, The Nation, The Chronicle of Higher Education)",
    ],
    featuredBadge: "TED Speaker",
    tedTalkUrl: "https://youtu.be/eakUZX-pRCQ?si=eRLWYv4NZHm1kAKg",
    sessionTime: "Friday, April 3 · 1:00–2:00 PM",
    sessionRole: null,
  },
  {
    name: "Laurie Vázquez Scolari",
    title: "Vice President of Student Services, Foothill College",
    image: "/SpeakersHeadshots/LaurieScolari.jpg",
    badges: [
      { label: "Higher Education", icon: Award, color: "bg-[#788668]" },
      { label: "Equity Strategist", icon: Scale, color: "bg-[#D9A87E]" },
      { label: "First-Gen Advocate", icon: Mic, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Laurie Vázquez Scolari is a Latina higher-education speaker, leader and equity strategist whose personal journey from the lettuce fields of California's Salinas Valley to the college vice presidency shows her commitment to first-generation students and communities of color. Her career spans roles as Dean and Associate Dean of Counseling and Student Support at City College of San Francisco and leadership positions at UC Santa Cruz, the California Community College system, and the City and School District of San Francisco, where she has led cross-sector initiatives to improve college access and success for students of color.",
    achievements: [
      "Vice President of Student Services, Foothill College, leading college-wide equity and student success initiatives",
      "Over two decades of leadership across community colleges and universities, including City College of SF and UC Santa Cruz",
      "Founder of \"Hoop Talk with Laurie,\" a storytelling and speaking platform centering first-generation, Latinx, and women-of-color leadership",
      "Contributor to state- and city-level equity efforts, including SF's Our Children, Our Families Council and California's Recovery with Equity initiative",
    ],
    featuredBadge: "Equity Strategist",
    sessionTime: "Friday, April 3 · 2:20–3:10 PM",
    sessionRole: null,
  },
  {
    name: "Francisco Cantú",
    title: "Writer, Author; Assistant Professor of Creative Writing, University of Arizona",
    image: "/SpeakersHeadshots/2148466-3.jpeg",
    badges: [
      { label: "Author", icon: Scale, color: "bg-[#788668]" },
      { label: "Former Border Patrol", icon: Award, color: "bg-[#D9A87E]" },
      { label: "Scholar", icon: Mic, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Francisco Cantú is a writer, translator, and former U.S. Border Patrol agent whose work examines the human realities and violence of the U.S.–Mexico border. He is the author of the acclaimed memoir The Line Becomes a River: Dispatches from the Border, a New York Times bestseller that won the 2018 Los Angeles Times Book Prize and was a finalist for the National Book Critics Circle Award in nonfiction. His essays and translations have appeared in The New Yorker, The New York Review of Books, Granta, Guernica, n+1, and Best American Essays, as well as on This American Life. He lives in Tucson, Arizona, where he is an assistant professor of creative writing at the University of Arizona and co-coordinates both the Field Studies in Writing Program and the DETAINED archive.",
    achievements: [
      "Author of The Line Becomes a River: Dispatches from the Border, a New York Times bestseller translated into multiple languages",
      "Winner of the 2018 Los Angeles Times Book Prize for Current Interest and finalist for the National Book Critics Circle Award in nonfiction",
      "Recipient of major literary honors: Whiting Award, Pushcart Prize, Fulbright fellowship, Art for Justice fellowship, Luis Leal Award for Distinction in Chicano/Latino Literature",
      "Co-coordinator of Field Studies in Writing Program and the DETAINED archive at University of Arizona",
    ],
    featuredBadge: "NYT Bestseller",
    sessionTime: "Thursday, April 2 · 7:30–8:30 PM",
    sessionRole: "Opening Speaker",
  },
  {
    name: "Dr. Lola Adeyemo",
    title: "Founder & CEO of EQImindset; Leader of Immigrants in Corporate Inc.",
    image: "/SpeakersHeadshots/1735697581947.jpeg",
    badges: [
      { label: "DEI Leader", icon: Scale, color: "bg-[#788668]" },
      { label: "TEDx Speaker", icon: Mic, color: "bg-[#D9A87E]" },
      { label: "Author", icon: Award, color: "bg-[#A3C2B8] text-[#3D3D3D]" },
    ],
    bio: "Dr. Lola Adeyemo is a Nigerian-American immigrant, founder & CEO of EQImindset, and leader of Immigrants in Corporate Inc., a nonprofit advancing workplace inclusion for immigrants and first-generation professionals. With a doctorate in Organizational Leadership (2025), biochemistry training, and 13+ years in biotechnology and life sciences, Lola consults on Employee Resource Groups (ERGs), DEI strategy, and inclusive leadership across North America, Europe, and Asia. She authored Thriving in Intersectionality: Immigrants, Belonging, and Corporate America and hosts the Thriving in Intersectionality podcast to amplify underrepresented voices in corporate spaces.",
    achievements: [
      "San Diego Business Journal and SD Metro 40 Under 40 honoree; 2024 Women in Business Awardee for workplace inclusion impact",
      "TEDx speaker and international keynote on immigrant identity, allyship, and belonging; featured on Beautiful Journey podcast and Innovation Women",
      "Author of Thriving in Intersectionality: Immigrants, Belonging, and Corporate America",
      "Co-founder/COO of Sapient Logic LLC, delivering IT solutions for DoD and healthcare clients",
    ],
    featuredBadge: "TEDx Speaker",
    tedTalkUrl: "https://youtu.be/abfhtWPOya4?si=M9C-7ae8Bk10jM43",
    sessionTime: "Friday, April 3 · 7:30–8:30 PM",
    sessionRole: "Keynote Speaker",
  },
]

export function Speaker() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? speakers.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === speakers.length - 1 ? 0 : prev + 1))
  }

  const speaker = speakers[currentIndex]

  return (
    <section id="speaker" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3D3D3D] mb-4 text-balance">
            Guest Speakers
          </h2>
          <p className="text-lg text-[#5C5C5C] mb-6">Hear from leading voices in immigration advocacy</p>
          <Button asChild className="bg-[#788668] hover:bg-[#788668]/90 text-white px-8 py-3">
            <a href="/register">Register Now</a>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -ml-4 md:-ml-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full bg-white/90 border-[#E5DED3] hover:bg-[#F2D497] hover:border-[#D9A87E] h-12 w-12 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6 text-[#3D3D3D]" />
              <span className="sr-only">Previous speaker</span>
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 -mr-4 md:-mr-6">
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full bg-white/90 border-[#E5DED3] hover:bg-[#F2D497] hover:border-[#D9A87E] h-12 w-12 shadow-lg"
            >
              <ChevronRight className="h-6 w-6 text-[#3D3D3D]" />
              <span className="sr-only">Next speaker</span>
            </Button>
          </div>

          {/* Speaker content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 md:px-12">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#F2D497]/30">
                <img
                  src={speaker.image ? (speaker.image.startsWith('http') ? speaker.image : getAssetPath(speaker.image)) : getAssetPath("/placeholder.svg")}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#788668] rounded-full flex items-center justify-center">
                <span className="text-white text-center text-sm font-medium px-4">{speaker.featuredBadge}</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                {speaker.badges.map((badge, index) => (
                  <Badge key={index} className={`${badge.color} text-white hover:opacity-90`}>
                    <badge.icon className="w-3 h-3 mr-1" />
                    {badge.label}
                  </Badge>
                ))}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-[#3D3D3D]">{speaker.name}</h3>

              <p className="text-xl text-[#788668] font-medium">{speaker.title}</p>

              {"sessionTime" in speaker && speaker.sessionTime && (
                <div className="flex items-center gap-2 text-[#788668] font-medium">
                  <Clock className="w-5 h-5" />
                  <span>
                    {speaker.sessionTime}
                    {"sessionRole" in speaker && speaker.sessionRole && ` · ${speaker.sessionRole}`}
                  </span>
                </div>
              )}

              <p className="text-lg text-[#5C5C5C] leading-relaxed">{speaker.bio}</p>

              <div className="pt-4 border-t border-[#E5DED3]">
                <p className="text-[#5C5C5C] mb-4">Recognition & Achievements:</p>
                <ul className="space-y-2">
                  {speaker.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-center gap-2 text-[#3D3D3D]">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          index === 0 ? "bg-[#788668]" : index === 1 ? "bg-[#D9A87E]" : "bg-[#A3C2B8]"
                        }`}
                      />
                      {achievement}
                    </li>
                  ))}
                </ul>
                {"tedTalkUrl" in speaker && speaker.tedTalkUrl && (
                  <a
                    href={speaker.tedTalkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-lg bg-[#788668] text-white font-medium hover:bg-[#5f6d52] transition-colors"
                  >
                    <Mic className="w-4 h-4" />
                    Watch TED Talk
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-12">
            {speakers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#788668]" : "bg-[#E5DED3] hover:bg-[#D9A87E]"
                }`}
                aria-label={`Go to speaker ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
