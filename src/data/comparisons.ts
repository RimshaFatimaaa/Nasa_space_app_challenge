import { mustGetHardware } from "@/data/catalog";
import type { Hardware, HardwareImage } from "@/types/hardware";

export interface CompareField {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface CompareColumn {
  name: string;
  href?: string;
  image?: HardwareImage;
  destination: "Moon" | "Mars";
  fields: CompareField[];
}

export interface ComparePreset {
  id: string;
  tab: string;
  title: string;
  summary: string;
  columns: CompareColumn[];
}

function roverColumn(id: string, highlights: string[] = []): CompareColumn {
  const hardware = mustGetHardware(id);
  const field = (label: string, value: string): CompareField => ({
    label,
    value,
    highlight: highlights.includes(label),
  });

  return {
    name: hardware.name,
    href: `/hardware/${hardware.id}`,
    image: hardware.images[0],
    destination: hardware.destination,
    fields: [
      field("Landing date", hardware.landingDate ?? "—"),
      field("Dimensions", hardware.dimensions),
      field("Mass", hardware.mass),
      field("Power source", hardware.powerSource),
      field("Mobility", hardware.mobility),
      field("Scientific instruments", hardware.instruments.map((item) => item.name).join("; ")),
      field("Mission objective", hardware.purpose),
      field("Operational duration", hardware.duration),
      field("Distance traveled", hardware.distance ?? "Not a driving mission"),
    ],
  };
}

function hardwareColumn(hardware: Hardware, fields: CompareField[]): CompareColumn {
  return {
    name: hardware.name,
    href: `/hardware/${hardware.id}`,
    image: hardware.images[0],
    destination: hardware.destination,
    fields,
  };
}

const easep = mustGetHardware("easep");
const alsep = mustGetHardware("alsep");

export const comparePresets: ComparePreset[] = [
  {
    id: "sojourner-spirit",
    tab: "Sojourner / Spirit",
    title: "Sojourner vs Spirit",
    summary:
      "Seven years after the first Mars rover, NASA sent a golf-cart-sized geologist. The jump is size, tools, and the distance a rover could travel alone.",
    columns: [
      roverColumn("sojourner"),
      roverColumn("spirit", ["Mass", "Distance traveled", "Operational duration"]),
    ],
  },
  {
    id: "spirit-opportunity",
    tab: "Spirit / Opportunity",
    title: "Spirit vs Opportunity",
    summary:
      "These twins used the same design. The difference is the ground they studied and how their stories ended. Opportunity drove much farther. Both eventually lost contact.",
    columns: [
      roverColumn("spirit"),
      roverColumn("opportunity", ["Distance traveled", "Operational duration"]),
    ],
  },
  {
    id: "sojourner-perseverance",
    tab: "Sojourner / Perseverance",
    title: "Sojourner vs Perseverance",
    summary:
      "The first Mars rover drove about 100 meters and depended on its lander for radio. Perseverance drives itself, stores rock samples, and in 2026 passed every earlier off-world distance.",
    columns: [
      roverColumn("sojourner"),
      roverColumn("perseverance", ["Mass", "Power source", "Distance traveled"]),
    ],
  },
  {
    id: "curiosity-perseverance",
    tab: "Curiosity / Perseverance",
    title: "Curiosity vs Perseverance",
    summary:
      "Both are nuclear-powered and car-sized. Curiosity analyzes powder inside its body and is still climbing Mount Sharp. Perseverance seals intact cores for a possible trip to Earth and now holds the driving record.",
    columns: [
      roverColumn("curiosity", ["Scientific instruments"]),
      roverColumn("perseverance", ["Mass", "Distance traveled", "Scientific instruments"]),
    ],
  },
  {
    id: "lunar-rovers",
    tab: "Apollo 15/16/17",
    title: "Apollo 15, 16, and 17 rovers",
    summary:
      "NASA flew the same rover design three times. Compare the journeys, not the hardware. Distances are from NASA’s National Space Science Data Center.",
    columns: [
      {
        name: "Apollo 15 rover",
        href: "/hardware/lrv",
        image: {
          src: "https://images-assets.nasa.gov/image/as15-86-11603/as15-86-11603~medium.jpg",
          alt: "Astronaut James Irwin beside the Apollo 15 lunar rover during a moonwalk.",
          credit: "NASA",
          nasaId: "as15-86-11603",
        },
        destination: "Moon",
        fields: [
          { label: "Landing date", value: "July 30, 1971" },
          { label: "Crew", value: "David Scott and James Irwin" },
          { label: "Location", value: "Hadley-Apennine" },
          { label: "Distance traveled", value: "27.8 km" },
          { label: "Driving time", value: "3 hours 2 minutes" },
          { label: "Longest traverse", value: "12.5 km" },
          { label: "Farthest from the lander", value: "5.0 km" },
          { label: "Power", value: "Two non-rechargeable 36-volt batteries" },
          { label: "Status now", value: "Left behind" },
        ],
      },
      {
        name: "Apollo 16 rover",
        href: "/hardware/lrv",
        image: {
          src: "https://images-assets.nasa.gov/image/as16-107-17436/as16-107-17436~medium.jpg",
          alt: "The Apollo 16 lunar rover parked near the lunar module Orion, with John Young behind it.",
          credit: "NASA",
          nasaId: "as16-107-17436",
        },
        destination: "Moon",
        fields: [
          { label: "Landing date", value: "April 20, 1972" },
          { label: "Crew", value: "John Young and Charles Duke" },
          { label: "Location", value: "Descartes Highlands" },
          { label: "Distance traveled", value: "26.7 km" },
          { label: "Driving time", value: "3 hours 26 minutes" },
          { label: "Longest traverse", value: "11.6 km" },
          { label: "Farthest from the lander", value: "4.5 km" },
          { label: "Power", value: "Two non-rechargeable 36-volt batteries" },
          { label: "Status now", value: "Left behind" },
        ],
      },
      {
        name: "Apollo 17 rover",
        href: "/hardware/lrv",
        image: {
          src: "https://images-assets.nasa.gov/image/as17-137-20979/as17-137-20979~medium.jpg",
          alt: "The Apollo 17 lunar rover at the Taurus-Littrow landing site.",
          credit: "NASA",
          nasaId: "as17-137-20979",
        },
        destination: "Moon",
        fields: [
          { label: "Landing date", value: "December 11, 1972" },
          { label: "Crew", value: "Eugene Cernan and Harrison Schmitt" },
          { label: "Location", value: "Taurus-Littrow" },
          { label: "Distance traveled", value: "35.9 km", highlight: true },
          { label: "Driving time", value: "4 hours 26 minutes", highlight: true },
          { label: "Longest traverse", value: "20.1 km", highlight: true },
          { label: "Farthest from the lander", value: "7.6 km", highlight: true },
          { label: "Power", value: "Two non-rechargeable 36-volt batteries" },
          { label: "Status now", value: "Left behind" },
        ],
      },
    ],
  },
  {
    id: "easep-alsep",
    tab: "EASEP / ALSEP",
    title: "Apollo 11 EASEP vs later ALSEP stations",
    summary:
      "Apollo 11 had time for a small kit. Later crews deployed a powered station that ran for years. One EASEP instrument, the laser retroreflector, outlasted every ALSEP radio.",
    columns: [
      hardwareColumn(easep, [
        { label: "Missions", value: "Apollo 11 only" },
        { label: "First use", value: "July 1969" },
        { label: "Power", value: "Solar panels on the seismometer. The reflector needs none." },
        { label: "How long it worked", value: "Seismometer: about three weeks. Reflector: still in use." },
        { label: "What stayed behind", value: "Seismic package, dust detector, and laser reflector. The solar-wind foil came home." },
        { label: "Status", value: "Left behind. The laser reflector is still working." },
      ]),
      hardwareColumn(alsep, [
        { label: "Missions", value: "Apollo 12, 14, 15, 16, and 17", highlight: true },
        { label: "First use", value: "November 19, 1969" },
        { label: "Power", value: "SNAP-27 nuclear battery, roughly 70 watts", highlight: true },
        { label: "How long it worked", value: "Years, until NASA turned the network off on September 30, 1977", highlight: true },
        { label: "What stayed behind", value: "Central station, power generator, and a mission-specific set of experiments" },
        { label: "Status", value: "Left behind. The radios are off." },
      ]),
    ],
  },
];

export function getPreset(id: string) {
  return comparePresets.find((preset) => preset.id === id);
}
