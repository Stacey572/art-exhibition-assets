import { motion } from 'motion/react';
import { events } from '../data';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Header */}
      <section className="bg-warm-bg py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Program</span>
          <h1 className="text-6xl md:text-7xl font-serif italic leading-tight">Events & Tours</h1>
          <p className="text-xl text-warm-muted leading-relaxed italic">
            Experience the exhibition through guided tours, interactive workshops, and deep cultural dialogues.
          </p>
        </div>
      </section>

      {/* Events List */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {events.map((event) => (
            <motion.div
              key={event.id}
              whileHover={{ y: -10 }}
              className="group bg-white rounded-[2rem] overflow-hidden border border-warm-ink/5 shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[16/9] overflow-hidden relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-widest font-bold text-warm-accent shadow-sm">
                    {event.type}
                  </span>
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-serif italic leading-tight group-hover:text-warm-accent transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-warm-muted leading-relaxed line-clamp-3">
                    {event.description}
                  </p>
                </div>
                
                <div className="space-y-3 pt-6 border-t border-warm-ink/5">
                  <div className="flex items-center gap-3 text-sm text-warm-muted">
                    <Calendar size={16} className="text-warm-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-warm-muted">
                    <Clock size={16} className="text-warm-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-warm-muted">
                    <MapPin size={16} className="text-warm-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Link 
                  to={`/event/${event.id}`}
                  className="block w-full text-center py-4 rounded-full border border-warm-ink/10 font-medium uppercase tracking-widest text-xs hover:bg-warm-ink hover:text-warm-bg transition-all"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cultural Note */}
      <section className="max-w-4xl mx-auto px-6 py-32 text-center border-t border-warm-ink/10">
        <div className="space-y-8">
          <h2 className="text-4xl font-serif italic">A Curated Experience</h2>
          <p className="text-lg text-warm-muted leading-relaxed max-w-2xl mx-auto">
            Our programs are designed to foster genuine connection. Whether you're listening to an artist's perspective or sharing a loom with a senior master, you're contributing to the living history of the exhibition.
          </p>
        </div>
      </section>
    </motion.div>
  );
}
