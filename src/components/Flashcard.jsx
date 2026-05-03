import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

export default function Flashcard({ data, isLocked, onUnlock }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  
  const Icon = LucideIcons[data.icon] || LucideIcons.HelpCircle;

  const handleFlip = () => {
    if (isLocked) {
      setShowQuiz(true);
    } else {
      setIsFlipped(!isFlipped);
    }
  };

  const handleQuizAnswer = (selectedIndex) => {
    if (selectedIndex === data.quiz.correct) {
      onUnlock(data.id);
      setShowQuiz(false);
      setIsFlipped(true); // Flip open automatically when unlocked
    } else {
      alert("Incorrect! Hint: Think about the core purpose of this phase.");
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto h-80 perspective-1000 my-4">
      <div 
        className={`w-full h-full relative preserve-3d transition-transform cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={!showQuiz ? handleFlip : undefined}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass flex flex-col items-center justify-center p-6 text-center hover:shadow-[0_0_15px_rgba(249,115,22,0.3)] transition-shadow">
          <div className={`p-4 rounded-full mb-4 ${isLocked ? 'bg-gray-700 text-gray-400' : 'bg-[var(--primary)] text-white'}`}>
             {isLocked ? <LucideIcons.Lock size={32} /> : <Icon size={32} />}
          </div>
          <h2 className="text-sm uppercase tracking-widest text-[var(--text-muted)] mb-2">Phase {data.id}</h2>
          <h1 className="text-2xl font-bold mb-2">{data.phase}</h1>
          <p className="text-lg italic text-[var(--accent)]">"{data.title}"</p>
          {isLocked && <p className="text-sm mt-4 text-[var(--text-muted)]">Tap to unlock</p>}
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass flex flex-col justify-center p-6 text-left">
          <h2 className="text-xl font-bold mb-4 border-b border-[var(--glass-border)] pb-2 flex items-center gap-2">
            <Icon size={20} className="text-[var(--secondary)]" /> 
            {data.phase}
          </h2>
          <ul className="space-y-3">
            {data.points.map((point, idx) => (
              <li key={idx} className="flex items-start text-sm">
                <span className="text-[var(--primary)] mr-2 mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quiz Modal Overlay */}
      {showQuiz && (
        <div className="absolute inset-0 z-10 glass bg-opacity-90 flex flex-col items-center justify-center p-6 animate-fade-in text-center rounded-2xl">
          <LucideIcons.HelpCircle size={32} className="text-[var(--accent)] mb-4" />
          <p className="text-md font-semibold mb-6">{data.quiz.question}</p>
          <div className="flex flex-col gap-3 w-full">
            {data.quiz.options.map((opt, idx) => (
              <button 
                key={idx}
                onClick={() => handleQuizAnswer(idx)}
                className="w-full py-2 px-4 rounded-lg bg-[var(--bg-dark)] border border-[var(--glass-border)] hover:bg-[var(--primary)] transition-colors text-sm"
              >
                {opt}
              </button>
            ))}
          </div>
          <button 
            className="mt-4 text-xs text-[var(--text-muted)] underline"
            onClick={(e) => { e.stopPropagation(); setShowQuiz(false); }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
