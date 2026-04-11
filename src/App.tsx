import { I18nProvider } from './i18n/I18nProvider';
import { AppShell } from './components/Layout/AppShell';
import { TitleScreen } from './components/App/TitleScreen';
import { SceneView } from './components/Scene/SceneView';
import { QuizView } from './components/Quiz/QuizView';
import { QuizResult } from './components/Quiz/QuizResult';
import { useGameStore } from './store/gameStore';

function PhaseRouter() {
  const phase = useGameStore((s) => s.phase);
  switch (phase) {
    case 'title':
      return <TitleScreen />;
    case 'scene':
      return <SceneView />;
    case 'quiz':
      return <QuizView />;
    case 'result':
      return <QuizResult />;
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
