export type Destination = "Moon" | "Mars";

export type HardwareStatus = "Still working" | "Mission ended" | "Left behind";

export interface Instrument {
  name: string;
  function: string;
  measures: string;
  whyNeeded: string;
}

export interface HardwareImage {
  src: string;
  alt: string;
  credit: string;
  nasaId?: string;
}

export interface SourceLink {
  title: string;
  url: string;
}

export interface StoryEvent {
  date: string;
  title: string;
  detail: string;
}

export interface Hardware {
  id: string;
  name: string;
  destination: Destination;
  category: string;
  mission: string;
  launchDate?: string;
  landingDate?: string;
  missionEndDate?: string;
  location: string;
  powerSource: string;
  mobility: string;
  mass: string;
  dimensions: string;
  duration: string;
  distance?: string;
  status: HardwareStatus;
  statusDetail: string;
  statusAsOf: string;
  overview: string;
  purpose: string;
  appearance: string;
  story: string[];
  events: StoryEvent[];
  instrumentsNote?: string;
  instruments: Instrument[];
  discoveries: string[];
  contributions: string[];
  interestingFacts: string[];
  images: HardwareImage[];
  sources: SourceLink[];
  relatedIds: string[];
  anatomyId?: "mars-rover" | "lunar-module";
  searchQuery: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  mission: string;
  equipment: string;
  purpose: string;
  achievement: string;
  hardwareId?: string;
  image?: HardwareImage;
}

export interface QuizQuestion {
  id: string;
  kind: "choice" | "boolean";
  prompt: string;
  choices?: string[];
  answer: string;
  explanation: string;
  topics: Array<"moon" | "mars" | "rover" | "history">;
}

export interface MatchPair {
  id: string;
  hardware: string;
  mission: string;
}

export interface AnatomyPart {
  id: string;
  name: string;
  explanation: string;
  fact: string;
}

export interface AnatomyDiagram {
  id: "mars-rover" | "lunar-module";
  title: string;
  kicker: string;
  intro: string;
  note: string;
  parts: AnatomyPart[];
}
