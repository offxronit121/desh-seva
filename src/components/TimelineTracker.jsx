import React from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

export default function TimelineTracker({ phases, activePhaseId }) {
  return (
    <div className="glass p-6 sticky top-4 max-h-[80vh] overflow-y-auto hidden md:block w-64">
      <h3 className="text-xl font-bold mb-6 text-[var(--primary)] border-b border-[var(--glass-border)] pb-2">
        Election Timeline
      </h3>
      <div className="space-y-6 relative">
        {/* Connecting line */}
        <div className="absolute left-[11px] top-4 bottom-4 w-0.5 bg-[var(--glass-border)] -z-10"></div>
        
        {phases.map((phase) => {
          const isCompleted = phase.id < activePhaseId;
          const isActive = phase.id === activePhaseId;
          
          return (
            <div key={phase.id} className="flex items-start gap-4">
              <div className="mt-1 bg-[var(--bg-dark)] rounded-full">
                {isCompleted ? (
                  <CheckCircle2 size={24} className="text-[var(--secondary)]" />
                ) : isActive ? (
                  <div className="w-6 h-6 rounded-full border-4 border-[var(--primary)] bg-[var(--bg-dark)] flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse"></div>
                  </div>
                ) : (
                  <Circle size={24} className="text-[var(--text-muted)]" />
                )}
              </div>
              <div>
                <p className={`text-sm font-semibold ${isActive ? 'text-[var(--primary)] text-lg' : isCompleted ? 'text-[var(--secondary)]' : 'text-[var(--text-muted)]'}`}>
                  Phase {phase.id}
                </p>
                <p className={`text-xs mt-1 ${isActive ? 'text-[var(--text-main)]' : 'text-[var(--text-muted)]'}`}>
                  {phase.phase}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
