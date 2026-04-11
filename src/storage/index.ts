import { LocalProgressStore } from './LocalProgressStore';
import { MemoryProgressStore } from './MemoryProgressStore';
import type { ProgressStore } from './ProgressStore';

let instance: ProgressStore | null = null;

/**
 * Returns the active ProgressStore singleton.
 *
 * Picks LocalProgressStore when localStorage is available, otherwise falls
 * back to MemoryProgressStore (SSR, private mode, tests).
 *
 * To plug in a backend later: detect `import.meta.env.VITE_BACKEND_URL` here
 * and instantiate a `RemoteProgressStore` instead. Components and the
 * gameStore consume only this factory and never touch the implementation.
 */
export function getProgressStore(): ProgressStore {
  if (instance) return instance;
  const hasLocalStorage =
    typeof window !== 'undefined' && 'localStorage' in window;
  instance = hasLocalStorage
    ? new LocalProgressStore()
    : new MemoryProgressStore();
  return instance;
}

/** For tests only — replace the singleton with a custom impl. */
export function __setProgressStoreForTest(s: ProgressStore): void {
  instance = s;
}

export type { ProgressStore } from './ProgressStore';
