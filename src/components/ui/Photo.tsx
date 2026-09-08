interface PhotoProps {
  src: string
  alt: string
  className?: string
  aspect?: string
}

/**
 * Renders a real Israaya photograph (sourced from `lib/photos.ts` /
 * `Product.images`), cropped to the given aspect ratio.
 */
export function Photo({ src, alt, className = '', aspect = 'aspect-[3/4]' }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
    </div>
  )
}
