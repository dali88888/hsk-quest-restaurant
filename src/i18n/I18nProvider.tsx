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
  t: (key: DictKey, params?: Record<string, string | number>) => string;
  setLanguage: (lang: Lang) => void;
}

const Ctx = createContext<I18nCtx | null>(null);

/** Replace {name} placeholders with values from params. */
function interpolate(
  template: string,
  params?: Record<string, string | number>
): string {
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (m, name) =>
    name in params ? String(params[name]) : m
  );
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const language = useGameStore((s) => s.progress.uiLanguage);
  const setLanguage = useGameStore((s) => s.setLanguage);

  const value = useMemo<I18nCtx>(
    () => ({
      language,
      setLanguage,
      t: (key, params) => interpolate(DICTS[language][key] ?? key, params),
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
