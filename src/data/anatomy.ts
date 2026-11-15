import type { AnatomyDiagram } from "@/types/hardware";

export const anatomyDiagrams: AnatomyDiagram[] = [
  {
    id: "mars-rover",
    title: "Mars rover anatomy",
    kicker: "How a rover is put together",
    intro:
      "This is a simplified three-quarter view for students. It shows all 6 wheels. It is not a NASA engineering drawing. Spirit and Opportunity wore solar panels. Curiosity and Perseverance carry a nuclear battery at the back. Use the switch to see both.",
    note: "An AI coding assistant wrote the SVG code for this teaching sketch. It is not a NASA drawing and not an image-generator picture. Photographs on the machine pages are NASA images.",
    parts: [
      {
        id: "wheels",
        name: "Wheels",
        explanation:
          "Six wheels let the rover climb rocks. A rocker-bogie frame keeps the body steadier when one wheel rises. Each wheel has its own motor.",
        fact: "On Curiosity, the wheels stamp the letters JPL in Morse code. NASA’s Jet Propulsion Laboratory built the rover, and the marks help it measure the drive.",
      },
      {
        id: "mast",
        name: "Mast and cameras",
        explanation:
          "The mast is the rover’s head. Cameras give a human-height view, and some rovers put a laser here to study a rock without driving all the way to it.",
        fact: "Opportunity’s mast helped it spot the hematite “blueberries.” Perseverance’s mast includes Mastcam-Z, which can zoom.",
      },
      {
        id: "arm",
        name: "Robotic arm",
        explanation:
          "The arm reaches from the body to a rock. On its end are tools: a camera, chemical sensors, and often a drill or a brush.",
        fact: "Curiosity’s arm is about 7 feet long. It can place a drill, then pass powdered rock to the laboratory inside the body.",
      },
      {
        id: "antenna",
        name: "Antenna",
        explanation:
          "Antennas are how the rover talks to orbiters and to Earth. A dish can aim at Earth. A smaller antenna is used for nearby relays.",
        fact: "Sojourner could not call Earth on its own. It used the Pathfinder lander as its radio. Later rovers can relay through Mars orbiters.",
      },
      {
        id: "power",
        name: "Power source",
        explanation:
          "Solar panels make electricity from sunlight, but dust and long winters can starve them. A radioisotope generator turns heat from plutonium-238 into steady electricity and also helps keep the rover warm.",
        fact: "Opportunity’s last contact came during a dust storm that blocked the Sun. Curiosity’s nuclear battery does not depend on a clear sky.",
      },
      {
        id: "body",
        name: "Body and instruments",
        explanation:
          "The body holds computers, batteries, and — on Curiosity and Perseverance — science labs or sample-handling gear. It is heated and insulated against nights that can be far below freezing.",
        fact: "Perseverance stores sealed rock samples inside this system. The samples are still on Mars, waiting in case a future mission picks them up.",
      },
    ],
  },
  {
    id: "lunar-module",
    title: "Apollo Lunar Module",
    kicker: "A lander in two pieces",
    intro:
      "This simplified drawing shows the kind of lunar module Apollo crews landed. Eagle, from Apollo 11, is the famous first example. The bottom half stayed on the Moon. The top half launched the astronauts back to orbit.",
    note: "An AI coding assistant wrote the SVG code for this teaching sketch. It is not a NASA blueprint and not an image-generator picture.",
    parts: [
      {
        id: "descent",
        name: "Descent stage",
        explanation:
          "The lower stage carried the engine used for landing, tanks, and the landing legs. On the Moon it became the launch pad for the upper stage. It is the part still sitting at the landing site.",
        fact: "Eagle’s descent stage is still at Tranquility Base. NASA’s Lunar Reconnaissance Orbiter has photographed it.",
      },
      {
        id: "ascent",
        name: "Ascent stage",
        explanation:
          "The upper stage was the cabin. After the moonwalk, its own engine fired and carried the two astronauts back to the command module in orbit.",
        fact: "On Apollo 11, Michael Collins stayed in orbit in Columbia. Armstrong and Aldrin came up from the surface in Eagle’s ascent stage.",
      },
      {
        id: "legs",
        name: "Landing legs",
        explanation:
          "Four legs spread out to keep the lander from tipping. Their footpads rested on the dusty ground, and shock absorbers softened the touchdown. A ladder on one leg was the crew’s staircase.",
        fact: "Apollo 11’s crew stayed within about 100 meters of these legs. Later crews drove rovers much farther.",
      },
      {
        id: "science",
        name: "Science equipment",
        explanation:
          "Experiments rode in a storage bay on the descent stage. Apollo 11 carried the small EASEP kit. Later missions carried the larger ALSEP station, and Apollo 15, 16, and 17 also carried a folded rover.",
        fact: "The laser retroreflector from Apollo 11 is still reflecting light. The ALSEP radios were turned off in 1977.",
      },
      {
        id: "antenna-lm",
        name: "Antenna",
        explanation:
          "An antenna linked the crew to mission control. Landing, the moonwalk, and liftoff all depended on that radio link.",
        fact: "Armstrong’s “The Eagle has landed” traveled from this kind of spacecraft to Earth, about 1.3 seconds of light-time away.",
      },
    ],
  },
];

export function getAnatomy(id: string) {
  return anatomyDiagrams.find((diagram) => diagram.id === id);
}
