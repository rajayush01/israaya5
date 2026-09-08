import { motion, AnimatePresence } from 'framer-motion'
import emblem from '../../assets/IS Emblem.png'
import logo from "../../assets/ISRAAYA LOGO.svg"
import motif from "../../assets/ISRAAYA MOTIF.svg"

export function Loader({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ivory"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: '0.02em' }}
            animate={{ opacity: 1, letterSpacing: '0.08em' }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-3xl h-40 w-40 flex flex-col items-center justify-center"
          >
            <img src={emblem} alt="Emblem"/>
            <img src={motif} alt="Motif" className='h-20 w-20 -mt-16'/>
            <img src={logo} alt="Logo" />
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
