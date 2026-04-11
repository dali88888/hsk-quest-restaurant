export interface QuizScore {
  sceneId: string;
  total: number;
  correct: number;
  timestamp: number;
}

export interface Progress {
  version: 1;
  completedScenes: string[];
  learnedWords: string[];
  quizScores: QuizScore[];
  uiLanguage: 'en' | 'zh';
  showPinyin: boolean;
  showEnglish: boolean;
  lastUpdated: number;
}

export const EMPTY_PROGRESS: Progress = {
  version: 1,
  completedScenes: [],
  learnedWords: [],
  quizScores: [],
  uiLanguage: 'en',
  showPinyin: true,
  showEnglish: true,
  lastUpdated: 0,
};
