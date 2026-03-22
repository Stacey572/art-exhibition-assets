import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/8.JPG" 
          alt=""
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-warm-bg/20 via-transparent to-warm-bg" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold mb-6"
        >
          An Intergenerational Art Exhibition
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8"
        >
          Bridging Generations <br />
          <span className="italic">Through Art</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-warm-muted max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          A collaborative journey where seniors and young artists co-create artworks that weave together life stories and cultural memory.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link to="/visit" className="group flex items-center gap-2 bg-warm-ink text-warm-bg px-8 py-4 rounded-full font-medium hover:bg-warm-accent transition-all">
            Visit the Exhibition
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/join" className="px-8 py-4 rounded-full border border-warm-ink/20 font-medium hover:bg-warm-ink hover:text-warm-bg transition-all">
            Join as Participant
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
