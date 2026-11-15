import type { Hardware } from "@/types/hardware";

const nasa = "NASA";

export const moonHardware: Hardware[] = [
  {
    id: "eagle",
    name: "Apollo 11 Lunar Module Eagle",
    destination: "Moon",
    category: "Apollo Lunar Modules",
    mission: "Apollo 11",
    launchDate: "July 16, 1969",
    landingDate: "July 20, 1969",
    location: "Sea of Tranquility (Mare Tranquillitatis), about 0.67° N, 23.47° E",
    powerSource: "Batteries on the lunar module",
    mobility: "Flew to the surface, then stayed. It was not a rover.",
    mass: "Not listed as a single surface mass on the NASA pages used here. The descent stage is the part still on the Moon.",
    dimensions: "About 7 meters (23 feet) tall, with landing legs spread wide to steady it",
    duration: "One short surface stay on July 20–21, 1969. The astronauts spent about two and a half hours outside.",
    status: "Left behind",
    statusDetail:
      "Eagle’s descent stage — the lower half that served as a launch pad — is still at Tranquility Base. Neil Armstrong and Buzz Aldrin flew the ascent stage back to orbit. NASA has not confirmed where that ascent stage finally hit the Moon. NASA’s Lunar Reconnaissance Orbiter has photographed the landing site, including the descent stage.",
    statusAsOf: "Historical status. The descent stage remains at the landing site. Coordinates from NASA’s International Laser Ranging Service.",
    overview:
      "Eagle is the spacecraft that carried the first people to the Moon’s surface. Its lower half is still there. In simple words: it was a two-story moon taxi. The bottom stayed behind. The top flew the astronauts back to the command ship Columbia, where Michael Collins was waiting in orbit.",
    purpose:
      "Land two astronauts safely, let them walk and set up experiments, then launch them back to lunar orbit.",
    appearance:
      "In NASA photographs, Eagle looks like a gold-and-silver insect standing on four legs. Foil blankets cover much of the body. A ladder runs from the porch down a landing leg. The cabin has windows the astronauts used to fly and to look at the ground.",
    story: [
      "No human had ever landed on another world. Apollo 11 had to prove a lunar module could land and take off again.",
      "On July 20, 1969, Neil Armstrong flew Eagle past a boulder field and set it down in the Sea of Tranquility with little fuel left. He radioed: “Houston, Tranquility Base here. The Eagle has landed.”",
      "Armstrong and Buzz Aldrin collected rocks and soil and deployed the Early Apollo Surface Experiments Package. They stayed close to the lander, within about 100 meters.",
      "The descent stage was their launch pad. It is still on the Moon. The astronauts left the surface in the ascent stage and docked with Columbia.",
    ],
    events: [
      {
        date: "July 16, 1969",
        title: "Launch from Florida",
        detail: "A Saturn V rocket lifted Apollo 11 from Kennedy Space Center.",
      },
      {
        date: "July 20, 1969",
        title: "Landing",
        detail: "Eagle landed in the Sea of Tranquility. Armstrong and Aldrin became the first people to walk on the Moon.",
      },
      {
        date: "July 21, 1969",
        title: "Liftoff from the Moon",
        detail: "The ascent stage left the descent stage behind and returned the crew to orbit.",
      },
    ],
    instrumentsNote:
      "Eagle itself was the lander. The science tools it delivered are the Early Apollo Surface Experiments Package, which has its own profile.",
    instruments: [
      {
        name: "Landing radar and flight controls",
        function: "Helped the crew find a safe place to land and then fly the ascent stage back to orbit.",
        measures: "Height above the ground, speed, and the spacecraft’s position.",
        whyNeeded: "The Moon has no runway. The pilots needed instruments to land by hand.",
      },
      {
        name: "Cabin and surface cameras",
        function: "Recorded the landing site, the astronauts, and the ground around Eagle.",
        measures: "Photographs, not a science scan of rock chemistry.",
        whyNeeded: "Pictures let the rest of the world see the landing and help scientists study the site later.",
      },
    ],
    discoveries: [
      "The landing proved people could reach the Moon, work there, and come home.",
      "The crew brought back lunar rocks and soil, the first samples collected by humans from another world.",
      "The site they left behind is still studied in photographs from lunar orbit.",
    ],
    contributions: [
      "Eagle turned the Moon from a distant light in the sky into a place people had visited.",
      "The descent stage is a marker for Tranquility Base, one of the most famous human sites off Earth.",
      "The short moonwalk showed why later missions needed a rover and a larger science station.",
    ],
    interestingFacts: [
      "Only the bottom half of Eagle is a known object still sitting on the Moon. The top half’s final resting place has not been confirmed.",
      "Armstrong and Aldrin stayed within about 100 meters of the lander — roughly the length of a soccer field.",
      "Michael Collins never landed. He orbited alone in the command module Columbia.",
      "Later Apollo crews also left their lunar-module descent stages at their own landing sites. Eagle was the first.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/as11-40-5927/as11-40-5927~medium.jpg",
        alt: "The Apollo 11 lunar module Eagle resting on the Moon, photographed from the surface.",
        credit: nasa,
        nasaId: "as11-40-5927",
      },
      {
        src: "https://images-assets.nasa.gov/image/as11-40-5903/as11-40-5903~medium.jpg",
        alt: "Astronaut Buzz Aldrin walking on the Moon beside a leg of the lunar module.",
        credit: nasa,
        nasaId: "as11-40-5903",
      },
    ],
    sources: [
      {
        title: "NASA — The Apollo experiment that keeps on giving",
        url: "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/",
      },
      {
        title: "NASA GSFC International Laser Ranging Service — Apollo 11 retroreflector site",
        url: "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html",
      },
      {
        title: "NASA Image and Video Library — Eagle on the surface (as11-40-5927)",
        url: "https://images.nasa.gov/details/as11-40-5927",
      },
    ],
    relatedIds: ["easep", "retroreflector", "lrv"],
    anatomyId: "lunar-module",
    searchQuery: "Apollo 11 Lunar Module Eagle",
  },
  {
    id: "easep",
    name: "Early Apollo Surface Experiments Package",
    destination: "Moon",
    category: "EASEP",
    mission: "Apollo 11",
    launchDate: "July 16, 1969",
    landingDate: "July 20, 1969",
    missionEndDate: "Seismic station stopped after about three weeks. The retroreflector is still used.",
    location: "Sea of Tranquility, a short walk south of Eagle",
    powerSource: "Solar panels for the seismic station. The retroreflector needs no power.",
    mobility: "Set down by the astronauts. It does not move.",
    mass: "A small hand-carried package, much lighter than later ALSEP stations.",
    dimensions: "Small enough for two astronauts to carry and set up during one short moonwalk.",
    duration: "The seismic station sent data for about three weeks. The laser reflector is still working.",
    status: "Left behind",
    statusDetail:
      "EASEP as a package is left behind at Tranquility Base. Its seismometer stopped long ago. Its laser retroreflector is still working and has a separate profile. The solar-wind foil was brought back to Earth. It was not left on the Moon.",
    statusAsOf: "Split status checked against NASA’s Apollo 11 experiment history. The reflector remains in use.",
    overview:
      "EASEP was Apollo 11’s science kit. In simple words: the first moonwalk was short, so NASA sent a small set of experiments instead of the bigger stations used later. Part of it died in the lunar heat. One part is still answering questions.",
    purpose:
      "Learn whether a lunar seismic station would work, catch a sample of the solar wind, measure dust on solar cells, and leave a mirror for laser measurements from Earth.",
    appearance:
      "NASA photographs show Buzz Aldrin carrying and standing near small instrument boxes, not a large rover or a tall lander. The retroreflector is a flat array of glass corner cubes. The seismic package had its own small solar panels and antenna.",
    story: [
      "Apollo 11’s time outside was only about two and a half hours. A full ALSEP station would have taken too long to set up.",
      "Armstrong and Aldrin deployed the Passive Seismic Experiment and the Laser Ranging Retroreflector. They also unrolled a solar-wind foil and brought that foil home.",
      "The seismic station proved the idea, then stopped after about three weeks. Later missions left nuclear-powered stations that ran for years.",
      "The retroreflector never needed electricity. Observatories still bounce laser pulses off it.",
    ],
    events: [
      {
        date: "July 21, 1969",
        title: "Deployed beside Eagle",
        detail: "The crew set up the seismic package and the laser reflector a short walk from the lander.",
      },
      {
        date: "August 1969",
        title: "Seismic station stops",
        detail: "The solar-powered seismometer returned data for about three weeks, then stopped.",
      },
    ],
    instrumentsNote:
      "Not every piece stayed on the Moon. The solar-wind collector was a foil the crew rolled up and returned to Earth.",
    instruments: [
      {
        name: "Passive Seismic Experiment",
        function: "Listened for moonquakes and for impacts shaking the ground.",
        measures: "Ground vibrations.",
        whyNeeded: "Scientists wanted to know if the Moon’s inside was quiet, cracked, or still shifting.",
      },
      {
        name: "Laser Ranging Retroreflector",
        function: "Bounces a laser pulse from Earth straight back to the telescope that sent it.",
        measures: "The travel time of light, which gives the Earth–Moon distance.",
        whyNeeded: "A precise distance helps scientists study the Moon’s orbit and the Earth’s rotation.",
      },
      {
        name: "Lunar Dust Detector",
        function: "Watched how dust and radiation affected the solar cells.",
        measures: "Dust buildup and damage to the cells.",
        whyNeeded: "Dust is a serious problem for machines on the Moon. Apollo 11 was an early test.",
      },
      {
        name: "Solar Wind Composition Experiment",
        function: "A foil sheet that trapped particles streaming from the Sun. The crew brought it home.",
        measures: "The types of particles in the solar wind.",
        whyNeeded: "The Moon has almost no air, so the solar wind hits the surface directly.",
      },
    ],
    discoveries: [
      "A seismic station on the Moon could detect shaking. That success led to the larger ALSEP network.",
      "Dust did settle on the hardware, but early results showed the problem could be measured.",
      "The retroreflector began a laser-ranging record that is still growing.",
    ],
    contributions: [
      "EASEP was the prototype for all the Apollo science stations left on the Moon.",
      "It showed what a short moonwalk could and could not finish.",
      "One of its instruments is among the oldest human-made objects still doing science on another world.",
    ],
    interestingFacts: [
      "EASEP flew only on Apollo 11. Later landings carried the larger ALSEP.",
      "The solar-wind foil did not stay behind. It came home in the spacecraft.",
      "The seismic package ran on sunlight. The lunar day heated it, and it stopped after about three weeks.",
      "The laser array has no battery, no antenna, and no computer. It is a very precise mirror.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/as11-40-5948/as11-40-5948~medium.jpg",
        alt: "Buzz Aldrin on the Moon after deploying the Early Apollo Scientific Experiments Package.",
        credit: nasa,
        nasaId: "as11-40-5948",
      },
    ],
    sources: [
      {
        title: "NASA — The Apollo experiment that keeps on giving",
        url: "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/",
      },
      {
        title: "NASA Apollo 11 anniversary lithograph (EASEP instrument list)",
        url: "https://assets.science.nasa.gov/content/dam/science/cds/general/documents/2024/01/apollo11-anniversar-litho.pdf",
      },
      {
        title: "NASA Image and Video Library — Aldrin after EASEP deployment (as11-40-5948)",
        url: "https://images.nasa.gov/details/as11-40-5948",
      },
    ],
    relatedIds: ["eagle", "retroreflector", "alsep"],
    searchQuery: "Apollo 11 EASEP Aldrin",
  },
  {
    id: "alsep",
    name: "Apollo Lunar Surface Experiments Package",
    destination: "Moon",
    category: "ALSEP",
    mission: "Apollo 12, 14, 15, 16, and 17",
    launchDate: "First station flown on Apollo 12, launched November 14, 1969",
    landingDate: "First deployment November 19, 1969, by Apollo 12",
    missionEndDate: "September 30, 1977",
    location: "Five landing sites: Ocean of Storms, Fra Mauro, Hadley-Apennine, Descartes Highlands, and Taurus-Littrow",
    powerSource: "A SNAP-27 radioisotope thermoelectric generator at each station, producing roughly 70 watts from the heat of plutonium-238",
    mobility: "Placed by astronauts and connected with cables. The stations did not drive.",
    mass: "A collection of boxes, a central station, and a power generator — too large for Apollo 11’s short moonwalk.",
    dimensions: "Spread across the surface around a central station, with cables running to separate experiments.",
    duration: "From deployment in 1969–1972 until NASA turned the network off on September 30, 1977.",
    status: "Left behind",
    statusDetail:
      "NASA stopped the ALSEP stations on September 30, 1977 and stopped processing their signals. They were switched off. They did not all simply break. The instruments remain on the Moon, but they no longer send data. This is different from the laser retroreflectors, which are passive and still used.",
    statusAsOf: "Shutdown date from NASA’s ALSEP history and the 1979 ALSEP Termination Report.",
    overview:
      "ALSEP was a robotic science camp left at five Apollo landing sites. In simple words: after the astronauts flew home, these boxes kept listening to the Moon and radioing Earth. A small nuclear battery let them work through the long lunar night. NASA turned them off in 1977.",
    purpose:
      "Collect years of data on moonquakes, heat flowing from the Moon, magnetism, charged particles, and the extremely thin lunar atmosphere.",
    appearance:
      "Photographs show a low central box, a finned power generator, and smaller instruments set out on the gray ground and linked by flat ribbons of cable. It looks more like a tiny outdoor laboratory than a vehicle.",
    story: [
      "Apollo 11 proved a small station could be deployed. Scientists wanted a network that would keep working after the crew left.",
      "Apollo 12 astronauts Charles Conrad and Alan Bean deployed the first ALSEP in the Ocean of Storms on November 19, 1969.",
      "Apollo 14, 15, 16, and 17 each left a station. The tool list changed from mission to mission. Apollo 13 never landed, so its package was not deployed.",
      "The stations sent data for years. On September 30, 1977, NASA ended support and the network was turned off.",
    ],
    events: [
      {
        date: "November 19, 1969",
        title: "First ALSEP",
        detail: "Apollo 12 deployed the first full station in the Ocean of Storms.",
      },
      {
        date: "1971–1972",
        title: "Network grows",
        detail: "Apollo 14 through 17 added stations, including sites in the lunar highlands.",
      },
      {
        date: "September 30, 1977",
        title: "Network turned off",
        detail: "NASA discontinued the stations and stopped receiving their scientific data.",
      },
    ],
    instrumentsNote:
      "Every station had a central radio and a power generator. The science tools were not identical. A seismometer was a core instrument. Heat-flow probes flew on later missions, not on all of them.",
    instruments: [
      {
        name: "Central station",
        function: "Received commands from Earth and sent experiment data back.",
        measures: "It was the radio and controller, not a sensor.",
        whyNeeded: "The astronauts could not stay to operate the experiments.",
      },
      {
        name: "Passive seismometer",
        function: "Felt moonquakes and the ground shake from impacts.",
        measures: "Vibrations in the lunar crust.",
        whyNeeded: "A network of seismometers can reveal layers inside a world, the same idea used on Earth.",
      },
      {
        name: "Magnetometers and particle instruments",
        function: "Watched magnetic fields and electrically charged particles near the surface.",
        measures: "Magnetism and the particles that reach the Moon.",
        whyNeeded: "The Moon has no global magnetic shield like Earth’s. Local fields still hold clues to its past.",
      },
      {
        name: "Heat-flow experiment (later missions)",
        function: "Measured how much heat leaks out through the soil.",
        measures: "Temperature below the surface.",
        whyNeeded: "Heat flow tells scientists about the Moon’s interior. It was not carried on every flight.",
      },
    ],
    discoveries: [
      "The Moon is seismically active. The stations recorded moonquakes and impacts over many years.",
      "Together, the seismometers gave scientists the first real picture of the Moon’s inner layers.",
      "Long records of heat, magnetism, and the thin atmosphere replaced one-day snapshots from a moonwalk.",
    ],
    contributions: [
      "ALSEP was the first long-lived geophysical network on another world.",
      "Its data are still archived and were later recovered and restored for the Planetary Data System.",
      "It showed both the power of a nuclear battery on the Moon and the cost of keeping a network running from Earth.",
    ],
    interestingFacts: [
      "Five stations were deployed. Apollo 11 used the smaller EASEP instead, and Apollo 13 never landed.",
      "Each station’s electricity came from heat released by plutonium-238, not from sunlight.",
      "NASA turned the network off on one planned day: September 30, 1977.",
      "The boxes are still on the Moon. “Left behind” means they are still there, but they no longer send science data.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/as12-47-6918/as12-47-6918~medium.jpg",
        alt: "Part of the Apollo 12 ALSEP station after it was set up on the Moon.",
        credit: nasa,
        nasaId: "as12-47-6918",
      },
      {
        src: "https://images-assets.nasa.gov/image/as15-85-11471/as15-85-11471~medium.jpg",
        alt: "The Apollo 15 ALSEP instruments deployed on the lunar surface.",
        credit: nasa,
        nasaId: "as15-85-11471",
      },
    ],
    sources: [
      {
        title: "NASA NTRS — History and Status of ALSEP and the Apollo Lunar Data Project",
        url: "https://ntrs.nasa.gov/api/citations/20180008613/downloads/20180008613.pdf",
      },
      {
        title: "NASA NTRS — ALSEP Termination Report",
        url: "https://ntrs.nasa.gov/api/citations/19790014808/downloads/19790014808.pdf",
      },
      {
        title: "NASA Planetary Data System — restored Apollo data",
        url: "https://pds-geosciences.wustl.edu/missions/apollo/",
      },
    ],
    relatedIds: ["easep", "retroreflector", "lrv"],
    searchQuery: "Apollo ALSEP lunar surface experiments",
  },
  {
    id: "lrv",
    name: "Apollo Lunar Roving Vehicle",
    destination: "Moon",
    category: "Lunar Roving Vehicles",
    mission: "Apollo 15, Apollo 16, and Apollo 17",
    launchDate: "Flown on Apollo 15 (July 26, 1971), Apollo 16, and Apollo 17",
    landingDate: "First driven July 31, 1971, during Apollo 15",
    location: "Hadley-Apennine, Descartes Highlands, and Taurus-Littrow. One rover at each site.",
    powerSource: "Two 36-volt silver-zinc batteries. They could not be recharged.",
    mobility: "Four wheels, each with its own motor. The crew steered with a hand controller between the seats.",
    mass: "210 kilograms (about 463 pounds) on Earth. It was designed to carry another 490 kilograms on the Moon.",
    dimensions: "Frame 3.1 meters long, wheelbase 2.3 meters, height 1.14 meters. Ground clearance about 36 centimeters when fully loaded.",
    duration: "Used across three moonwalk days on each of the three missions. The batteries were not reusable after the crew left.",
    distance: "Apollo 15: 27.8 km. Apollo 16: 26.7 km. Apollo 17: 35.9 km. Source: NASA NSSDC.",
    status: "Left behind",
    statusDetail:
      "All three rovers are still at their landing sites. They have no way to recharge, and no one is there to drive them. They are historic vehicles, not working machines. Apollo 17’s rover drove the farthest: 35.9 kilometers.",
    statusAsOf: "Vehicle specifications and drive distances from NASA’s National Space Science Data Center lunar rover page.",
    overview:
      "The Lunar Roving Vehicle was a fold-up electric car for the Moon. In simple words: the first moonwalkers could only stroll near the lander. Starting with Apollo 15, two astronauts could ride, carry tools, and reach hills and craters kilometers away.",
    purpose:
      "Extend each moonwalk so the crew could study more kinds of terrain and bring back a wider set of samples.",
    appearance:
      "It looks like an open dune buggy: two seats of aluminum tubing and nylon webbing, four wire-mesh wheels, a dish antenna, and no cabin roof. It was folded into a bay of the lunar module for the trip, then unfolded on the surface.",
    story: [
      "Walking in a spacesuit is slow and tiring. Geologists wanted the astronauts to reach real features, not only the ground beside the lander.",
      "Apollo 15 carried NASA’s first lunar rover to Hadley-Apennine. David Scott and James Irwin drove it on three traverses beginning July 31, 1971. The uncrewed Soviet Lunokhod 1 had already driven on the Moon in 1970.",
      "John Young and Charles Duke used a second rover at Descartes in 1972. Eugene Cernan and Harrison Schmitt used the third at Taurus-Littrow, the longest drives of the program.",
      "Each rover’s batteries lasted for that mission’s moonwalks. The vehicles were parked and left behind.",
    ],
    events: [
      {
        date: "July 31, 1971",
        title: "First drive",
        detail: "Apollo 15 used NASA’s first lunar rover. The team’s total drive was 27.8 kilometers.",
      },
      {
        date: "April 1972",
        title: "Apollo 16",
        detail: "The second rover covered 26.7 kilometers in the Descartes Highlands.",
      },
      {
        date: "December 1972",
        title: "Apollo 17",
        detail: "The last rover drove 35.9 kilometers. Its longest single traverse was 20.1 kilometers.",
      },
    ],
    instruments: [
      {
        name: "Crew tools and sample bags",
        function: "The rover was mainly a transporter for people, tools, cameras, and rocks.",
        measures: "It did not have a laboratory like a Mars rover. The crew chose the samples.",
        whyNeeded: "The science was in reaching the right rocks and documenting them before the crew had to leave.",
      },
      {
        name: "Navigation and antenna",
        function: "A dish antenna sent television and voice to Earth. Instruments helped the crew know where they were.",
        measures: "Direction, distance, and the radio link.",
        whyNeeded: "There is no magnetic compass that works the way it does on Earth, and the crew could not afford to get lost.",
      },
    ],
    discoveries: [
      "Apollo 15 reached the edge of Hadley Rille and the base of a lunar mountain front.",
      "Apollo 16 explored the Descartes highlands, a different kind of landscape from the dark lunar seas.",
      "Apollo 17’s longer drives helped Harrison Schmitt, a geologist, sample a valley with both ancient crust and darker volcanic rock.",
    ],
    contributions: [
      "The rover changed Apollo from a landing-site visit into a real field trip.",
      "Three identical vehicles let NASA compare different geologic settings.",
      "The parked rovers are still visible to NASA’s Lunar Reconnaissance Orbiter and mark the last human drives on the Moon.",
    ],
    interestingFacts: [
      "The same basic car flew three times. The big difference is where it drove and how far.",
      "Apollo 17 holds the Apollo distance record: 35.9 kilometers, with one traverse of 20.1 kilometers.",
      "The batteries could not be plugged back in. When the mission ended, the rover’s working life ended.",
      "It was built to fold. The lunar module did not have a garage. It had a storage bay.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/as17-137-20979/as17-137-20979~medium.jpg",
        alt: "Close-up of the Apollo 17 lunar roving vehicle at the Taurus-Littrow landing site.",
        credit: nasa,
        nasaId: "as17-137-20979",
      },
    ],
    sources: [
      {
        title: "NASA NSSDC — The Apollo Lunar Roving Vehicle",
        url: "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
      },
      {
        title: "NASA Image and Video Library — Apollo 17 rover (as17-137-20979)",
        url: "https://images.nasa.gov/details/as17-137-20979",
      },
    ],
    relatedIds: ["eagle", "alsep", "retroreflector"],
    searchQuery: "Apollo Lunar Roving Vehicle",
  },
  {
    id: "retroreflector",
    name: "Lunar Laser Ranging Retroreflectors",
    destination: "Moon",
    category: "Individual lunar scientific instruments",
    mission: "Apollo 11, Apollo 14, and Apollo 15",
    launchDate: "1969 (Apollo 11), 1971 (Apollo 14 and Apollo 15)",
    landingDate: "Deployed in 1969 and 1971",
    location: "Sea of Tranquility, Fra Mauro, and Hadley-Apennine",
    powerSource: "None. The arrays are passive mirrors.",
    mobility: "Fixed to the ground where the astronauts aimed them.",
    mass: "A small panel the crew could carry. Apollo 15’s array is the largest of the three.",
    dimensions: "Apollo 11 and 14: 100 corner-cube prisms each. Apollo 15: 300 corner-cube prisms.",
    duration: "Still returning reflected laser light. There is no battery to run down.",
    status: "Still working",
    statusDetail:
      "These arrays do not transmit radio signals and they do not move. Observatories on Earth still send laser pulses to them and time the reflection. NASA describes them as an Apollo experiment that continues to return data. “Still working” means the mirrors still do their job. It does not mean a computer is awake on the Moon.",
    statusAsOf: "NASA feature on the Apollo retroreflectors, plus the NASA GSFC laser-ranging mission page. Passive hardware does not file a weekly status report; ranging stations still use the arrays.",
    overview:
      "A retroreflector is a tray of special mirrors left on the Moon. In simple words: shine a laser at it, and the light bounces straight back. The time the light takes tells scientists the distance to the Moon very exactly. Very exactly means closer than the width of a coin. Mirrors left by Apollo 11, 14, and 15 are still doing this.",
    purpose:
      "Measure the Earth–Moon distance over many years, and from that learn about the Moon’s orbit, the Moon’s interior, and the Earth’s rotation.",
    appearance:
      "Each array is a flat panel of glass corner cubes, like a dense cluster of tiny reflectors aimed toward Earth. Apollo 15’s panel holds three times as many cubes as the Apollo 11 or Apollo 14 panels. There is no antenna and no solar panel on the reflector itself.",
    story: [
      "Apollo 11 carried the first array as part of EASEP. Apollo 14 and Apollo 15 left larger or additional arrays at their own sites.",
      "A corner cube sends light back the way it came, even if the panel is not perfectly square to the laser.",
      "Decades later, NASA still points to these mirrors as a working Apollo experiment. Orbiting cameras also use the arrays as known landmarks.",
      "The Soviet Lunokhod rovers carried retroreflectors too. This profile is about NASA’s three Apollo arrays.",
    ],
    events: [
      {
        date: "July 1969",
        title: "Apollo 11 array",
        detail: "100 prisms were deployed in the Sea of Tranquility.",
      },
      {
        date: "February 1971",
        title: "Apollo 14 array",
        detail: "Another 100-prism array was left at Fra Mauro.",
      },
      {
        date: "July 1971",
        title: "Apollo 15 array",
        detail: "The largest Apollo array, with 300 prisms, was deployed at Hadley-Apennine.",
      },
    ],
    instruments: [
      {
        name: "Corner-cube prism array",
        function: "Reflects a laser pulse back toward the observatory that sent it.",
        measures: "Nothing by itself. Earth telescopes measure the light’s travel time.",
        whyNeeded: "The Moon is far away. A reliable target turns a laser into a tape measure.",
      },
    ],
    discoveries: [
      "Laser ranging tracks the Moon’s orbit and wobble far more precisely than Apollo-era planners first required.",
      "Those motions help scientists test ideas about gravity and about the Moon’s deep interior.",
      "The arrays are also fixed landmarks. NASA notes that cameras in lunar orbit can use them as positions known to better than a foot.",
    ],
    contributions: [
      "They are the clearest example of Apollo hardware that is still part of active science.",
      "They need no power system, which is why they outlasted every radio transmitter Apollo left behind.",
      "They connect a 1969 moonwalk to observatories working today.",
    ],
    interestingFacts: [
      "There is no “on” switch. If you could stand beside one, you would see a glass panel, not a humming machine.",
      "Apollo 15’s array has 300 prisms. Apollo 11 and Apollo 14 have 100 each.",
      "ALSEP’s radios were turned off in 1977. These mirrors were not, because they never used a radio.",
      "Other countries also left lunar retroreflectors. NASA’s three Apollo arrays are the ones in this profile.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA13037/PIA13037~small.jpg",
        alt: "The Apollo 15 laser retroreflector on the Moon, seen from lunar orbit.",
        credit: "NASA/GSFC/Arizona State University",
        nasaId: "PIA13037",
      },
    ],
    sources: [
      {
        title: "NASA — The Apollo experiment that keeps on giving",
        url: "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/",
      },
      {
        title: "NASA GSFC — Apollo 11 laser ranging retroreflector",
        url: "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html",
      },
      {
        title: "NASA Image and Video Library — Apollo 15 laser retroreflector (PIA13037)",
        url: "https://images.nasa.gov/details/PIA13037",
      },
    ],
    relatedIds: ["easep", "eagle", "alsep"],
    searchQuery: "Apollo lunar laser retroreflector",
  },
];
