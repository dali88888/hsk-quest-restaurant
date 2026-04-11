interface Props {
  src: string;
  alt: string;
}

export function NPCSprite({ src, alt }: Props) {
  return (
    <div className="flex justify-center mb-2">
      <img
        src={src}
        alt={alt}
        className="w-40 h-40 sm:w-48 sm:h-48 object-contain drop-shadow"
      />
    </div>
  );
}
