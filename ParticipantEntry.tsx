import { motion } from 'motion/react';
import ApplicationForm from '../components/ApplicationForm';
import { UserPlus, Users, Palette, Globe } from 'lucide-react';

export default function ParticipantEntry() {
  const steps = [
    { icon: <UserPlus size={24} />, title: "Apply", desc: "Seniors and young artists submit their interest and skills." },
    { icon: <Users size={24} />, title: "Get Matched", desc: "We pair participants based on shared interests and complementary skills." },
    { icon: <Palette size={24} />, title: "Co-create", desc: "A 3-month collaborative process of dialogue and creation." },
    { icon: <Globe size={24} />, title: "Exhibit", desc: "Final works are showcased in our physical and digital galleries." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-32"
    >
      {/* Hero */}
      <section className="bg-warm-ink text-warm-bg py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Join the Exhibition</span>
            <h1 className="text-6xl md:text-7xl font-serif leading-tight italic">Become a <br />Participant</h1>
            <p className="text-xl text-warm-bg/60 leading-relaxed max-w-lg">
              We are looking for seniors with life stories to tell and young artists with the vision to translate those stories into modern art forms.
            </p>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <img 
              src="https://raw.githubusercontent.com/Stacey572/art-exhibition-assets/main/2.JPG" 
              alt="Participant"
              className="w-full h-full object-cover opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="space-y-8 p-12 bg-white rounded-3xl border border-warm-ink/5 shadow-sm">
            <h3 className="text-3xl font-serif italic">For Seniors</h3>
            <p className="text-warm-muted leading-relaxed">
              If you have a craft you've practiced for decades, a collection of life stories, or a deep connection to your cultural heritage, we want to hear from you. No prior "art" experience is necessary—your life is the art.
            </p>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest text-warm-accent">
              <li>• Age 65+</li>
              <li>• Willing to share stories</li>
              <li>• Open to collaboration</li>
            </ul>
          </div>
          <div className="space-y-8 p-12 bg-white rounded-3xl border border-warm-ink/5 shadow-sm">
            <h3 className="text-3xl font-serif italic">For Young Artists</h3>
            <p className="text-warm-muted leading-relaxed">
              If you are a digital artist, sound designer, painter, or sculptor looking to ground your work in deep human narrative and cultural history, this is for you. You will be paired with a senior mentor to co-create a unique piece.
            </p>
            <ul className="space-y-4 text-sm font-medium uppercase tracking-widest text-warm-accent">
              <li>• Age 18-35</li>
              <li>• Portfolio of work</li>
              <li>• Empathy-driven practice</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-warm-bg py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-24">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">The Process</span>
            <h2 className="text-5xl font-serif italic">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-warm-ink text-warm-bg flex items-center justify-center mx-auto mb-8 shadow-lg shadow-warm-ink/20">
                  {step.icon}
                </div>
                <h4 className="text-xl font-serif italic">{step.title}</h4>
                <p className="text-warm-muted leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-4xl mx-auto px-6 py-32">
        <ApplicationForm />
      </section>

      {/* Cultural Exchange */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-warm-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-8">
            <span className="text-sm uppercase tracking-[0.3em] text-warm-accent font-semibold">Cultural Exchange</span>
            <h2 className="text-5xl font-serif italic leading-tight">Cross-Asian <br />Collaboration</h2>
            <p className="text-xl text-warm-muted leading-relaxed">
              Our project emphasizes the rich diversity of Asian cultures. From the silk weavers of China to the tea masters of Japan and the spice merchants of India, we celebrate the threads that connect us all.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-full overflow-hidden bg-warm-accent/10 flex items-center justify-center p-8 text-center">
              <p className="font-serif italic text-xl">Cultural Fusion</p>
            </div>
            <div className="aspect-square rounded-full overflow-hidden bg-warm-ink text-warm-bg flex items-center justify-center p-8 text-center">
              <p className="font-serif italic text-xl">Generational Wisdom</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
