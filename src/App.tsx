import { I18nProvider } from './i18n/I18nProvider';
import { AppShell } from './components/Layout/AppShell';
import { HomeView } from './components/Home/HomeView';
import { ChapterDetailView } from './components/Chapter/ChapterDetailView';
import { FlashGame } from './components/Game/FlashGame';
import { GameResult } from './components/Game/GameResult';
import { TetrisGame } from './components/Tetris/TetrisGame';
import { useGameStore } from './store/gameStore';

function PhaseRouter() {
  const phase = useGameStore((s) => s.phase);
  switch (phase) {
    case 'home':
      return <HomeView />;
    case 'chapter':
      return <ChapterDetailView />;
    case 'game':
      return <FlashGame />;
    case 'result':
      return <GameResult />;
    case 'tetris':
      return <TetrisGame />;
  }
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell>
        <PhaseRouter />
      </AppShell>
    </I18nProvider>
  );
}
