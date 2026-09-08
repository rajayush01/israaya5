import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Photo } from '../ui/Photo'
import { SITE_PHOTOS } from '../../lib/photos'

export function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] items-end overflow-hidden bg-charcoal">
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: 'inset(0 0 100% 0)' }}
        animate={{ clipPath: 'inset(0 0 0% 0)' }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      >
        <motion.div
          className="h-full w-full"
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <Photo src={SITE_PHOTOS.hero} alt="Nikhaar campaign — hero" aspect="h-full" className="h-full" />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/30 to-transparent" />

      <div className="relative z-10 w-full px-6 pb-16 text-ivory md:px-10 md:pb-20">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="text-[12px] tracking-[0.2em] uppercase text-ivory/70"
        >
          Nikhaar &middot; Chapter I
        </motion.p>

        <h1 className="mt-4 font-display text-[13vw] leading-[0.92] md:text-[7vw]">
          {['The full', 'blossoming', 'of beauty.'].map((line, i) => (
            <span key={line} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: '110%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 + i * 0.1 }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="mt-6 max-w-sm text-sm text-ivory/70"
        >
          A study in nature, movement and Indian craft.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="mt-9 flex flex-wrap items-center gap-8"
        >
          <Link
            to="/shop"
            className="group inline-flex items-center gap-2 border-b border-ivory pb-1 text-[13px] tracking-[0.14em] uppercase"
          >
            Shop Nikhaar
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          <Link to="/collections" className="text-[13px] tracking-[0.14em] uppercase text-ivory/60 hover:text-ivory transition-colors">
            Discover the chapter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
