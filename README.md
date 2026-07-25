# Professional Mario Baseball League Website

The Professional Mario Baseball League website is a fan site and stat hub for a custom Mario Superstar Baseball league. The site tracks current-season standings, schedules, playoff projections, player profiles, manager profiles, league headlines, season archives, awards, drafts, and full statistical leaderboards.

## Live Site

https://pmbl.vercel.app

## Features

- Home page introducing the Professional Mario Baseball League
- Google sign-in for a personalized user display
- Favorite captain selection saved to local storage
- Current season dashboard with standings, weekly schedule, recent games, stat leaders, and playoff projections
- Player directory with sorting and filtering options
- Player profile modals with info, awards, season stats, all-time stats, and history
- Manager profiles and manager notes
- League headlines and article pages
- Season archive pages for past PMBL seasons
- Draft, schedule, standings, playoffs, awards, and other pages for each season
- Full batting and pitching stat pages
- Mobile-responsive styling

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Styled Components
- React Router
- React Icons
- Lucide React

### Data and Integrations

- Google OAuth
- Google Sheets CSV data
- PapaParse
- Axios
- Local storage

## Project Structure

```text
PMBL/
├── public/                    # Static images and assets
│   ├── archives/              # Archive images
│   ├── banners/               # Banner images
│   ├── emblems/               # Team and captain emblems
│   ├── headlines/             # Headline article images
│   ├── managers/              # Manager images
│   ├── players/               # Player images
│   ├── season1awards/         # Season 1 award images
│   └── season2awards/         # Season 2 award images
├── src/
│   ├── components/            # Main React components and pages
│   │   ├── headlines/         # Individual headline article pages
│   │   ├── seasons/           # Season-specific pages
│   │   ├── Archives.tsx
│   │   ├── CurrentSeason.tsx
│   │   ├── FullStats.tsx
│   │   ├── GoogleLogin.tsx
│   │   ├── Headlines.tsx
│   │   ├── Home.tsx
│   │   ├── Managers.tsx
│   │   ├── Nav.tsx
│   │   ├── Players.tsx
│   │   ├── StatLeaders.tsx
│   │   └── UpdatedStandings.tsx
│   ├── data/                  # League data files
│   │   ├── GamesSeason2.ts
│   │   ├── GamesSeason3.ts
│   │   ├── GamesSeason4.ts
│   │   ├── ManagerNotes.ts
│   │   ├── PlayerHistory.ts
│   │   ├── RetiredHistory.ts
│   │   ├── Season1Rosters.ts
│   │   ├── Season2Rosters.ts
│   │   ├── Season3Rosters.ts
│   │   ├── Season4Rosters.ts
│   │   ├── playerNames.ts
│   │   └── playerStats.ts
│   ├── App.tsx                # Main routes
│   ├── main.tsx               # React app entry point
│   └── index.css              # Global styles
├── globals.css
├── index.html
├── package.json
├── vite.config.ts
└── README.md
```

