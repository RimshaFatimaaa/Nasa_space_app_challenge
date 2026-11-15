import type { Hardware } from "@/types/hardware";

export const marsHardware: Hardware[] = [
  {
    id: "sojourner",
    name: "Sojourner",
    destination: "Mars",
    category: "Mars Pathfinder",
    mission: "Mars Pathfinder",
    launchDate: "December 4, 1996",
    landingDate: "July 4, 1997. The rover rolled onto the surface the next Martian day.",
    missionEndDate: "September 27, 1997",
    location: "Ares Vallis, Mars",
    powerSource: "Solar panels on the rover’s top deck",
    mobility: "Six wheels on a rocker-bogie suspension. It drove slowly and stayed near the lander.",
    mass: "10.6 kilograms (23 pounds), from NASA’s current mission page",
    dimensions: "About 63 centimeters long and 48 centimeters wide. NASA describes its standing height as 1 foot (30 centimeters).",
    duration: "Planned for 7 sols. Operated for 83 sols. A sol is one Martian day, about 24 hours and 40 minutes.",
    distance: "About 100 meters (330 feet), from NASA’s 2026 rover-distance comparison",
    status: "Mission ended",
    statusDetail:
      "NASA lists September 27, 1997 as the end of mission. The lander, which Sojourner used as its radio relay, sent its last data that day. The rover had already finished its planned week of work and kept going for 83 sols. It remains on Mars.",
    statusAsOf: "NASA Science Mars Pathfinder page, and NASA’s October 11, 2026 driving-distance comparison.",
    overview:
      "Sojourner was NASA’s first rover on Mars. In simple words: it was a microwave-sized robot that proved a wheeled explorer could drive on the Red Planet and study rocks up close. It was named for Sojourner Truth, a U.S. civil-rights advocate.",
    purpose:
      "Show that a low-cost lander and a small rover could reach Mars, drive, and do useful science beside the lander.",
    appearance:
      "Sojourner is tiny next to later rovers. It has six black wheels, a flat body, and a solar panel on top. When it stood up on the lander ramp it was about 30 centimeters tall — about the height of a 12-inch ruler.",
    story: [
      "Before Pathfinder, successful Mars landers stayed in one spot. Sojourner was the test of a rover that could roll up to a rock a scientist chose.",
      "Pathfinder bounced to a landing in Ares Vallis on July 4, 1997, wrapped in airbags. The lander was later named the Carl Sagan Memorial Station.",
      "On the second Martian day, Sojourner rolled down the ramp. Its main jobs were planned for the first 7 sols. It kept working for 83.",
      "The rover talked to Earth through the lander. When the lander’s last signal came on September 27, 1997, the mission was over.",
    ],
    events: [
      {
        date: "December 4, 1996",
        title: "Launch",
        detail: "Mars Pathfinder left Earth on a Delta II rocket.",
      },
      {
        date: "July 4–5, 1997",
        title: "Landing and first drive",
        detail: "The lander arrived in Ares Vallis. Sojourner drove onto Mars the next sol.",
      },
      {
        date: "September 27, 1997",
        title: "End of mission",
        detail: "NASA marks this as the last day of contact. The rover had traveled about 100 meters.",
      },
    ],
    instruments: [
      {
        name: "Alpha Proton X-ray Spectrometer (APXS)",
        function: "Pressed near a rock or patch of soil and identified chemical elements.",
        measures: "The elements that make up the target, such as silicon, iron, and others.",
        whyNeeded: "A camera can show shape and color. Scientists also need to know what the rock is made of.",
      },
      {
        name: "Rover cameras",
        function: "Showed the ground ahead and the rocks the rover approached.",
        measures: "Black-and-white views used for driving and for choosing targets.",
        whyNeeded: "Drivers on Earth had to see hazards before telling a small rover to move.",
      },
    ],
    discoveries: [
      "A rover could navigate the Martian surface and reach rocks the lander cameras had picked out.",
      "APXS measurements gave early chemical portraits of rocks and soil at Ares Vallis.",
      "The mission’s biggest result was technical and scientific at once: Mars rovers were worth building bigger.",
    ],
    contributions: [
      "Sojourner is the ancestor of Spirit, Opportunity, Curiosity, and Perseverance.",
      "It showed that airbags, a small rover, and a lander relay could do a real Mars mission.",
      "Its short life still rewrote the plan for exploring Mars. Every later NASA rover is larger and more independent.",
    ],
    interestingFacts: [
      "It was designed for about a week and worked for 83 sols.",
      "The whole rover weighed about as much as a large house cat: 10.6 kilograms.",
      "It could not call Earth by itself. The Pathfinder lander was its phone.",
      "NASA’s 2026 distance comparison lists its total drive as about 330 feet, or 100 meters.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA04318/PIA04318~orig.jpg",
        alt: "Sojourner on Mars near a cluster of rocks, in the NASA image titled Sojourner Sits Near Rock Garden.",
        credit: "NASA/JPL",
        nasaId: "PIA04318",
      },
    ],
    sources: [
      {
        title: "NASA Science — Mars Pathfinder",
        url: "https://science.nasa.gov/mission/mars-pathfinder/",
      },
      {
        title: "NASA Science — comparing off-world rover driving distances (October 11, 2026)",
        url: "https://science.nasa.gov/blogs/perseverance-mars-rover/2026/10/12/nasas-perseverance-sets-off-world-record-for-total-distance-driven/",
      },
      {
        title: "Archived NASA rover page — length and width",
        url: "https://web.archive.org/web/20111025222059/http://marsprogram.jpl.nasa.gov/MPF/rover/mission.html",
      },
    ],
    relatedIds: ["spirit", "opportunity"],
    anatomyId: "mars-rover",
    searchQuery: "Sojourner Mars rover",
  },
  {
    id: "spirit",
    name: "Spirit",
    destination: "Mars",
    category: "Mars Exploration Rover",
    mission: "Mars Exploration Rover",
    launchDate: "June 10, 2003",
    landingDate: "January 4, 2004 (UTC)",
    missionEndDate: "Last contact March 22, 2010. Mission declared complete May 25, 2011.",
    location: "Gusev Crater. It stopped at a sandy spot the team called Troy.",
    powerSource: "Solar panels and rechargeable batteries",
    mobility: "Six-wheel rocker-bogie design, with a motor in each wheel. About the size of a golf cart.",
    mass: "About 185 kilograms (405 pounds). NASA says that is about seven times Sojourner.",
    dimensions: "About 1.6 meters long, 2.3 meters wide, and 1.5 meters tall — golf-cart size.",
    duration: "Planned for 90 sols. Operated for 6 years, 2 months, and 19 days, more than 25 times the planned life.",
    distance: "7.73 kilometers (4.8 miles)",
    status: "Mission ended",
    statusDetail:
      "After March 22, 2010, NASA could not regain contact. The most probable cause was cold that the survival heaters could not overcome after the rover became stuck and could not park at a favorable tilt toward the Sun. NASA ended recovery attempts on May 25, 2011. Spirit is still on Mars, silent.",
    statusAsOf: "NASA Science Spirit mission page.",
    overview:
      "Spirit was one of NASA’s twin Mars Exploration Rovers. In simple words: it was a rolling geologist looking for clues that water once shaped Gusev Crater. It far outlived its 90-sol plan, then went quiet after it could no longer drive out of soft soil.",
    purpose:
      "Search for evidence of past water at a crater that may once have held a lake, and test a long-lived solar-powered rover.",
    appearance:
      "Spirit has a flat deck with wing-like solar panels, a mast of cameras that works like a head, a robotic arm, and six wheels. It is much larger than Sojourner and much smaller than Curiosity.",
    story: [
      "Spirit and Opportunity were twins sent to opposite sides of Mars. Spirit launched first, on June 10, 2003, and landed in Gusev Crater.",
      "The plains where it landed looked dry and volcanic. The important rocks were in the Columbia Hills, so Spirit drove toward them.",
      "In 2009 a wheel broke through a crust into soft sand at a place called Troy. The rover could not get free. It kept doing science as a stationary station.",
      "The last contact was March 22, 2010. NASA tried more than 1,300 commands, then ended the effort on May 25, 2011.",
    ],
    events: [
      {
        date: "January 4, 2004",
        title: "Landing",
        detail: "Spirit arrived in Gusev Crater and began a mission planned for 90 sols.",
      },
      {
        date: "2009",
        title: "Stuck at Troy",
        detail: "The rover could no longer drive, but it continued as a science station.",
      },
      {
        date: "March 22, 2010",
        title: "Last contact",
        detail: "No further signal was received. NASA declared the mission complete on May 25, 2011.",
      },
    ],
    instruments: [
      {
        name: "Panoramic Camera (Pancam) and Mini-TES",
        function: "The mast cameras and a heat-sensing spectrometer studied terrain from a distance.",
        measures: "Color, texture, and the minerals suggested by heat radiation.",
        whyNeeded: "The team had to choose which rocks were worth a slow drive.",
      },
      {
        name: "Robotic arm toolkit",
        function: "A microscope camera, an Alpha Particle X-ray Spectrometer, a Mössbauer spectrometer, and a Rock Abrasion Tool.",
        measures: "Texture, chemical elements, and iron minerals. The abrasion tool brushed or ground a fresh surface.",
        whyNeeded: "Mars rocks wear a dusty rind. Scientists need the fresh rock underneath.",
      },
    ],
    discoveries: [
      "NASA credits Spirit with strong evidence that Mars was once much wetter than it is now.",
      "In the Columbia Hills it found rocks and soils, including silica-rich material, that point to water in the ancient environment. Silica-rich = rocks that form in hot water.",
      "The rover’s long life turned a 90-sol dash into a multi-year geologic traverse.",
    ],
    contributions: [
      "Spirit showed that a solar-powered rover could survive Martian winters if the team managed power carefully.",
      "Its Gusev Crater record is part of the proof that water — not only wind and lava — shaped early Mars.",
      "The silence after 2010 is a real ending. The hardware is still there, but the mission is over.",
    ],
    interestingFacts: [
      "Spirit’s twin, Opportunity, landed three weeks later on the other side of Mars.",
      "It drove 7.73 kilometers, far past the original plan of about 600 meters.",
      "Getting stuck did not end the science immediately. A rover that cannot drive can still use its arm and cameras.",
      "NASA’s best explanation for the final loss is cold, after the rover could not aim its solar panels well through the winter.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA05040/PIA05040~small.jpg",
        alt: "NASA image titled Spirit Stretches Out, showing the Mars Exploration Rover Spirit.",
        credit: "NASA/JPL-Caltech",
        nasaId: "PIA05040",
      },
    ],
    sources: [
      {
        title: "NASA Science — Spirit",
        url: "https://science.nasa.gov/mission/mer-spirit/",
      },
      {
        title: "NASA Science — Spirit and Opportunity",
        url: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
      },
    ],
    relatedIds: ["opportunity", "sojourner", "curiosity"],
    anatomyId: "mars-rover",
    searchQuery: "Spirit Mars Exploration Rover",
  },
  {
    id: "opportunity",
    name: "Opportunity",
    destination: "Mars",
    category: "Mars Exploration Rover",
    mission: "Mars Exploration Rover",
    launchDate: "July 7, 2003",
    landingDate: "January 25, 2004 (UTC)",
    missionEndDate: "Last contact June 10, 2018. NASA declared the mission complete February 13, 2019.",
    location: "Meridiani Planum. The last signal came from Perseverance Valley, on the rim of Endeavour Crater. That valley was named before the Perseverance rover existed.",
    powerSource: "Solar panels and rechargeable batteries",
    mobility: "Six-wheel rocker-bogie rover, the same design as Spirit.",
    mass: "About 185 kilograms (405 pounds), the same class as Spirit.",
    dimensions: "About 1.6 meters long, 2.3 meters wide, and 1.5 meters tall.",
    duration: "Planned for 90 sols. Last contact on sol 5,111, nearly 15 Earth years after landing.",
    distance: "45.16 kilometers (28.06 miles). This was the off-world driving record until October 11, 2026.",
    status: "Mission ended",
    statusDetail:
      "Opportunity sent its last signal on June 10, 2018, during a dust storm that covered Mars and blocked sunlight from the solar panels. NASA declared the mission complete on February 13, 2019. The rover is still at Endeavour Crater. It is no longer communicating.",
    statusAsOf: "NASA Science Spirit and Opportunity mission page, and NASA’s October 11, 2026 distance update.",
    overview:
      "Opportunity, nicknamed Oppy, was Spirit’s twin and NASA’s marathon rover. In simple words: it followed the clues of ancient water across Meridiani Planum for almost 15 years. A planet-wide dust storm hid the Sun, and the solar-powered rover went quiet.",
    purpose:
      "Test the idea that Meridiani once had liquid water, using the same rover design as Spirit at a very different site.",
    appearance:
      "Opportunity looks like Spirit: a golf-cart-sized body, flat solar wings, a camera mast, an arm, and six wheels. The solar wings and mast stand out against the rust-colored ground.",
    story: [
      "Opportunity landed in a small crater on Meridiani Planum and immediately saw layered bedrock — a gift for geologists.",
      "It found tiny round stones rich in the mineral hematite. The team nicknamed them blueberries. On Earth, that kind of hematite often forms in water.",
      "The rover left its landing crater, crossed the plains, visited Endurance and Victoria craters, and reached the rim of the much larger Endeavour Crater.",
      "In 2018 a global dust storm darkened the sky. The last contact was June 10, 2018. After months of listening, NASA ended the mission on February 13, 2019.",
    ],
    events: [
      {
        date: "January 25, 2004",
        title: "Landing",
        detail: "Opportunity landed at Meridiani Planum, three weeks after Spirit.",
      },
      {
        date: "2015",
        title: "A marathon on Mars",
        detail: "The rover passed a marathon distance, the first vehicle to do that off Earth.",
      },
      {
        date: "June 10, 2018",
        title: "Last contact",
        detail: "A global dust storm cut off sunlight. The final odometer reading was 45.16 kilometers.",
      },
    ],
    instruments: [
      {
        name: "Panoramic Camera and Mini-TES",
        function: "Searched the landscape for the minerals and layers worth driving to.",
        measures: "Color images and thermal infrared spectra.",
        whyNeeded: "Hematite was the clue that helped scientists pick this landing site from orbit.",
      },
      {
        name: "Arm instruments and Rock Abrasion Tool",
        function: "Studied bedrock up close and scraped away the dusty surface.",
        measures: "Chemistry, iron minerals, and microscopic texture.",
        whyNeeded: "The blueberries and the bedrock had to be measured, not only photographed.",
      },
    ],
    discoveries: [
      "The hematite “blueberries” and the layered rocks at Meridiani are classic evidence that liquid water once soaked this part of Mars.",
      "At Endeavour Crater the rover reached older rocks, including clay-bearing material, extending the water story further back in time.",
      "A solar rover could work for years when dust-cleaning winds occasionally cleared the panels. That luck ended in the 2018 storm.",
    ],
    contributions: [
      "Opportunity turned “Mars may have been wet” into a well-documented field study.",
      "Its 45.16-kilometer drive was the off-world record until Perseverance passed it on October 11, 2026.",
      "The mission is a lesson in power: solar panels are vulnerable to dust and darkness.",
    ],
    interestingFacts: [
      "The 90-sol plan was the requirement, not the real life of the rover. It worked for 5,111 sols.",
      "“Blueberries” are not fruit. They are small, round hematite stones.",
      "Perseverance Valley, where Oppy went quiet, is not named after the Perseverance rover.",
      "Its final distance, 28.06 miles, stood as the record for eight years.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA08424/PIA08424~orig.jpg",
        alt: "A view from Opportunity across Meridiani Planum, with sand ripples, flat rocks, and part of the rover in the foreground.",
        credit: "NASA/JPL-Caltech",
        nasaId: "PIA08424",
      },
    ],
    sources: [
      {
        title: "NASA Science — Spirit and Opportunity",
        url: "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/",
      },
      {
        title: "NASA Science — Perseverance driving record, October 11, 2026",
        url: "https://science.nasa.gov/blogs/perseverance-mars-rover/2026/10/12/nasas-perseverance-sets-off-world-record-for-total-distance-driven/",
      },
    ],
    relatedIds: ["spirit", "perseverance", "sojourner"],
    anatomyId: "mars-rover",
    searchQuery: "Opportunity Mars rover",
  },
  {
    id: "curiosity",
    name: "Curiosity",
    destination: "Mars",
    category: "Mars Science Laboratory",
    mission: "Mars Science Laboratory",
    launchDate: "November 26, 2011",
    landingDate: "August 6, 2012",
    location: "Gale Crater, climbing Mount Sharp (Aeolis Mons)",
    powerSource: "A Multi-Mission Radioisotope Thermoelectric Generator (MMRTG). Heat from plutonium-238 becomes electricity, about 110 watts at the start of the mission, plus two lithium-ion batteries.",
    mobility: "Six wheels on a rocker-bogie suspension. Each wheel is about 50 centimeters across. The wheels are steerable and driven by individual motors.",
    mass: "899 kilograms (1,982 pounds) in Earth gravity",
    dimensions: "About 10 feet long, 9 feet wide, and 7 feet tall, not including the arm. The arm reaches about 7 feet (2.2 meters). NASA’s landing quick facts list 3.0 m long, 2.8 m wide, and 2.1 m to the top of the mast.",
    duration: "Prime mission of about one Mars year. Still operating more than 14 Earth years after landing.",
    distance: "More than 23.65 miles (38.07 kilometers) as of October 11, 2026, and still driving.",
    status: "Still working",
    statusDetail:
      "Curiosity is still driving up Mount Sharp today. NASA’s mission page describes Curiosity as still exploring Gale Crater. On August 26, 2026, it had climbed 1 kilometer above its landing elevation on Mount Sharp. A NASA science blog for November 6, 2026 described drilling and instrument work at a site nicknamed Nazca, followed by a planned drive. The exact spot changes. The rover is still working.",
    statusAsOf: "NASA Science Curiosity page and the November 6, 2026 Curiosity blog. Distance from NASA’s October 11, 2026 comparison.",
    overview:
      "Curiosity is a car-sized rolling laboratory in Gale Crater. In simple words: it asks whether ancient Mars had the right conditions for tiny life. It does not look for living animals. It studies rocks, air, and water’s chemical fingerprints. It is still driving.",
    purpose:
      "Find out if Mars ever had environments that could have supported microbial life, and read the rock layers of Mount Sharp as a history book.",
    appearance:
      "Curiosity is about the size of a small SUV. A mast carries cameras and a laser. A long arm holds a drill and a magnifying camera. There are no solar wings. At the back is a finned cylinder, the nuclear battery. The wheels leave a repeating pattern in the soil.",
    story: [
      "Gale Crater was chosen because a mountain of layered rock, Mount Sharp, sits inside it. Those layers record changing environments.",
      "Curiosity launched on November 26, 2011 and landed on August 6, 2012. A rocket-powered sky crane lowered it to the surface.",
      "In its first year it found a lake-and-stream environment at Yellowknife Bay that NASA describes as habitable in the ancient past. Habitable means the conditions could have supported life. It is not the same as finding life.",
      "The rover is still climbing Mount Sharp. By August 26, 2026 it had gained 1 kilometer of elevation. In early November 2026 the team was still planning science blocks and a drive.",
    ],
    events: [
      {
        date: "August 6, 2012",
        title: "Landing in Gale Crater",
        detail: "Curiosity began a mission to read the crater’s rocks for signs of ancient habitable environments.",
      },
      {
        date: "2013 onward",
        title: "An ancient habitable lake",
        detail: "Instruments found the chemistry and minerals of a long-lived watery environment. That is not a detection of life.",
      },
      {
        date: "August 26, 2026",
        title: "One kilometer up",
        detail: "NASA reported a 1-kilometer elevation gain on the climb of Mount Sharp.",
      },
    ],
    instrumentsNote:
      "NASA lists 10 science instruments and 17 cameras. The names below are the main laboratory and survey tools, not every engineering camera.",
    instruments: [
      {
        name: "Mastcam and ChemCam",
        function: "Mastcam photographs the landscape in color. ChemCam fires a laser and reads the flash of light from the vaporized spot.",
        measures: "Texture and, with the laser, chemical elements from several meters away.",
        whyNeeded: "The team can survey many rocks before spending days driving to one of them.",
      },
      {
        name: "CheMin and SAM",
        function: "Onboard labs. CheMin identifies minerals. SAM heats samples and studies gases and organic molecules.",
        measures: "Minerals, isotopes, and carbon-based molecules.",
        whyNeeded: "The main question — could microbes have lived here? — is a chemistry question.",
      },
      {
        name: "APXS, MAHLI, and the drill",
        function: "The arm places a chemical sensor and a magnifying camera on the rock, and the drill collects powder.",
        measures: "Elements, close-up texture, and a powdered sample for the labs.",
        whyNeeded: "Fresh powder from inside a rock is more trustworthy than the dusty surface.",
      },
      {
        name: "DAN, RAD, and REMS",
        function: "DAN looks for hydrogen bound in the ground. RAD measures radiation. REMS is the weather station.",
        measures: "Water-related hydrogen, radiation dose, and local weather.",
        whyNeeded: "Habitability is about the whole environment, including radiation and water.",
      },
    ],
    discoveries: [
      "Gale Crater once had streams, a lake, and the chemical ingredients of a habitable environment. NASA is careful: this is not proof that life existed.",
      "SAM has found organic molecules in ancient mudstone, including long carbon chains in a sample called Cumberland. Organic molecules are not living things. A 2026 NASA report says non-living explanations the team tested do not fully account for those compounds. In simple words: ordinary chemistry, with no life involved, does not explain all of the carbon they found. The question stays open.",
      "The climb of Mount Sharp is a timeline. Higher layers record later chapters in the crater’s history, including a change toward a drier Mars.",
    ],
    contributions: [
      "Curiosity showed that a nuclear-powered rover could work for many years without depending on clean solar panels.",
      "It moved Mars science from “was there water?” to “was this a place life could have used?”",
      "It is still adding chapters. Any distance listed here will go out of date while the rover is healthy.",
    ],
    interestingFacts: [
      "The wheels stamp “JPL” in Morse code. NASA’s Jet Propulsion Laboratory built the rover, and the marks also help it measure its drives.",
      "It does not run on sunlight. Dust storms that threaten solar rovers do not shut down the MMRTG.",
      "“Organic” means carbon-based chemistry. It does not, by itself, mean a creature.",
      "As of October 11, 2026, NASA listed more than 38.07 kilometers of driving, and Curiosity was still on the move.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA16239/PIA16239~medium.jpg",
        alt: "Curiosity’s high-resolution self-portrait on Mars, taken with the camera on its robotic arm.",
        credit: "NASA/JPL-Caltech/MSSS",
        nasaId: "PIA16239",
      },
    ],
    sources: [
      {
        title: "NASA Science — Curiosity",
        url: "https://science.nasa.gov/mission/msl-curiosity/",
      },
      {
        title: "NASA Curiosity blog, sols 5063–5069 (planning date November 6, 2026)",
        url: "https://science.nasa.gov/blog/curiosity-blog-sols-5063-5069-rocks-and-chips/",
      },
      {
        title: "NASA — MMRTG fact sheet noting Curiosity’s power source",
        url: "https://www.nasa.gov/wp-content/uploads/2015/08/4_mars_2020_mmrtg.pdf",
      },
      {
        title: "NASA Mars Science Laboratory landing quick facts",
        url: "https://mars.nasa.gov/internal_resources/823/",
      },
    ],
    relatedIds: ["perseverance", "opportunity", "spirit"],
    anatomyId: "mars-rover",
    searchQuery: "Curiosity Mars rover",
  },
  {
    id: "perseverance",
    name: "Perseverance",
    destination: "Mars",
    category: "Mars 2020",
    mission: "Mars 2020",
    launchDate: "July 30, 2020",
    landingDate: "February 18, 2021",
    location: "Jezero Crater. As of NASA’s October 2026 update, it is exploring the crater rim.",
    powerSource: "An MMRTG using plutonium-238, about 110 watts at launch, plus two lithium-ion batteries. The generator’s design life is about 14 years.",
    mobility: "Six-wheel rocker-bogie rover. It can drive itself between waypoints using AutoNav, building a 3D hazard map while rolling.",
    mass: "1,025 kilograms (2,260 pounds) on Earth, about 126 kilograms heavier than Curiosity",
    dimensions: "About 10 feet long (not including the arm), 9 feet wide, and 7 feet tall (about 3 meters by 2.7 meters by 2.2 meters). The arm is about 7 feet long.",
    duration: "Prime mission of about one Mars year. NASA’s first extension, starting October 2026, runs through roughly the end of 2028.",
    distance: "28.10 miles (45.22 kilometers) on October 11, 2026, sol 2,006, and still increasing.",
    status: "Still working",
    statusDetail:
      "On October 11, 2026, Perseverance passed Opportunity’s off-world driving record. NASA approved continued exploration of the Jezero crater rim through about the end of 2028. The rover is still driving and still caching samples. Those samples are on Mars. They have not been returned to Earth.",
    statusAsOf: "NASA Science Perseverance page and the science blog for the October 11, 2026 driving record.",
    overview:
      "Perseverance is NASA’s sample-collecting rover in Jezero Crater. In simple words: it is searching for signs that ancient microbial life might have lived in a crater that once held a lake and a river delta. It stores rock cores in tubes so a future mission might bring them to Earth. It is the farthest-driving vehicle on another world, and it is still adding miles.",
    purpose:
      "Study Jezero’s habitable past, look for possible signs of ancient life, cache samples, and test technology for future human explorers.",
    appearance:
      "Perseverance looks like a slightly heavier Curiosity: a mast of cameras, a turret of tools on a long arm, six wheels, and an MMRTG at the back. For the cruise to Mars a small helicopter, Ingenuity, rode underneath. Ingenuity’s flights are over. The rover continues.",
    story: [
      "Jezero Crater once held a lake. A river built a delta there more than 3.5 billion years ago. That is why NASA chose it.",
      "Perseverance landed on February 18, 2021. Ingenuity, carried on the rover, later made the first powered, controlled flight on another planet and completed 72 flights. That helicopter demonstration is finished.",
      "The rover has collected a diverse set of rock and soil samples, plus a sample of Martian air. One rock, nicknamed Cheyava Falls, produced a sample called Sapphire Canyon. NASA describes possible biosignatures in it: clues that could fit with ancient life but are not proof. More study, perhaps on Earth, is required.",
      "On October 11, 2026 the odometer reached 45.22 kilometers, passing Opportunity. Most of that distance was driven with AutoNav. NASA then extended the rim exploration through about the end of 2028.",
    ],
    events: [
      {
        date: "February 18, 2021",
        title: "Landing in Jezero Crater",
        detail: "Perseverance began its search for signs of ancient life and started the sample cache.",
      },
      {
        date: "2021–2024",
        title: "Ingenuity’s 72 flights",
        detail: "The helicopter demonstrated powered flight and then its flight mission ended. The rover kept working.",
      },
      {
        date: "October 11, 2026",
        title: "Off-world distance record",
        detail: "28.10 miles (45.22 kilometers) on sol 2,006, with more driving planned.",
      },
    ],
    instrumentsNote:
      "NASA counts seven science instruments, plus a separate sampling and caching system. WATSON is the close-up camera paired with SHERLOC.",
    instruments: [
      {
        name: "Mastcam-Z and SuperCam",
        function: "Mastcam-Z zooms in on the landscape. SuperCam combines a laser, cameras, and spectrometers.",
        measures: "Shape, color, and chemistry from a distance, including a laser spark like Curiosity’s ChemCam.",
        whyNeeded: "Sample tubes are limited. The team must choose rocks carefully.",
      },
      {
        name: "PIXL and SHERLOC",
        function: "Arm instruments that map elements and look for organic molecules and minerals in tiny spots.",
        measures: "Detailed chemistry and mineral maps, plus fine-scale textures with the WATSON camera.",
        whyNeeded: "Possible signs of ancient life would be small. The rover needs a microscope, not only a wide view.",
      },
      {
        name: "RIMFAX, MEDA, and MOXIE",
        function: "RIMFAX is a ground-penetrating radar. MEDA is the weather station. MOXIE tested making oxygen from Martian air.",
        measures: "Layers under the rover, local weather, and oxygen produced in a technology test.",
        whyNeeded: "Radar reads buried layers. Weather explains the site. Oxygen-making was a test for future human missions. That demonstration is complete.",
      },
      {
        name: "Sampling and caching system",
        function: "Drills a chalk-sized core, seals it in a tube, and stores it.",
        measures: "It collects the rock rather than only scanning it.",
        whyNeeded: "Earth laboratories can do tests no rover can carry. The tubes are the point of the mission.",
      },
    ],
    discoveries: [
      "Jezero’s floor includes volcanic rocks that later interacted with water. The crater’s lake, delta, and river system are a real ancient waterscape, not only a guess from orbit.",
      "The Sapphire Canyon sample, from the rock Cheyava Falls, contains what NASA calls potential biosignatures. Biosignature = a clue that could fit with ancient life. NASA says it is not proof.",
      "MOXIE showed a rover-scale device can pull oxygen from Martian carbon dioxide. Ingenuity showed a helicopter can fly there. Both demonstrations are finished. The rover’s sample hunt is not.",
    ],
    contributions: [
      "Perseverance is building a rock collection that records Jezero’s history and might preserve signs of ancient life, if any are there.",
      "Its driving record shows how autonomy changed exploration. It covered Opportunity’s 15-year distance in about five and a half years.",
      "Nothing in the cache has come home yet. The scientific legacy of the tubes depends on a future return mission.",
    ],
    interestingFacts: [
      "The parachute carried a binary-code message, “Dare Mighty Things,” and the GPS coordinates of NASA’s Jet Propulsion Laboratory in its pattern.",
      "Ingenuity completed 72 flights. It is not still flying.",
      "A potential biosignature is a clue, not a conclusion. NASA has been explicit about that.",
      "The October 11, 2026 distance will already be low if you are reading this later. The rover was still driving.",
    ],
    images: [
      {
        src: "https://images-assets.nasa.gov/image/PIA24542/PIA24542~medium.jpg",
        alt: "Perseverance’s selfie on Mars with the Ingenuity helicopter nearby.",
        credit: "NASA/JPL-Caltech/MSSS",
        nasaId: "PIA24542",
      },
      {
        src: "https://images-assets.nasa.gov/image/PIA24428/PIA24428~medium.jpg",
        alt: "A high-resolution NASA image of Perseverance’s landing on Mars.",
        credit: "NASA/JPL-Caltech",
        nasaId: "PIA24428",
      },
    ],
    sources: [
      {
        title: "NASA Science — Perseverance",
        url: "https://science.nasa.gov/mission/mars-2020-perseverance/",
      },
      {
        title: "NASA Science — rover components and tech specs",
        url: "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/",
      },
      {
        title: "NASA Science — off-world driving record, October 11, 2026",
        url: "https://science.nasa.gov/blogs/perseverance-mars-rover/2026/10/12/nasas-perseverance-sets-off-world-record-for-total-distance-driven/",
      },
      {
        title: "NASA JPL landing press kit — mass, instruments, and oxygen experiment",
        url: "https://www.jpl.nasa.gov/news/press_kits/mars_2020/landing/quick_facts/",
      },
    ],
    relatedIds: ["curiosity", "opportunity", "sojourner"],
    anatomyId: "mars-rover",
    searchQuery: "Perseverance Mars rover",
  },
];
