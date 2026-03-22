import { motion } from 'motion/react';
import HeroSection from '../components/HeroSection';
import ArtworkCard from '../components/ArtworkCard';
import { artworks, events } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-32 pb-32"
    >
      <HeroSection />

      {/* Concept Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-8">
          <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Our Vision</span>
          <h2 className="text-5xl md:text-6xl font-serif leading-tight">
            Where Memory Meets <br />
            <span className="italic">Modernity</span>
          </h2>
          <p className="text-xl text-warm-muted leading-relaxed">
            In an era of rapid digital transformation, the wisdom of our elders and the innovation of our youth often exist in separate worlds. 
            <br /><br />
            "Bridging Generations" is a sanctuary for dialogue. We pair seniors—the keepers of cultural memory and traditional crafts—with young artists who speak the language of the future. Together, they create artworks that are not just objects, but bridges across time.
          </p>
          <Link to="/visit" className="inline-flex items-center gap-2 text-warm-ink font-medium border-b border-warm-ink/20 pb-2 hover:border-warm-accent hover:text-warm-accent transition-all">
            Learn more about the process <ArrowRight size={18} />
          </Link>
        </div>
        <div className="relative aspect-square rounded-3xl overflow-hidden">
          <img 
            src="https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/9.JPG" 
            alt="Collaboration"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Featured Works */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div className="space-y-4">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">The Collection</span>
            <h2 className="text-5xl font-serif italic">Featured Works</h2>
          </div>
          <Link to="/visit" className="text-sm uppercase tracking-widest font-semibold border-b border-warm-ink/20 pb-1 hover:border-warm-accent transition-all">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artworks.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>

      {/* Events & Tours Preview */}
      <section className="bg-warm-bg/50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div className="space-y-4">
              <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Program</span>
              <h2 className="text-5xl font-serif italic">Events & Tours</h2>
            </div>
            <Link to="/events" className="text-sm uppercase tracking-widest font-semibold border-b border-warm-ink/20 pb-1 hover:border-warm-accent transition-all">
              View All Events
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.slice(0, 4).map(event => (
              <Link key={event.id} to={`/event/${event.id}`} className="group bg-white p-8 rounded-3xl border border-warm-ink/5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-warm-accent bg-warm-accent/5 px-3 py-1 rounded-full">
                      {event.type}
                    </span>
                    <Calendar size={16} className="text-warm-muted" />
                  </div>
                  <h3 className="text-xl font-serif italic group-hover:text-warm-accent transition-colors">{event.title}</h3>
                  <p className="text-sm text-warm-muted leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  <div className="pt-4 border-t border-warm-ink/5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-warm-ink">{event.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-warm-ink text-warm-bg py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-serif leading-tight">
              Experience the <br />
              <span className="italic">Exhibition</span>
            </h2>
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic">On-site Exhibition</h3>
                <p className="text-warm-bg/60 leading-relaxed">
                  Join us at the Bangkok Art & Culture Centre (BACC) for an immersive physical experience. Touch the textures, hear the soundscapes, and witness the scale of collaboration in person.
                </p>
                <p className="text-sm uppercase tracking-widest font-semibold text-warm-accent">
                  March 15 - April 30, 2026 • Bangkok
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-serif italic">Online Exhibition</h3>
                <p className="text-warm-bg/60 leading-relaxed">
                  Explore the digital archive from anywhere in the world. Our Story Mode offers a deep dive into the personal narratives behind every piece.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden mt-12">
              <img src="https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/10.JPG" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img src="https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/1.JPG" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-6 text-center space-y-12">
        <h2 className="text-5xl md:text-6xl font-serif italic">Be Part of the Story</h2>
        <p className="text-xl text-warm-muted leading-relaxed">
          Whether you are a visitor, a potential participant, or a supporter, your presence helps bridge the gap between generations.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link to="/visit" className="bg-warm-ink text-warm-bg px-10 py-5 rounded-full font-medium hover:bg-warm-accent transition-all uppercase tracking-widest text-sm">
            Book a Visit
          </Link>
          <Link to="/join" className="px-10 py-5 rounded-full border border-warm-ink/20 font-medium hover:bg-warm-ink hover:text-warm-bg transition-all uppercase tracking-widest text-sm">
            Apply to Join
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
