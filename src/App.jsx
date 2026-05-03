import React, { useState } from 'react';
import electionData from './data/electionLifecycle.json';
import Flashcard from './components/Flashcard';
import TimelineTracker from './components/TimelineTracker';
import AIAssistantChat from './components/AIAssistantChat';
import { Flag } from 'lucide-react';

function App() {
  const [activePhaseId, setActivePhaseId] = useState(1);
  const [unlockedPhases, setUnlockedPhases] = useState([1]);

  const handleUnlock = (id) => {
    if (!unlockedPhases.includes(id + 1) && id < electionData.length) {
      setUnlockedPhases(prev => [...prev, id + 1]);
      setActivePhaseId(id + 1);
    }
  };

  const activePhaseContext = electionData.find(p => p.id === activePhaseId);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="glass m-4 p-6 text-center sticky top-4 z-30 shadow-xl">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Flag className="text-[var(--primary)]" size={32} />
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] via-white to-[var(--secondary)]">
            Desh Seva
          </h1>
          <Flag className="text-[var(--secondary)]" size={32} />
        </div>
        <p className="text-[var(--text-muted)] text-sm tracking-widest uppercase">
          The Indian Democratic Journey
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-12 flex gap-8">
        {/* Timeline (Left Side) */}
        <div className="w-1/4">
          <TimelineTracker phases={electionData} activePhaseId={activePhaseId} />
        </div>

        {/* Flashcards Area (Right Side) */}
        <div className="w-full md:w-3/4">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Explore the Phases</h2>
            <p className="text-[var(--text-muted)]">
              Flip the cards to learn. Answer the quiz to unlock the next phase!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {electionData.map((phase) => (
              <Flashcard 
                key={phase.id} 
                data={phase} 
                isLocked={!unlockedPhases.includes(phase.id)}
                onUnlock={handleUnlock}
              />
            ))}
          </div>
        </div>
      </main>

      {/* AI Assistant Chat Widget */}
      <AIAssistantChat activePhaseContext={activePhaseContext} />
    </div>
  );
}

export default App;
