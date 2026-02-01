export interface TeamMember {
  name: string
  slug: string
  title: string
  class: string
  majors: string
  minors?: string
  hometown: string
  image: string
  bio: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Saray Hernandez Cisneros",
    slug: "saray-hernandez-cisneros",
    title: "Executive director",
    class: "Senior",
    majors: "Global Studies and Sociology & Anthropology",
    hometown: "Xicotepec de Juarez, Puebla Mexico",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/32804279.jpg",
    bio: "Social change starts when we take the lead and start realizing there is more to life beyond ourselves. As a Mexican, the ethnicity with most immigrants in the United States, I felt there was a need for me to step outside my privilege and help educate people on immigration issues that my community is being affected on. There is a need for our society to realize that we live in an interconnected world. Being a global citizen involves empathizing, educating yourself and others, and raising awareness about the impact you make at a global scale. That's why I chose to direct PAC",
  },
  {
    name: "Maria Keller",
    slug: "maria-keller",
    title: "Co-Director of Speakers",
    class: "Junior",
    majors: "Global Studies and Educational Studies",
    minors: "Sustainability, Sociology & Anthropology, and Religious Studies",
    hometown: "Lüneburg, Germany",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/86598043.jpg",
    bio: "Education and knowledge are key drivers of inclusion, acceptance, and critical thinking. Being a part of PAC allows me to be a part of building a community that provides room for this and to help people understand and see experiences other than their own.",
  },
  {
    name: "Julian Hawke",
    slug: "julian-hawke",
    title: "Director of Logistics",
    class: "Sophomore",
    majors: "Global Studies, Sustainability",
    minors: "Ecology, Sociology & Anthropology",
    hometown: "Grecia, Alajuela, Costa Rica",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/66031342.jpg",
    bio: '"We choose to go to the moon and do the other things not because they are easy but because they are hard." This quote is from a speech given by President John F. Kennedy at Rice University (1962), and it is his famous challenge to the nation to achieve the goal of landing a man on the moon. I choose to be on PAC this semester to again challenge the nation - to challenge our beliefs and to grow past our biases and comfort; a challenge not to be on a particular side, but to come together as one nation comprised of many unique individuals.',
  },
  {
    name: "Mayah Kashmira Campagna",
    slug: "mayah-campagna",
    title: "Co-Director of Speakers",
    class: "Sophomore",
    majors: "Global Studies, Education",
    hometown: "Toronto, Canada",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/_Replacement_Files/20240828193359750991me.jpeg",
    bio: "PAC is important to me because.",
  },
  {
    name: "Francisco Alessio",
    slug: "francisco-alessio",
    title: "Treasurer",
    class: "Senior",
    majors: "Finance and Economics",
    hometown: "Balcarce, Buenos Aires, Argentina",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/31415511.jpg",
    bio: "I am a part of PAC because immigration is personal to me, it's my story. I grew up in Balcarce, Argentina, and at thirteen I decided to leave home and pursue a new life in the United States. After years of challenges and persistence, I earned a scholarship to Principia, and that experience taught me that we are not just citizens of one country but of a larger, connected world. I care about this conference because immigration is not just policy, it's indeed people, sacrifice, and hope. Through my journey and what I've learned at Principia, I've seen how diverse stories create understanding and community.This conference will show that empathy and connection can be strengthened with a new approach, one that listens to and values immigrant voices. That's why I'm part of PAC.",
  },
  {
    name: "Ronnie Ochieng",
    slug: "ronnie-ochieng",
    title: "Co-director",
    class: "Sophomore",
    majors: "Global Studies and Business",
    hometown: "Migori, Kenya",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/64483400.jpg",
    bio: "I am a part of PAC because I want to help create conversations that are meaningful, informed, respectful and grounded in real experiences of humans. Being able to bring attention to events occurring around us and helping create spaces for different perspectives to learn from each other and be acknowledged.",
  },
  {
    name: "Christian Ramazani",
    slug: "christian-ramazani",
    title: "Co-director",
    class: "Sophomore",
    majors: "Computer Science and Economics",
    hometown: "Cape Town, South Africa",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/86756220.jpg",
    bio: "I am part of PAC because I help to share the message of values immigrants have created in order for people to understand better why immigration is a good thing.",
  },
  {
    name: "Agatha Nakalembe",
    slug: "agatha-nakalembe",
    title: "Co-Director of Publications",
    class: "Freshman",
    majors: "Business & Global Studies",
    hometown: "Kampala, Uganda",
    image: "https://prinweb.principia.edu/phone/new_faces_pictures/Andover_Extract_Files/98558631.jpg",
    bio: "I'm part of PAC because I love what it stands for/objective and I want to be part of something that positively makes an impact on people.",
  },
]

// Helper function to find member by slug
export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug)
}

// Helper function to generate slug from name (for future use)
export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
}
