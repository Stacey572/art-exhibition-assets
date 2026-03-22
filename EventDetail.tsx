import { useParams, Link, useNavigate } from 'react-router-dom';
import { events } from '../data';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Clock, MapPin, User, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === id);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) return <div className="py-32 text-center">Event not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Hero */}
      <section className="relative h-[60vh] overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-warm-bg via-transparent to-transparent" />
        <div className="absolute top-12 left-12">
          <Link to="/events" className="flex items-center gap-2 bg-warm-bg/80 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium hover:bg-warm-ink hover:text-warm-bg transition-all">
            <ArrowLeft size={16} /> Back to Events
          </Link>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-6 -mt-32 relative z-10">
        <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-warm-ink/5 space-y-16">
          <header className="space-y-6 text-center">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">{event.type}</span>
            <h1 className="text-5xl md:text-6xl font-serif italic leading-tight">{event.title}</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-warm-ink/5">
              <div className="flex flex-col items-center gap-2">
                <Calendar size={20} className="text-warm-accent" />
                <span className="text-xs uppercase tracking-widest font-bold text-warm-muted">Date</span>
                <p className="font-medium">{event.date}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock size={20} className="text-warm-accent" />
                <span className="text-xs uppercase tracking-widest font-bold text-warm-muted">Time</span>
                <p className="font-medium">{event.time}</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin size={20} className="text-warm-accent" />
                <span className="text-xs uppercase tracking-widest font-bold text-warm-muted">Location</span>
                <p className="font-medium">{event.location}</p>
              </div>
            </div>
          </header>

          <div className="space-y-16">
            <section className="space-y-8">
              <h3 className="text-3xl font-serif italic border-b border-warm-ink/10 pb-4">About the Event</h3>
              <p className="text-xl text-warm-muted leading-relaxed">
                {event.description}
              </p>
            </section>

            <section className="space-y-8 bg-warm-bg/50 p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-warm-ink text-warm-bg flex items-center justify-center">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-widest text-xs">Hosted By</h4>
                  <p className="text-xl font-serif italic">{event.host}</p>
                </div>
              </div>
              {event.limit && (
                <div className="flex items-center gap-3 text-sm text-warm-muted">
                  <Users size={16} className="text-warm-accent" />
                  <span>Limited to {event.limit} participants</span>
                </div>
              )}
            </section>

            {/* Register Action */}
            <section className="text-center pt-12 border-t border-warm-ink/5">
              {!isRegistered ? (
                <div className="space-y-8">
                  <p className="text-warm-muted italic">Join us for this unique intergenerational experience.</p>
                  <button 
                    onClick={() => setIsRegistered(true)}
                    className="bg-warm-ink text-warm-bg px-12 py-5 rounded-full font-medium hover:bg-warm-accent transition-all uppercase tracking-widest text-sm shadow-xl shadow-warm-ink/10"
                  >
                    Register for Event
                  </button>
                </div>
              ) : (
                <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-emerald-50 text-emerald-800 p-12 rounded-3xl space-y-4"
                >
                  <h4 className="text-2xl font-serif italic">Registration Confirmed</h4>
                  <p className="text-emerald-700/80">We've reserved your spot for {event.title}. We look forward to seeing you there.</p>
                </motion.div>
              )}
            </section>
          </div>
        </div>

        {/* Other Events CTA */}
        <div className="text-center mt-24">
          <Link to="/events" className="text-sm uppercase tracking-widest font-semibold border-b border-warm-ink/20 pb-1 hover:border-warm-accent transition-all">
            Explore More Events
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
