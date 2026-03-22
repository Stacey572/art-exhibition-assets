import { useState } from 'react';

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="bg-warm-bg border border-warm-ink/10 p-12 rounded-3xl text-center">
        <h3 className="font-serif text-3xl mb-4 italic">Application Received</h3>
        <p className="text-warm-muted mb-8">Thank you for your interest in joining the exhibition. Our team will review your application and get back to you soon.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-warm-accent font-medium underline underline-offset-8"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-12 rounded-3xl shadow-xl shadow-warm-ink/5 border border-warm-ink/5">
      <h3 className="font-serif text-3xl mb-8 italic">Join the Movement</h3>
      <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">Full Name</label>
            <input 
              type="text" 
              required
              className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">Age</label>
            <input 
              type="number" 
              required
              className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">I am a...</label>
            <select required className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent">
              <option value="">Select Role</option>
              <option value="senior">Senior (Storyteller/Craftsperson)</option>
              <option value="artist">Young Artist</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">Country (Asia Focus)</label>
            <input 
              type="text" 
              required
              placeholder="e.g. Japan, India, Singapore"
              className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">Skills or Art Form</label>
          <input 
            type="text" 
            required
            placeholder="e.g. Calligraphy, Digital Art, Pottery"
            className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs uppercase tracking-widest font-semibold text-warm-muted">Motivation</label>
          <textarea 
            required
            rows={4}
            placeholder="Tell us why you want to participate..."
            className="w-full bg-warm-bg/50 border border-warm-ink/10 rounded-xl px-6 py-4 focus:outline-none focus:border-warm-accent resize-none"
          />
        </div>

        <button className="w-full bg-warm-ink text-warm-bg py-5 rounded-full font-medium hover:bg-warm-accent transition-all uppercase tracking-widest text-sm">
          Submit Application
        </button>
      </form>
    </div>
  );
}
