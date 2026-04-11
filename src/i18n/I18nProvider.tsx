import {
  createContext,
  useContext,
  useMemo,
  type ReactNode,
} from 'react';
import en from './dictionaries/en';
import zh from './dictionaries/zh';
import type { DictKey, Dictionary } from './keys';
import { useGameStore } from '../store/gameStore';

type Lang = 'en' | 'zh';

const DICTS: Record<Lang, Dictionary> = { en, zh };

interface I18nCtx {
  language: Lang;
  t: (key: DictKey) => string;
  setLanguage: (lang: Lang) => void;
}

const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const language = useGameStore((s) => s.progress.uiLanguage);
  const setLanguage = useGameStore((s) => s.setLanguage);

  const value = useMemo<I18nCtx>(
    () => ({
      language,
      setLanguage,
      t: (key) => DICTS[language][key] ?? key,
    }),
    [language, setLanguage]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18nCtx {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
