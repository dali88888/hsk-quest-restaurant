import type { ReactNode } from 'react';
import { TopBar } from './TopBar';
import { useI18n } from '../../i18n/I18nProvider';

export function AppShell({ children }: { children: ReactNode }) {
  const { t } = useI18n();
  return (
    <div className="min-h-full flex flex-col">
      <TopBar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {children}
      </main>
      <footer className="text-center text-xs text-stone-500 py-4 px-4">
        {t('attribution')}
      </footer>
    </div>
  );
}
