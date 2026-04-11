import type { ProgressStore } from './ProgressStore';
import type { Progress } from '../types/progress';
import { EMPTY_PROGRESS } from '../types/progress';

const KEY = 'hsk-quest-progress-v1';

export class LocalProgressStore implements ProgressStore {
  load(): Progress {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return { ...EMPTY_PROGRESS };
      const parsed = JSON.parse(raw) as Progress;
      if (parsed.version !== 1) return { ...EMPTY_PROGRESS };
      return parsed;
    } catch {
      return { ...EMPTY_PROGRESS };
    }
  }

  save(progress: Progress): void {
    try {
      localStorage.setItem(KEY, JSON.stringify(progress));
    } catch {
      // storage can be full or unavailable; silently degrade
    }
  }

  clear(): void {
    try {
      localStorage.removeItem(KEY);
    } catch {
      // ignore
    }
  }

  getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  }

  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore
    }
  }

  removeItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      // ignore
    }
  }
}
