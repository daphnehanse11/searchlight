import React from 'react';
import CFASlide from '@/components/CFASlide';

const leftBullets = [
  'Free, open-source simulation of US tax and benefit policy',
  'All 50 states + DC — SNAP, Medicaid, ACA, EITC, Child Tax Credit, and more',
];

const rightBullets = [
  'Model any household instantly, or scale to national population estimates',
  'MIT-licensed: use it, fork it, build on it',
];

export default function AboutSlide() {
  return (
    <CFASlide variant="light" hideDecorations sessionTitle="Simulating Life Changes to Understand Health Coverage and Costs">
      <div className="flex-1 flex flex-col px-16 pt-12 pb-4">
        {/* Title */}
        <h2
          className="font-bold leading-tight"
          style={{
            fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif",
            fontSize: '3.6vw',
            color: '#111111',
            maxWidth: '80%',
          }}
        >
          PolicyEngine: free, open-source microsimulation
        </h2>

        {/* 2-column bullets */}
        <div className="flex-1 grid grid-cols-2 gap-x-16 mt-12 items-start">
          <div className="flex flex-col gap-8">
            {leftBullets.map((b) => (
              <div key={b} className="flex items-start gap-4">
                <span className="flex-shrink-0 text-2xl leading-tight mt-0.5">●</span>
                <span style={{ fontFamily: "'Source Sans Pro', Arial, sans-serif", fontSize: '1.5vw', lineHeight: 1.45, color: '#111' }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {rightBullets.map((b) => (
              <div key={b} className="flex items-start gap-4">
                <span className="flex-shrink-0 text-2xl leading-tight mt-0.5">●</span>
                <span style={{ fontFamily: "'Source Sans Pro', Arial, sans-serif", fontSize: '1.5vw', lineHeight: 1.45, color: '#111' }}>
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CFASlide>
  );
}
