import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import VisitorEntry from './pages/VisitorEntry';
import ParticipantEntry from './pages/ParticipantEntry';
import ArtworkDetail from './pages/ArtworkDetail';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-warm-accent selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/visit" element={<VisitorEntry />} />
              <Route path="/join" element={<ParticipantEntry />} />
              <Route path="/artwork/:id" element={<ArtworkDetail />} />
              <Route path="/events" element={<Events />} />
              <Route path="/event/:id" element={<EventDetail />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
