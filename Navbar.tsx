import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-warm-bg/80 backdrop-blur-md border-b border-warm-ink/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl tracking-tight font-bold">
          Bridging Generations
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
          <Link to="/visit" className="hover:text-warm-accent transition-colors">Visit</Link>
          <Link to="/events" className="hover:text-warm-accent transition-colors">Events</Link>
          <Link to="/join" className="hover:text-warm-accent transition-colors">Join</Link>
          <a href="#donate" className="px-4 py-2 border border-warm-ink/20 rounded-full hover:bg-warm-ink hover:text-warm-bg transition-all">
            Donate
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
