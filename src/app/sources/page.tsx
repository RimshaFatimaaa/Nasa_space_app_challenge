import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sources and credits",
  description: "NASA sources, image credits, and the AI disclosure for Beyond Earth.",
};

const groups = [
  {
    title: "NASA Science mission pages",
    links: [
      ["Mars Pathfinder and Sojourner", "https://science.nasa.gov/mission/mars-pathfinder/"],
      ["Spirit", "https://science.nasa.gov/mission/mer-spirit/"],
      ["Spirit and Opportunity", "https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/"],
      ["Curiosity", "https://science.nasa.gov/mission/msl-curiosity/"],
      ["Curiosity blog, November 6, 2026", "https://science.nasa.gov/blog/curiosity-blog-sols-5063-5069-rocks-and-chips/"],
      ["Perseverance", "https://science.nasa.gov/mission/mars-2020-perseverance/"],
      ["Perseverance components", "https://science.nasa.gov/mission/mars-2020-perseverance/rover-components/"],
      ["Perseverance driving record, October 11, 2026", "https://science.nasa.gov/blogs/perseverance-mars-rover/2026/10/12/nasas-perseverance-sets-off-world-record-for-total-distance-driven/"],
      ["Comparing off-world driving distances", "https://science.nasa.gov/resource/comparing-off-world-rover-driving-distances/"],
    ],
  },
  {
    title: "Apollo history, laser ranging, and the data archive",
    links: [
      ["The Apollo experiment that keeps on giving", "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/"],
      ["Apollo 11 retroreflector, NASA GSFC", "https://ilrs.gsfc.nasa.gov/missions/satellite_missions/current_missions/ap11_general.html"],
      ["Lunar Roving Vehicle, NASA NSSDC", "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html"],
      ["NASA Science — Lunokhod 1, first wheeled vehicle on the Moon, November 17, 1970", "https://science.nasa.gov/image-article/apod-1997-april-20-moon-robot-lunokhod-1/"],
      ["ALSEP history, NASA NTRS", "https://ntrs.nasa.gov/api/citations/20180008613/downloads/20180008613.pdf"],
      ["ALSEP termination report, NASA NTRS", "https://ntrs.nasa.gov/api/citations/19790014808/downloads/19790014808.pdf"],
      ["Planetary Data System — Apollo collections", "https://pds-geosciences.wustl.edu/missions/apollo/"],
      ["NASA Planetary Data System", "https://pds.nasa.gov/"],
    ],
  },
  {
    title: "Images and a page for younger readers",
    links: [
      ["NASA Image and Video Library", "https://images.nasa.gov/"],
      ["NASA Image API used by the “load more images” button", "https://images-api.nasa.gov/"],
      ["NASA Space Place", "https://spaceplace.nasa.gov/"],
    ],
  },
];

export default function SourcesPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-10">
      <header className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
        <p className="text-xs tracking-[0.18em] text-cyan uppercase">Trust and credit</p>
        <h1 className="mt-3 font-display text-5xl">Sources and credits</h1>
        <p className="mt-4 leading-7 text-silver">
          Beyond Earth is a student exhibit, not an official NASA website. It does not use the NASA logo, the NASA flag, or altered mission patches. Photographs are NASA images. The anatomy diagrams are SVG drawings whose code was written with AI help. Deep-space probes such as Voyager are not part of this exhibit. The machines here are the ones left on the Moon and Mars.
        </p>
      </header>

      <section className="text-card space-y-3 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">How to read a page</h2>
        <p className="leading-7">
          Text marked “In simple words” is an explanation for students. Dates, masses, distances, and status labels are taken from the NASA pages linked on each machine. Active rovers move. The driving-record date on the Timeline, Compare, and machine pages is October 11, 2026, the day NASA says Perseverance’s odometer passed Opportunity. The blog that reports it was posted the next day. Both rovers were still operating after October 11. Curiosity’s November 6, 2026 science blog is the latest operations note used here.
        </p>
        <p className="leading-7">
          This site does not download raw instrument files. Teachers who want the archived measurements can start at the Planetary Data System links below. The Apollo link points to restored ALSEP collections.
        </p>
      </section>

      <section className="text-card space-y-3 rounded-[2rem] border border-white/10 p-6 md:p-8">
        <h2 className="font-display text-3xl">Image credits</h2>
        <p className="leading-7">
          Apollo surface photographs are credited to NASA. Mars rover photographs are credited to NASA/JPL or NASA/JPL-Caltech, and camera-team images also name Malin Space Science Systems where that is the library credit. Each photo caption links to its NASA Image Library record. If a picture fails to load, the page says so and keeps the credit.
        </p>
        <p className="leading-7">The anatomy diagrams are AI-generated illustrations.</p>
        <p className="leading-7">
          The rover and lunar-module diagrams are SVG drawings. An AI coding assistant wrote the code that draws them. They are teaching sketches, not NASA engineering drawings, not photographs, and not pictures from an image generator.
        </p>
      </section>

      {groups.map((group) => (
        <section key={group.title} className="text-card rounded-[2rem] border border-white/10 p-6 md:p-8">
          <h2 className="font-display text-3xl">{group.title}</h2>
          <ul className="mt-4 space-y-2">
            {group.links.map(([label, url]) => (
              <li key={url}>
                <a className="text-cyan underline-offset-2 hover:underline" href={url} target="_blank" rel="noreferrer">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="text-card rounded-[2rem] border border-sand/40 p-6 md:p-8">
        <h2 className="font-display text-3xl">AI disclosure</h2>
        <p className="mt-3 leading-7">
          The exhibit idea is the team’s: a kid-friendly look at machines left on the Moon and Mars, with stories, a quiz, and badges. AI was not used to invent that idea.
        </p>
        <p className="mt-3 leading-7">
          AI was used to write the website code. That includes the SVG code that draws the anatomy diagrams. Those diagrams are not photographs, and they are not pictures from an image generator. AI also drafted and revised the student wording, including the lines marked “In simple words.”
        </p>
        <p className="mt-3 leading-7">
          On November 15, 2026, these NASA pages were opened and the figures named here were read from them. The driving record was set on October 11, 2026, when the odometer reached 28.10 miles (45.22 kilometers). NASA posted that science blog the next day. It also says Opportunity’s mark was 28.06 miles (45.16 kilometers), Curiosity had driven more than 23.65 miles (38.07 kilometers) as of October 11, Spirit and Opportunity had 90-sol prime missions, and Opportunity rolled for 5,111 sols. The Spirit and Opportunity mission page says Opportunity’s last signal was June 10, 2018, and that its distance record stood until October 11, 2026. The NASA NSSDC lunar rover page gives the Apollo 15, 16, and 17 drive distances and the 210-kilogram rover mass. “The Apollo Experiment That Keeps on Giving” says the Apollo 11 and 14 mirror arrays have 100 prisms each, Apollo 15 has 300, and the arrays still return data with no power of their own. NASA’s deep-space firsts page lists Lunokhod 1, on November 17, 1970, as the first wheeled vehicle on the Moon.
        </p>
        <p className="mt-3 leading-7">
          Other dates and masses on the machine pages are taken from the NASA links on those pages. They were not all re-opened for this note. AI was not used to invent specifications, discoveries, or status labels. No NASA logo, flag, or mission identifier was generated or modified. If a sentence here and a NASA page disagree, use the NASA page. Curiosity and Perseverance are still driving, so their distances will change.
        </p>
      </section>
    </div>
  );
}
