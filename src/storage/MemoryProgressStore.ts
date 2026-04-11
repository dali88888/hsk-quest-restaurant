import type { ProgressStore } from './ProgressStore';
import type { Progress } from '../types/progress';
import { EMPTY_PROGRESS } from '../types/progress';

/**
 * Fallback storage when localStorage is unavailable (SSR, private mode, tests).
 * Data is lost on page reload.
 */
export class MemoryProgressStore implements ProgressStore {
  private map = new Map<string, string>();
  private progress: Progress = { ...EMPTY_PROGRESS };

  load(): Progress {
    return this.progress;
  }

  save(progress: Progress): void {
    this.progress = progress;
  }

  clear(): void {
    this.progress = { ...EMPTY_PROGRESS };
    this.map.clear();
  }

  getItem(key: string): string | null {
    return this.map.get(key) ?? null;
  }

  setItem(key: string, value: string): void {
    this.map.set(key, value);
  }

  removeItem(key: string): void {
    this.map.delete(key);
  }
}
