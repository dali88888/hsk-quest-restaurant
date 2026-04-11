/**
 * Per-chapter game record. Tracks best performance for the chapter.
 */
export interface ChapterRecord {
  chapterId: string;
  bestScore: number;
  bestCombo: number;
  gamesPlayed: number;
  totalCorrect: number;
  totalAnswered: number;
  /** chapter is "passed" once bestScore >= unlock threshold */
  passed: boolean;
  lastPlayed: number;
}

export interface Progress {
  version: 2;
  /** keyed by chapterId */
  chapterRecords: Record<string, ChapterRecord>;
  uiLanguage: 'en' | 'zh';
  showPinyin: boolean;
  showEnglish: boolean;
  lastUpdated: number;
}

export const EMPTY_PROGRESS: Progress = {
  version: 2,
  chapterRecords: {},
  uiLanguage: 'en',
  showPinyin: true,
  showEnglish: true,
  lastUpdated: 0,
};

export function getChapterRecord(
  progress: Progress,
  chapterId: string
): ChapterRecord {
  return (
    progress.chapterRecords[chapterId] ?? {
      chapterId,
      bestScore: 0,
      bestCombo: 0,
      gamesPlayed: 0,
      totalCorrect: 0,
      totalAnswered: 0,
      passed: false,
      lastPlayed: 0,
    }
  );
}
