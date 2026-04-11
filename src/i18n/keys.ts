export const DICT_KEYS = [
  // app
  'app.title',
  'app.subtitle',
  // top bar
  'topbar.showPinyin',
  'topbar.showEnglish',
  'topbar.language',
  'topbar.languageEN',
  'topbar.languageZH',
  // common
  'common.backHome',
  // home
  'home.heading',
  'home.subheading',
  'home.chapter',
  'home.words',
  'home.best',
  'home.notPlayed',
  'home.comingSoon',
  'home.reset',
  'home.resetConfirm',
  // chapter detail
  'chapter.vocabulary',
  'chapter.howToPlay',
  'chapter.startGame',
  'chapter.rule.duration',
  'chapter.rule.lives',
  'chapter.rule.combo',
  'chapter.rule.timeBonus',
  'chapter.rule.pass',
  // game
  'game.lives',
  'game.score',
  'game.combo',
  'game.time',
  'game.questionNo',
  'game.tapHanziForEnglish',
  // result
  'result.title',
  'result.score',
  'result.maxCombo',
  'result.accuracy',
  'result.bestSoFar',
  'result.gamesPlayed',
  'result.passed',
  'result.threshold',
  'result.tryAgain',
  'result.toPass',
  'result.newBest',
  'result.playAgain',
  // attribution
  'attribution',
] as const;

export type DictKey = (typeof DICT_KEYS)[number];
export type Dictionary = Record<DictKey, string>;
