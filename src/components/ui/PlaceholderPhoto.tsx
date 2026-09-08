interface PlaceholderPhotoProps {
  tone?: string
  label?: string
  className?: string
  aspect?: string
}

/**
 * Stand-in for real Israaya campaign/product photography.
 * Intentionally abstract (not fake stock or AI-generated fashion imagery) —
 * swap for real photography via the `photos` / `Product.images` data layer.
 */
export function PlaceholderPhoto({
  tone = '#ddd0ba',
  label,
  className = '',
  aspect = 'aspect-[3/4]',
}: PlaceholderPhotoProps) {
  return (
    <div
      role="img"
      aria-label={label ? `${label} (placeholder — photography pending)` : 'Photography pending'}
      className={`relative overflow-hidden ${aspect} ${className}`}
      style={{
        background: `linear-gradient(160deg, ${tone}55 0%, #1d1b1812 55%, ${tone}66 100%)`,
        backgroundColor: '#e9e1d5',
      }}
    >
      <div className="absolute inset-0 mix-blend-multiply opacity-[0.06] bg-[radial-gradient(circle_at_30%_20%,#000_0,transparent_60%)]" />
      {label && (
        <span className="absolute bottom-4 left-4 font-sans text-[10px] tracking-[0.18em] uppercase text-charcoal/40">
          {label}
        </span>
      )}
    </div>
  )
}
