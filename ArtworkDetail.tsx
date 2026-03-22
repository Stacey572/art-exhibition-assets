import { useParams, Link, useNavigate } from 'react-router-dom';
import { artworks } from '../data';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function ArtworkDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artwork = artworks.find(a => a.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!artwork) return <div className="py-32 text-center">Artwork not found</div>;

  const currentIndex = artworks.findIndex(a => a.id === id);
  const nextArtwork = artworks[(currentIndex + 1) % artworks.length];
  const prevArtwork = artworks[(currentIndex - 1 + artworks.length) % artworks.length];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Hero */}
      <section className="relative h-[80vh] overflow-hidden">
        <img 
          src={artwork.image} 
          alt={artwork.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-bg via-transparent to-transparent" />
        <div className="absolute top-12 left-12">
          <Link to="/visit" className="flex items-center gap-2 bg-warm-bg/80 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium hover:bg-warm-ink hover:text-warm-bg transition-all">
            <ArrowLeft size={16} /> Back to Gallery
          </Link>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-warm-ink/5 space-y-16">
          <header className="space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">{artwork.category}</span>
            <h1 className="text-6xl md:text-7xl font-serif italic leading-tight">{artwork.title}</h1>
            <div className="flex flex-wrap justify-center gap-8 pt-4">
              <div className="text-center">
                <h4 className="font-semibold uppercase tracking-widest text-xs mb-1">Senior Contributor</h4>
                <p className="text-warm-muted">{artwork.seniorName}</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold uppercase tracking-widest text-xs mb-1">Young Artist</h4>
                <p className="text-warm-muted">{artwork.artistName}</p>
              </div>
            </div>
          </header>

          <div className="space-y-24">
            {/* Senior Story */}
            <section className="space-y-8">
              <h3 className="text-3xl font-serif italic border-b border-warm-ink/10 pb-4">The Senior's Story</h3>
              <p className="text-2xl font-serif leading-relaxed text-warm-ink/80 italic">
                "{artwork.seniorStory}"
              </p>
            </section>

            {/* Artist Perspective */}
            <section className="space-y-8">
              <h3 className="text-3xl font-serif italic border-b border-warm-ink/10 pb-4">Artist Perspective</h3>
              <p className="text-xl text-warm-muted leading-relaxed">
                {artwork.artistPerspective}
              </p>
            </section>

            {/* Cultural Meaning */}
            <section className="space-y-8 bg-warm-bg/50 p-12 rounded-3xl">
              <h3 className="text-3xl font-serif italic">Cultural Meaning</h3>
              <p className="text-xl text-warm-muted leading-relaxed">
                {artwork.culturalMeaning}
              </p>
            </section>

            {/* Timeline */}
            <section className="space-y-12">
              <h3 className="text-3xl font-serif italic border-b border-warm-ink/10 pb-4">Creation Process</h3>
              <div className="space-y-8">
                {artwork.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-8">
                    <div className="text-warm-accent font-bold text-xl font-serif w-24 flex-shrink-0">{item.year}</div>
                    <div className="text-lg text-warm-muted">{item.event}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-24">
          <button 
            onClick={() => navigate(`/artwork/${prevArtwork.id}`)}
            className="group flex items-center gap-4 text-left"
          >
            <div className="w-12 h-12 rounded-full border border-warm-ink/10 flex items-center justify-center group-hover:bg-warm-ink group-hover:text-warm-bg transition-all">
              <ChevronLeft size={20} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-warm-muted">Previous</span>
              <p className="font-serif italic text-lg">{prevArtwork.title}</p>
            </div>
          </button>

          <button 
            onClick={() => navigate(`/artwork/${nextArtwork.id}`)}
            className="group flex items-center gap-4 text-right"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest text-warm-muted">Next</span>
              <p className="font-serif italic text-lg">{nextArtwork.title}</p>
            </div>
            <div className="w-12 h-12 rounded-full border border-warm-ink/10 flex items-center justify-center group-hover:bg-warm-ink group-hover:text-warm-bg transition-all">
              <ChevronRight size={20} />
            </div>
          </button>
        </div>
      </article>
    </motion.div>
  );
}
