import type { ReactNode } from 'react';

interface Props {
  src: string;
  children: ReactNode;
}

export function SceneBackground({ src, children }: Props) {
  return (
    <div
      className="relative rounded-2xl overflow-hidden min-h-[12rem]"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/0 via-amber-50/40 to-amber-50/90" />
      <div className="relative">{children}</div>
    </div>
  );
}
