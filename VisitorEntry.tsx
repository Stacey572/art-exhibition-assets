import { motion } from 'motion/react';
import { artworks } from '../data';
import ArtworkCard from '../components/ArtworkCard';
import BookingForm from '../components/BookingForm';
import { Grid, BookOpen, Calendar as CalendarIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function VisitorEntry() {
  const [viewMode, setViewMode] = useState<'gallery' | 'story'>('gallery');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Overview */}
      <section className="bg-warm-bg py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Visitor Information</span>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight italic">Experience <br />The Exhibition</h1>
            <p className="text-xl text-warm-muted leading-relaxed max-w-lg">
              "Bridging Generations" is open to the public from March 15 to April 30, 2026. 
              Join us at the Bangkok Art & Culture Centre (BACC) for a journey through time and memory.
            </p>
            <div className="space-y-4 pt-8">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-warm-ink/10 flex items-center justify-center">📍</div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-xs">Location</h4>
                  <p className="text-warm-muted">Bangkok Art & Culture Centre (BACC), Bangkok</p>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full border border-warm-ink/10 flex items-center justify-center">🕒</div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-xs mb-1">Hours</h4>
                  <p className="text-warm-muted">Tue - Sun, 10:00 AM - 06:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link to="/events" className="group flex items-center gap-3 text-warm-ink font-medium hover:text-warm-accent transition-all">
                <div className="w-12 h-12 rounded-full bg-warm-accent/10 flex items-center justify-center group-hover:bg-warm-accent group-hover:text-warm-bg transition-all">
                  <CalendarIcon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-widest font-bold">Special Program</span>
                  <span className="flex items-center gap-1">View Events & Workshops <ArrowRight size={14} /></span>
                </div>
              </Link>
            </div>
          </div>
          <BookingForm />
        </div>
      </section>

      {/* Online Exhibition */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-24">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Online Exhibition</span>
            <h2 className="text-5xl font-serif italic">The Digital Archive</h2>
          </div>
          <div className="flex bg-white p-1 rounded-full border border-warm-ink/10 shadow-sm">
            <button 
              onClick={() => setViewMode('gallery')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                viewMode === 'gallery' ? 'bg-warm-ink text-warm-bg shadow-md' : 'text-warm-muted hover:text-warm-ink'
              }`}
            >
              <Grid size={16} /> Gallery View
            </button>
            <button 
              onClick={() => setViewMode('story')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all ${
                viewMode === 'story' ? 'bg-warm-ink text-warm-bg shadow-md' : 'text-warm-muted hover:text-warm-ink'
              }`}
            >
              <BookOpen size={16} /> Story Mode
            </button>
          </div>
        </div>

        {viewMode === 'gallery' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {artworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
          </div>
        ) : (
          <div className="space-y-24">
            {artworks.map((artwork, idx) => (
              <div key={artwork.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-24 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-8 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <span className="text-xs uppercase tracking-widest text-warm-accent font-semibold">{artwork.category}</span>
                  <h3 className="text-5xl font-serif italic">{artwork.title}</h3>
                  <p className="text-xl text-warm-muted leading-relaxed italic">
                    "{artwork.seniorStory.substring(0, 150)}..."
                  </p>
                  <div className="flex gap-8 pt-8">
                    <div>
                      <h4 className="font-semibold uppercase tracking-widest text-xs mb-2">Senior</h4>
                      <p className="text-warm-muted">{artwork.seniorName}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold uppercase tracking-widest text-xs mb-2">Artist</h4>
                      <p className="text-warm-muted">{artwork.artistName}</p>
                    </div>
                  </div>
                  <motion.a 
                    href={`/artwork/${artwork.id}`}
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-2 text-warm-ink font-medium border-b border-warm-ink/20 pb-2 hover:border-warm-accent hover:text-warm-accent transition-all"
                  >
                    Read the Full Story
                  </motion.a>
                </div>
                <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img src={artwork.image} alt={artwork.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </motion.div>
  );
}
