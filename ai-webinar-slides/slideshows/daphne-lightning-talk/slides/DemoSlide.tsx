import React from 'react';
import CFASlide from '@/components/CFASlide';

export default function DemoSlide() {
  return (
    <CFASlide variant="dark">
      <div className="flex-1 flex flex-col items-center justify-center gap-6 relative z-10">
        <p
          className="text-sm font-bold uppercase tracking-[0.25em] text-white/60"
        >
          Live demo
        </p>
        <h2
          className="text-7xl font-bold text-white text-center"
          style={{ fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif" }}
        >
          Life decisions simulator
        </h2>
        <p className="text-2xl text-white/75 text-center mt-2">
          Medicaid · CHIP · ACA premium tax credits · All 50 states
        </p>
      </div>
    </CFASlide>
  );
}
