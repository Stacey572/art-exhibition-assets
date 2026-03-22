export interface Artwork {
  id: string;
  title: string;
  image: string;
  seniorName: string;
  artistName: string;
  seniorStory: string;
  artistPerspective: string;
  culturalMeaning: string;
  timeline: { year: string; event: string }[];
  category: string;
}

export interface Event {
  id: string;
  title: string;
  type: 'Guided Tour' | 'Workshop' | 'Artist Talk' | 'Cultural Exchange';
  date: string;
  time: string;
  location: string;
  description: string;
  host: string;
  image: string;
  limit?: number;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Threads of Memory",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/1.JPG",
    seniorName: "Mrs. Somchai, 78",
    artistName: "Li Wei, 24",
    seniorStory: "I remember the silk looms in my village near Chiang Mai. The sound was like a heartbeat. Every pattern told a story of a wedding, a birth, or a harvest. Now, my hands are too stiff to weave, but my mind still sees the colors.",
    artistPerspective: "Working with Mrs. Somchai opened my eyes to the tactile nature of history. We used digital projections of her traditional patterns onto hand-woven hemp, bridging the physical and the virtual.",
    culturalMeaning: "A fusion of traditional Thai silk weaving patterns with contemporary digital light installation.",
    timeline: [
      { year: "1950s", event: "Mrs. Somchai learns weaving from her grandmother." },
      { year: "2024", event: "First meeting between Mrs. Somchai and Li Wei." },
      { year: "2025", event: "Exhibition debut in Bangkok." }
    ],
    category: "Installation Art"
  },
  {
    id: "2",
    title: "Vibrant Echoes",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/2.JPG",
    seniorName: "Mr. Prasert, 82",
    artistName: "Yuki Sato, 26",
    seniorStory: "Life in Bangkok used to be slower, but the colors were always there. The markets, the flowers, the spirit houses. I wanted to paint that energy.",
    artistPerspective: "I was inspired by Mr. Prasert's memories of old Bangkok. We adopted a Fauvist approach—using bold, non-naturalistic colors to express the raw emotion of his youth.",
    culturalMeaning: "Exploring the Fauvist style to represent the vibrant spirit of 1960s Bangkok street life.",
    timeline: [
      { year: "1960s", event: "Mr. Prasert works as a street sign painter in Yaowarat." },
      { year: "2023", event: "Collaboration begins in a quiet studio in Sukhumvit." },
      { year: "2025", event: "Series completed." }
    ],
    category: "Fauvism & Painting"
  },
  {
    id: "3",
    title: "Pop Heritage",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/3.JPG",
    seniorName: "Aunty Malee, 72",
    artistName: "Arjun Das, 22",
    seniorStory: "The advertisements of my youth were so bold. We didn't have much, but everything felt iconic. I kept these old labels for fifty years.",
    artistPerspective: "We took Malee's collection of vintage Thai product labels and transformed them into large-scale Pop Art screens. It's a celebration of everyday consumer culture as heritage.",
    culturalMeaning: "A Pop Art reinterpretation of mid-century Thai commercial design and personal nostalgia.",
    timeline: [
      { year: "1970s", event: "Malee starts her collection of everyday ephemera." },
      { year: "2024", event: "Arjun discovers the collection, sparking the project." },
      { year: "2025", event: "Final piece exhibited." }
    ],
    category: "Pop Art"
  }
];

export const events: Event[] = [
  {
    id: "e1",
    title: "Curator-Led Storytelling Tour",
    type: "Guided Tour",
    date: "March 20, 2026",
    time: "14:00 - 15:30",
    location: "BACC, Gallery 1",
    description: "Join our lead curator for an intimate walk through the exhibition, focusing on the hidden narratives behind each collaboration. Discover how personal memories were translated into contemporary art.",
    host: "Dr. Aranya Vong, Lead Curator",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/4.JPG",
    limit: 20
  },
  {
    id: "e2",
    title: "Intergenerational Weaving Workshop",
    type: "Workshop",
    date: "March 25, 2026",
    time: "10:00 - 13:00",
    location: "BACC, Creative Studio",
    description: "A hands-on session where seniors and youth work together to create a collective textile piece. Learn traditional Thai weaving techniques and share stories while you work.",
    host: "Mrs. Somchai & Young Artists Collective",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/5.JPG",
    limit: 15
  },
  {
    id: "e3",
    title: "Generational Themes in Modern Art",
    type: "Artist Talk",
    date: "April 5, 2026",
    time: "16:00 - 17:30",
    location: "BACC, Auditorium",
    description: "A panel discussion featuring participating artists and their senior mentors. We explore the challenges and rewards of bridging the generational gap through creative practice.",
    host: "Li Wei & Mr. Prasert",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/6.JPG",
    limit: 50
  },
  {
    id: "e4",
    title: "Cross-Asian Cultural Sharing",
    type: "Cultural Exchange",
    date: "April 12, 2026",
    time: "14:00 - 16:00",
    location: "Online (Zoom)",
    description: "An open dialogue session connecting our Bangkok exhibition with participants from across Asia. Share your own family stories and cultural heritage in this digital gathering.",
    host: "International Arts Council",
    image: "https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/7.JPG"
  }
];
