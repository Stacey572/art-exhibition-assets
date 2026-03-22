import { useState } from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const [amount, setAmount] = useState<number | null>(null);
  const amounts = [10, 25, 50, 100];

  return (
    <footer className="bg-warm-ink text-warm-bg py-24 px-6" id="donate">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
        <div className="lg:col-span-2">
          <h2 className="font-serif text-4xl mb-6">Support Intergenerational Art</h2>
          <p className="text-warm-bg/60 max-w-md mb-8 leading-relaxed">
            Your contribution helps us provide materials, space, and mentorship for seniors and young artists to co-create and preserve cultural heritage.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {amounts.map((a) => (
              <button
                key={a}
                onClick={() => setAmount(a)}
                className={`px-6 py-3 rounded-full border border-warm-bg/20 transition-all ${
                  amount === a ? 'bg-warm-bg text-warm-ink' : 'hover:border-warm-bg/60'
                }`}
              >
                ${a}
              </button>
            ))}
            <input 
              type="number" 
              placeholder="Custom" 
              className="bg-transparent border border-warm-bg/20 rounded-full px-6 py-3 w-32 focus:outline-none focus:border-warm-bg/60"
            />
          </div>
          <button className="flex items-center gap-2 bg-warm-accent text-white px-8 py-4 rounded-full font-medium hover:opacity-90 transition-opacity">
            <Heart size={18} />
            Donate Now
          </button>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6 italic">Navigation</h3>
          <ul className="space-y-4 text-warm-bg/60">
            <li><a href="/" className="hover:text-warm-bg">Home</a></li>
            <li><a href="/visit" className="hover:text-warm-bg">Exhibition</a></li>
            <li><a href="/join" className="hover:text-warm-bg">Join Us</a></li>
            <li><a href="#" className="hover:text-warm-bg">About</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-xl mb-6 italic">Contact</h3>
          <ul className="space-y-4 text-warm-bg/60">
            <li>hello@bridginggenerations.art</li>
            <li>+66 2 123 4567</li>
            <li>Sukhumvit, Bangkok</li>
          </ul>
          <div className="flex gap-4 mt-8">
            <div className="w-10 h-10 rounded-full border border-warm-bg/20 flex items-center justify-center hover:bg-warm-bg hover:text-warm-ink transition-all cursor-pointer">In</div>
            <div className="w-10 h-10 rounded-full border border-warm-bg/20 flex items-center justify-center hover:bg-warm-bg hover:text-warm-ink transition-all cursor-pointer">Ig</div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-warm-bg/10 text-warm-bg/40 text-sm flex justify-between items-center">
        <p>© 2026 Bridging Generations. All rights reserved.</p>
        <p>A Cultural Heritage Project</p>
      </div>
    </footer>
  );
}
