import type { MatchPair, QuizQuestion } from "@/types/hardware";

export const quizQuestions: QuizQuestion[] = [
  {
    id: "first-rover",
    kind: "choice",
    prompt: "Which was NASA’s first Mars rover?",
    choices: ["Spirit", "Sojourner", "Curiosity", "Perseverance"],
    answer: "Sojourner",
    explanation:
      "Sojourner arrived with Mars Pathfinder in 1997. Spirit and Opportunity came in 2004. Curiosity landed in 2012. Perseverance landed in 2021.",
    topics: ["mars", "rover", "history"],
  },
  {
    id: "first-lrv",
    kind: "choice",
    prompt: "Which Apollo mission first used a lunar rover?",
    choices: ["Apollo 11", "Apollo 12", "Apollo 15", "Apollo 17"],
    answer: "Apollo 15",
    explanation:
      "Apollo 15 drove NASA’s first lunar rover in 1971. The uncrewed Soviet Lunokhod 1 had already driven on the Moon on November 17, 1970. Apollo 16 and 17 also had NASA rovers. Apollo 11 and 12 did not.",
    topics: ["moon", "history"],
  },
  {
    id: "blueberries",
    kind: "choice",
    prompt: "Which rover found the small hematite stones nicknamed “blueberries,” evidence of ancient water on Mars?",
    choices: ["Sojourner", "Spirit", "Opportunity", "Perseverance"],
    answer: "Opportunity",
    explanation:
      "Opportunity found them at Meridiani Planum. Spirit also found evidence that Mars was once wetter, but the blueberries are Opportunity’s famous clue. They are minerals, not fruit.",
    topics: ["mars", "rover"],
  },
  {
    id: "samples",
    kind: "choice",
    prompt: "Which rover is sealing rock samples that a future mission might bring to Earth?",
    choices: ["Spirit", "Curiosity", "Perseverance", "Sojourner"],
    answer: "Perseverance",
    explanation:
      "Perseverance caches samples in Jezero Crater. They are still on Mars. Curiosity studies powdered rock inside its own laboratory and does not store cores for return.",
    topics: ["mars", "rover"],
  },
  {
    id: "still-gale",
    kind: "choice",
    prompt: "Which rover is still exploring Gale Crater?",
    choices: ["Opportunity", "Spirit", "Curiosity", "Sojourner"],
    answer: "Curiosity",
    explanation:
      "Curiosity landed in Gale Crater in 2012 and was still working in November 2026. Spirit and Opportunity have gone silent. Sojourner’s mission ended in 1997.",
    topics: ["mars", "rover"],
  },
  {
    id: "landing-site",
    kind: "choice",
    prompt: "Where did Apollo 11 land?",
    choices: ["Hadley Rille", "Ocean of Storms", "Sea of Tranquility", "Taurus-Littrow"],
    answer: "Sea of Tranquility",
    explanation:
      "Eagle landed in the Sea of Tranquility. The Ocean of Storms was Apollo 12. Hadley was Apollo 15. Taurus-Littrow was Apollo 17.",
    topics: ["moon", "history"],
  },
  {
    id: "tf-90-sols",
    kind: "boolean",
    prompt: "Opportunity was built to work for 90 Martian days, but it worked for about 15 Earth years.",
    answer: "true",
    explanation:
      "True. NASA’s record blog says Spirit and Opportunity had 90-sol prime missions, and that Opportunity kept rolling for 5,111 sols. The mission page says its last signal was June 10, 2018.",
    topics: ["mars", "rover", "history"],
  },
  {
    id: "tf-mirrors",
    kind: "boolean",
    prompt: "The Apollo 11, 14, and 15 laser retroreflectors still bounce laser light back to Earth.",
    answer: "true",
    explanation:
      "True. NASA describes these mirror arrays as an experiment that still returns data. They have no battery and no radio. They only reflect light.",
    topics: ["moon", "history"],
  },
  {
    id: "tf-alsep-radio",
    kind: "boolean",
    prompt: "All of the Apollo science stations are still sending radio data to Earth.",
    answer: "false",
    explanation:
      "False. NASA turned the ALSEP radio stations off on September 30, 1977. The retroreflectors are still used, but they do not send radio signals.",
    topics: ["moon", "history"],
  },
  {
    id: "tf-life",
    kind: "boolean",
    prompt: "Curiosity has proved that microbes once lived on Mars.",
    answer: "false",
    explanation:
      "False. Curiosity found ancient environments that could have supported microbial life, and it found organic molecules. NASA does not call that proof of life. Organic molecules are carbon-based chemicals, not creatures.",
    topics: ["mars", "rover"],
  },
  {
    id: "tf-ingenuity",
    kind: "boolean",
    prompt: "The Ingenuity helicopter is still making flights in 2026.",
    answer: "false",
    explanation:
      "False. NASA reports that Ingenuity completed 72 flights. That demonstration is over. Perseverance, the rover that carried it, is still driving.",
    topics: ["mars", "history"],
  },
];

export const matchPairs: MatchPair[] = [
  { id: "soj", hardware: "Sojourner", mission: "Mars Pathfinder" },
  { id: "spi", hardware: "Spirit", mission: "Mars Exploration Rover" },
  { id: "cur", hardware: "Curiosity", mission: "Mars Science Laboratory" },
  { id: "per", hardware: "Perseverance", mission: "Mars 2020" },
  { id: "lrv", hardware: "NASA’s first lunar rover", mission: "Apollo 15" },
];

export const badges = [
  {
    id: "moon-explorer",
    name: "Moon Explorer",
    description: "Visit all five Moon machines, or answer every Moon question correctly.",
  },
  {
    id: "mars-detective",
    name: "Mars Detective",
    description: "Visit all five Mars rovers, or answer every Mars question correctly.",
  },
  {
    id: "rover-expert",
    name: "Rover Expert",
    description: "Answer every rover question correctly in one quiz round.",
  },
  {
    id: "space-historian",
    name: "Space Historian",
    description: "Open at least four timeline events, then answer every history question correctly.",
  },
] as const;

export type BadgeId = (typeof badges)[number]["id"];
