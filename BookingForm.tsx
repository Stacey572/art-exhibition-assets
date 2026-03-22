import { useState } from 'react';
import { Calendar, Clock, User, Mail } from 'lucide-react';

export default function BookingForm() {
  const [booked, setBooked] = useState(false);

  if (booked) {
    return (
      <div className="bg-warm-bg border border-warm-ink/10 p-12 rounded-3xl text-center">
        <h3 className="font-serif text-3xl mb-4 italic">Booking Confirmed</h3>
        <p className="text-warm-muted mb-8">We look forward to seeing you at the exhibition. A confirmation has been sent to your email.</p>
        <button 
          onClick={() => setBooked(false)}
          className="text-warm-accent font-medium underline underline-offset-8"
        >
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-12 rounded-3xl shadow-xl shadow-warm-ink/5 border border-warm-ink/5">
      <h3 className="font-serif text-3xl mb-8 italic">Reserve Your Visit</h3>
      <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setBooked(true); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted flex items-center gap-2">
              <Calendar size={14} /> Select Date
            </label>
            <input 
              type="date" 
              required
              className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted flex items-center gap-2">
              <Clock size={14} /> Select Time
            </label>
            <select required className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent">
              <option value="">Choose a slot</option>
              <option value="10:00">10:00 AM - 12:00 PM</option>
              <option value="12:00">12:00 PM - 02:00 PM</option>
              <option value="14:00">02:00 PM - 04:00 PM</option>
              <option value="16:00">04:00 PM - 06:00 PM</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted flex items-center gap-2">
            <User size={14} /> Full Name
          </label>
          <input 
            type="text" 
            required
            placeholder="Your Name"
            className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted flex items-center gap-2">
            <Mail size={14} /> Email Address
          </label>
          <input 
            type="email" 
            required
            placeholder="your@email.com"
            className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
          />
        </div>

        <button className="w-full bg-warm-ink text-warm-bg py-5 rounded-full font-medium hover:bg-warm-accent transition-all uppercase tracking-widest text-sm">
          Confirm Reservation
        </button>

        <p className="text-xs text-warm-muted leading-relaxed text-center mt-6">
          Admission is free. If you wish, you may donate any amount to support the project and receive a small souvenir as a token of appreciation.
        </p>
      </form>
    </div>
  );
}
