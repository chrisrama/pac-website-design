export type Speaker = {
  slug: string
  name: string
  image: string
  sessionTime: string
  sessionRole: string | null
  shortBio: string
  whatToExpect: string
}

export const speakers: Speaker[] = [
  {
    slug: "francisco-cantu",
    name: "Francisco Cantú",
    image: "/SpeakersHeadshots/Francisco.png",
    sessionTime: "Thursday, April 2 • 7:30–8:30 PM",
    sessionRole: null,
    shortBio:
      "Former U.S. Border Patrol agent turned acclaimed author. His memoir The Line Becomes a River offers a rare insider's perspective on border enforcement, blending personal experience with profound moral reckoning. Cantú's work has appeared in The New York Times, Harper's, and The Guardian.",
    whatToExpect:
      "A raw, honest examination of what it means to enforce immigration policy on the ground, and the human cost of the border.",
  },
  {
    slug: "tanya-golash-boza",
    name: "Dr. Tanya Golash-Boza",
    image: "/SpeakersHeadshots/Tanya.png",
    sessionTime: "Friday, April 3 • 1:00–2:00 PM",
    sessionRole: null,
    shortBio:
      "Professor of Sociology at UC Merced and leading scholar on deportation and immigration policy. Author of Deported: Immigrant Policing, Disposable Labor, and Global Capitalism and Race and Racisms: A Critical Approach. Dr. Golash-Boza has interviewed hundreds of deportees across three continents.",
    whatToExpect:
      "Data-driven insights into mass deportation's impact on families and communities, grounded in years of field research.",
  },
  {
    slug: "laurie-vazquez-scolari",
    name: "Laurie Vázquez Scolari",
    image: "/SpeakersHeadshots/Laurie.png",
    sessionTime: "Friday, April 3 • 2:20–3:10 PM",
    sessionRole: null,
    shortBio:
      "Immigration attorney and advocate with over a decade of experience representing asylum seekers, DACA recipients, and families facing separation. Vázquez Scolari brings frontline experience from the legal battles that determine who stays and who goes.",
    whatToExpect:
      "Real stories from the legal trenches, and what's at stake when immigration is a courtroom decision.",
  },
  {
    slug: "lauren-blodgett",
    name: "Lauren Blodgett",
    image: "/SpeakersHeadshots/Lauren.png",
    sessionTime: "Friday, April 3 • 3:10–4:20 PM",
    sessionRole: null,
    shortBio:
      "Activist, organizer, and educator working at the intersection of immigration justice and youth empowerment. Blodgett has led workshops across the country helping young people find their voice in advocacy and policy change.",
    whatToExpect:
      "Practical strategies for turning concern into action, and how students can influence immigration policy.",
  },
  {
    slug: "lola-adeyemo",
    name: "Dr. Lola Adeyemo",
    image: "/SpeakersHeadshots/Lola.png",
    sessionTime: "Friday, April 3 • 7:30–8:30 PM",
    sessionRole: "Keynote Speaker",
    shortBio:
      "Scholar, storyteller, and expert on immigrant identity and belonging. Dr. Adeyemo's research examines how immigrant communities build home in new lands while maintaining connections to their heritage. Her work bridges academic research with deeply personal narrative.",
    whatToExpect:
      "A powerful closing keynote on what \"home\" means when you carry it across borders—and how we can build a more welcoming America.",
  },
]

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return speakers.find((s) => s.slug === slug)
}
