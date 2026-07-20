import Image from 'next/image';

export type Screenshot = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

type FigureProps = Screenshot & {
  sizes?: string;
  className?: string;
};

/**
 * A single in-article screenshot: bordered image with a short muted caption,
 * matching the site's greenMid / rounded card styling.
 */
export function ScreenshotFigure({
  src,
  alt,
  caption,
  width,
  height,
  sizes = '(max-width: 1024px) 100vw, 896px',
  className = '',
}: FigureProps) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-greenMid bg-deepGreen/40">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className="h-auto w-full"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * A responsive grid of screenshots for multi-image blocks (e.g. career tiles).
 * A single image renders full width; multiple images flow 2-up (3-up on lg
 * when there are more than four).
 */
export function ScreenshotGrid({ images }: { images: Screenshot[] }) {
  if (images.length === 1) {
    return <ScreenshotFigure {...images[0]} />;
  }
  const gridCols =
    images.length > 4 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2';
  return (
    <div className={`grid gap-4 ${gridCols}`}>
      {images.map((img) => (
        <ScreenshotFigure
          key={img.src}
          {...img}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
        />
      ))}
    </div>
  );
}
