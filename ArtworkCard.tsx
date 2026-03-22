import { Link } from 'react-router-dom';
import { Artwork } from '../data';
import { motion } from 'motion/react';

export default function ArtworkCard({ artwork }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group"
    >
      <Link to={`/artwork/${artwork.id}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6">
          <img 
            src={artwork.image} 
            alt={artwork.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-warm-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="bg-warm-bg text-warm-ink px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest">
              View Story
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <span className="text-xs uppercase tracking-widest text-warm-accent font-semibold">
            {artwork.category}
          </span>
          <h3 className="text-2xl font-serif italic">{artwork.title}</h3>
          <p className="text-sm text-warm-muted">
            {artwork.seniorName} & {artwork.artistName}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
