# HSK Quest · Restaurant

A small web-based RPG that teaches **HSK 1 Mandarin Chinese** through a single
restaurant ordering scene. Built with React + Vite + TypeScript + Tailwind v4 +
Zustand. Designed to be deployed for free on Vercel with a permanent URL.

> 一个面向中文非母语学习者的网页 RPG 小游戏，覆盖 HSK 1 餐厅点餐场景。

## Features

- Branching dialogue with a Chinese restaurant waiter NPC
- Every line shows **hanzi + pinyin + English**, all toggleable
- Click any Chinese word to see its full HSK entry in a popover
- Words encountered are auto-collected into a side **vocabulary log**
- 7-question quiz at the end (mixed hanzi↔English / pinyin↔hanzi)
- **Bilingual UI** (English / 中文) with one-click switch
- Progress + preferences **persist in localStorage**
- Storage abstracted behind an interface — drop-in backend ready

## Prerequisites

You need **Node.js 20+** and npm. Download and install from
<https://nodejs.org> (pick the LTS installer for Windows). Verify in a fresh
terminal:

```bash
node -v   # should print v20.x.x or higher
npm -v
```

## Run locally

```bash
cd hsk-quest-restaurant
npm install
npm run dev
```

Open the URL Vite prints (usually <http://localhost:5173>).

## Build

```bash
npm run build      # outputs static site to dist/
npm run preview    # serves the production build locally for sanity check
```

## Deploy to Vercel (free fixed URL)

1. **Create a GitHub repo** named `hsk-quest-restaurant` (public, no README/license).
2. From this folder:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: HSK Quest restaurant scene MVP"
   git branch -M main
   git remote add origin https://github.com/<your-username>/hsk-quest-restaurant.git
   git push -u origin main
   ```
3. Sign in at <https://vercel.com> with **Continue with GitHub**.
4. Click **Add New… → Project → Import Git Repository → hsk-quest-restaurant**.
5. Vercel auto-detects Vite. Confirm defaults:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click **Deploy**. After ~1–2 minutes you get a permanent URL like
   `https://hsk-quest-restaurant-<your-username>.vercel.app`.
7. Every `git push origin main` automatically redeploys.

## Project structure

```
src/
├── App.tsx, main.tsx          phase router + entry
├── index.css                  Tailwind + ruby-style hanzi clusters
├── types/                     HskWord, DialogueNode, Scene, Progress
├── data/
│   ├── hsk1.ts                ~30-word HSK 1 dictionary
│   └── scenes/restaurant.ts   dialogue tree + quiz
├── store/gameStore.ts         Zustand store w/ persist middleware
├── storage/                   ProgressStore interface + local/memory impls
├── i18n/                      lightweight custom hook (en/zh)
├── components/
│   ├── App/TitleScreen.tsx
│   ├── Scene/                 SceneView, DialogueBox, ChineseLine, ...
│   ├── Vocab/                 VocabLog, VocabPopover, VocabEntry
│   ├── Quiz/                  QuizView, QuizQuestionCard, QuizResult
│   ├── Layout/                AppShell, TopBar
│   └── UI/                    Button, Toggle, ProgressBar, LanguageToggle
└── utils/shuffle.ts
```

## How to add a new scene

1. Add new HSK words to `src/data/hsk1.ts` if needed.
2. Create `src/data/scenes/<slug>.ts` exporting a `Scene` object —
   copy the shape from `restaurant.ts`.
3. Wire it into `TitleScreen.tsx` so players can launch it.

## How to plug in a real backend later

1. Create `src/storage/RemoteProgressStore.ts` implementing `ProgressStore`
   with `fetch` calls to your API.
2. In `src/storage/index.ts`, branch on
   `import.meta.env.VITE_BACKEND_URL` to return the remote impl.

No component or store code needs to change.

## Credits & licenses

- Vocabulary follows the official **HSK 1** standard.
- All illustrations in `public/assets/` are simple custom SVGs created for
  this project. Replace with [unDraw](https://undraw.co) (MIT) or
  [OpenMoji](https://openmoji.org) (CC BY-SA 4.0) for richer artwork.

## Roadmap (not in MVP)

- Audio / TTS pronunciation
- More scenes (market, school, transit, hotel)
- HSK 2+ vocabulary
- Spaced-repetition vocabulary review
- User accounts and cross-device sync
- Stroke-order writing practice
