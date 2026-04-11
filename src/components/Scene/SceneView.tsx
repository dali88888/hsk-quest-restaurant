import { useState } from 'react';
import { useGameStore } from '../../store/gameStore';
import { useI18n } from '../../i18n/I18nProvider';
import { DialogueBox } from './DialogueBox';
import { ChoiceButton } from './ChoiceButton';
import { NPCSprite } from './NPCSprite';
import { SceneBackground } from './SceneBackground';
import { Button } from '../UI/Button';
import { VocabLog } from '../Vocab/VocabLog';
import { VocabPopover } from '../Vocab/VocabPopover';
import type { HskWord } from '../../types/vocab';

export function SceneView() {
  const scene = useGameStore((s) => s.activeScene);
  const currentNodeId = useGameStore((s) => s.currentNodeId);
  const selectChoice = useGameStore((s) => s.selectChoice);
  const advance = useGameStore((s) => s.advance);
  const goToTitle = useGameStore((s) => s.goToTitle);
  const { t } = useI18n();

  const [popoverWord, setPopoverWord] = useState<HskWord | null>(null);

  if (!scene || !currentNodeId) return null;
  const node = scene.nodes[currentNodeId];
  if (!node) return null;

  const speakerLabel =
    node.speaker === 'narrator'
      ? '— —'
      : node.speaker === 'npc'
      ? '服务员 · Waiter'
      : '你 · You';

  return (
    <div className="grid lg:grid-cols-[1fr_280px] gap-4">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-xl font-bold text-amber-900">
            {t('scene.restaurant.title')}
          </h2>
          <Button variant="ghost" onClick={goToTitle}>
            ← {t('quiz.result.backToTitle')}
          </Button>
        </div>

        <SceneBackground src="/assets/bg-restaurant.svg">
          <div className="p-4">
            {node.speaker === 'npc' && (
              <NPCSprite src="/assets/npc-waiter.svg" alt="Waiter" />
            )}
            <DialogueBox
              node={node}
              speakerLabel={speakerLabel}
              onWordClick={setPopoverWord}
            />
          </div>
        </SceneBackground>

        {node.choices ? (
          <div className="mt-4">
            <p className="text-sm text-stone-600 mb-2">
              {t('scene.choosePrompt')}
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {node.choices.map((c) => (
                <ChoiceButton key={c.id} choice={c} onSelect={selectChoice} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-4 flex justify-end">
            <Button onClick={advance}>{t('scene.continue')} →</Button>
          </div>
        )}
      </div>

      <aside>
        <VocabLog />
      </aside>

      {popoverWord && (
        <VocabPopover word={popoverWord} onClose={() => setPopoverWord(null)} />
      )}
    </div>
  );
}
