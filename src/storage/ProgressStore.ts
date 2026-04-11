import type { Progress } from '../types/progress';

/**
 * Storage abstraction for player progress.
 *
 * This interface is intentionally compatible with the shape that Zustand's
 * `persist` middleware expects (`getItem`/`setItem`/`removeItem`), so the
 * same instance can serve both purposes.
 *
 * Implementations:
 *  - LocalProgressStore (default): localStorage.
 *  - MemoryProgressStore (fallback): in-memory Map (SSR / private mode / tests).
 *  - RemoteProgressStore (future): fetch-based, talks to a backend.
 *
 * Swapping the backing store is a one-line change in `storage/index.ts`.
 */
export interface ProgressStore {
  load(): Progress;
  save(progress: Progress): void;
  clear(): void;

  // Adapter shape consumed by Zustand persist middleware
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}
