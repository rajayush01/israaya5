import { useState } from 'react'

interface PhotoProps {
  src: string
  alt: string
  className?: string
  aspect?: string
}

/**
 * Renders a real Israaya photograph (sourced from `lib/photos.ts` /
 * `Product.images`), cropped to the given aspect ratio.
 *
 * Falls back to a soft tinted placeholder if the image URL ever fails
 * to load, instead of leaving a blank/broken box on the page.
 */
export function Photo({ src, alt, className = '', aspect = 'aspect-[3/4]' }: PhotoProps) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden ${aspect} ${className}`}>
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          role="img"
          aria-label={`${alt} (image unavailable)`}
          className="h-full w-full"
          style={{
            background: 'linear-gradient(160deg, #ddd0ba55 0%, #1d1b1812 55%, #ddd0ba66 100%)',
            backgroundColor: '#e9e1d5',
          }}
        />
      )}
    </div>
  )
}
