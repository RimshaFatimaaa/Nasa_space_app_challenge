# Beyond Earth

An educational exhibit about the machines NASA left on the Moon and Mars. Students ages 8–16 can read each machine’s story, compare generations of hardware, open simplified diagrams, and earn badges in a quiz. Built for the NASA Space Apps Challenge 2026.

Beyond Earth is a student project. It is not an official NASA website. It does not use the NASA logo, the NASA flag, or altered mission patches. Photographs are NASA images. Deep-space probes such as Voyager are not part of the exhibit.

## Live site

The exhibit is deployed at [https://nasaspaceappchallenge-rho.vercel.app/](https://nasaspaceappchallenge-rho.vercel.app/).

## Demo

https://github.com/user-attachments/assets/eff19bef-919d-41e7-adbb-3c362794044a

## Features

### Home

The landing page opens with a scrolling story: the Moon, Mars, and a rover you can break apart with the cursor. Below that, three featured machines (Perseverance, Curiosity, and Opportunity), a short timeline, and the badge shelf.

### Moon and Mars

Each destination has a hero, a status legend, and category filters. A filter that leaves a single machine centers that card.

**Moon:** Apollo 11 Lunar Module Eagle, the Early Apollo Surface Experiments Package (EASEP), the Apollo Lunar Surface Experiments Package (ALSEP), the Apollo Lunar Roving Vehicle, and the laser retroreflectors left by Apollo 11, 14, and 15.

**Mars:** Sojourner, Spirit, Opportunity, Curiosity, and Perseverance.

### Hardware profiles

Each machine has its own page:

- A short explanation marked “In simple words,” kept separate from the specification table
- Appearance, story, timeline of events, instruments, discoveries, and “Did you know?” facts
- Status, a NASA photo gallery, and links to the NASA pages used for that profile
- Related machines under “Keep exploring”
- An optional “Load more NASA images” search

### Timeline

Events run from Apollo 11 through the October 11, 2026 Perseverance driving record. Opening an event counts toward the Space Historian badge. The lunar rover entry is NASA’s first lunar rover (Apollo 15). The uncrewed Soviet Lunokhod 1 drove on the Moon in 1970. The ALSEP shutdown lists Apollo 12, 14, 15, 16, and 17. Apollo 13 never landed.

### Compare

Side-by-side tables for:

- Sojourner and Spirit
- Spirit and Opportunity
- Sojourner and Perseverance
- Curiosity and Perseverance
- The Apollo 15, 16, and 17 rovers, each with its own NASA photograph
- Apollo 11 EASEP and the later ALSEP stations

Highlighted cells mark the difference worth noticing. Rover rows include landing date, size, mass, power, instruments, and distance.

### Anatomy

Two teaching sketches, drawn as SVG in code:

- A six-wheel Mars rover. The solar version has wing-like panels. The nuclear version has a finned generator at the back. Switch between them and click parts: wheels, mast, arm, antenna, power, and body.
- An Apollo lunar module, split into the descent stage that stayed on the Moon and the ascent stage that left.

These are not NASA engineering drawings and not image-generator pictures. NASA photographs stay on the machine pages.

### Quiz and badges

Eleven questions (multiple choice and true or false) plus a matching game. Each mission can be used only once. Scores and explanations appear after you check.

Four badges, saved only in this browser:

| Badge | How to earn it |
| --- | --- |
| Moon Explorer | Visit all five Moon machines, or answer every Moon question correctly |
| Mars Detective | Visit all five Mars rovers, or answer every Mars question correctly |
| Rover Expert | Answer every rover question correctly in one quiz round |
| Space Historian | Open at least four timeline events, then answer every history question correctly |

There is no account and nothing is sent to a server.

### Sources

`/sources` lists the NASA Science pages, Apollo history and laser-ranging pages, the Planetary Data System, image credits, and an AI disclosure. The disclosure names which NASA pages were opened on November 15, 2026, and it does not claim that every number on the site was re-checked.

## Status labels

Three labels, with a legend on the Moon and Mars pages:

- **Still working** — it is doing its job now (the Apollo mirror arrays, Curiosity, and Perseverance)
- **Mission ended** — NASA finished that rover’s work (Sojourner, Spirit, and Opportunity)
- **Left behind** — Apollo hardware that stayed on the Moon and was never a mission that could “end”

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/moon` | Moon exhibit |
| `/mars` | Mars exhibit |
| `/hardware/[id]` | One machine |
| `/timeline` | Timeline |
| `/compare` | Comparisons |
| `/anatomy` | Anatomy index |
| `/anatomy/mars-rover` | Rover diagram |
| `/anatomy/lunar-module` | Lunar module diagram |
| `/quiz` | Quiz and badges |
| `/sources` | Sources, credits, and AI disclosure |

A small back arrow returns to the previous in-app page. It is hidden on the home page and on the main navigation destinations.

## Tech stack

| Piece | Role |
| --- | --- |
| Next.js 16 (App Router) | Pages, routing, and the image-search route |
| React 19 | Interface |
| TypeScript | Typed mission data and components |
| Tailwind CSS 4 | Layout and the exhibit palette |
| three.js | The particle Moon, Mars, and rover |
| Framer Motion | Section reveals |
| Lucide | Icons |
| Space Grotesk and Inter | Display and body type, loaded with `next/font` |

Mission text lives in TypeScript files under `src/data`, so the exhibit still renders when NASA’s image search is down.

## Getting started

The public site is [https://nasaspaceappchallenge-rho.vercel.app/](https://nasaspaceappchallenge-rho.vercel.app/). To run a copy on your own computer:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

No API key is required.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

## NASA images

Curated photographs are stored with each profile and credited to their NASA Image Library records. The “Load more NASA images” button calls NASA’s public image API through `/api/nasa-images`. If that search takes longer than eight seconds, the button stops and says to try again.

## Project layout

```
src/app          pages and the NASA image route
src/components   shared interface, particles, quiz, compare, anatomy
src/data         hardware, timeline, comparisons, anatomy copy, quiz
src/lib          NASA image helper, progress, and small utilities
src/types        shared TypeScript types
```

## Facts used on the site

Dates, masses, distances, and status lines are taken from the NASA pages linked on each machine and on `/sources`. Student wording is marked “In simple words.” The specification table is the NASA record.

The driving-record date on this site is October 11, 2026, the day NASA says Perseverance’s odometer passed Opportunity (28.10 miles / 45.22 kilometers). NASA posted that science blog the next day. Curiosity’s distance on the site is the October 11, 2026 figure, and a November 6, 2026 Curiosity blog is the latest operations note used here. Both rovers were still working after those dates. Those distances will change.

## On a phone

Below 768 pixels the WebGL particle field does not start. A CSS starfield remains. The navigation collapses to a menu. Comparison tables can be swiped sideways.

## AI disclosure

The exhibit idea — a kid-friendly look at machines left on the Moon and Mars, with stories, a quiz, and badges — is the team’s. AI was not used to invent that idea.

AI was used to write the website code, including the SVG code that draws the anatomy diagrams, and to draft and revise the student wording. The diagrams are not photographs and not pictures from an image generator. No NASA logo, flag, or mission identifier was generated or modified.

The same account is on `/sources`, which is the page judges should read beside the challenge form.

## License

The team’s original code and writing are under the Apache License 2.0. See [LICENSE](LICENSE). That is an open-source license accepted by the Open Source Initiative, which is what NASA Space Apps requires. If a team does not name a license, NASA says it will share the original work under Apache 2.0.

This license does not cover NASA photographs, NASA text, or the NASA name and logos. Those remain NASA’s and are credited on `/sources`. Third-party packages in `package.json` keep their own licenses.
