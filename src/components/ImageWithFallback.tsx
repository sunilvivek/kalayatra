import { useState } from "react";
import { ImageOff } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  credit?: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
}

/**
 * Image with a designed fallback: if a remote file fails to load we show a
 * tasteful patterned placeholder instead of a broken-image icon.
 */
export default function ImageWithFallback({
  src,
  alt,
  credit,
  className = "",
  imgClassName = "",
  loading = "lazy",
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`heritage-pattern flex flex-col items-center justify-center gap-2 bg-surface-2 p-4 text-center ${className}`}
      >
        <ImageOff className="h-6 w-6 text-muted" aria-hidden="true" />
        <p className="line-clamp-3 text-xs text-muted">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        onError={() => setFailed(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      {credit ? (
        <span className="pointer-events-none absolute right-1.5 bottom-1.5 rounded-md bg-black/45 px-1.5 py-0.5 text-[10px] leading-tight text-white/85">
          {credit}
        </span>
      ) : null}
    </div>
  );
}
