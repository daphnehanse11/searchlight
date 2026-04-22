import React from 'react';
import CFASlide from '@/components/CFASlide';

export default function CoverageCliffSlide() {
  return (
    <CFASlide variant="light">
      <div className="flex-1 flex flex-col justify-center px-20 pt-16">
        <p
          className="text-sm font-bold uppercase tracking-widest mb-6"
          style={{ color: '#2B1A78' }}
        >
          The problem
        </p>
        <h2
          className="text-5xl font-bold leading-tight max-w-4xl"
          style={{
            fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif",
            color: '#2B1A78',
          }}
        >
          Life changes health coverage in ways that are hard to predict.
        </h2>

        <div className="mt-12 grid grid-cols-3 gap-8 max-w-5xl">
          {[
            { event: 'Getting married', consequence: "Spouse's income can push a family off Medicaid" },
            { event: 'Having a child', consequence: "Household size can affect everyone's coverage, not just the new child's" },
            { event: 'Moving states', consequence: 'Medicaid thresholds vary by 2× across states' },
          ].map((item) => (
            <div
              key={item.event}
              className="rounded-xl p-6"
              style={{ backgroundColor: '#E6EBF9' }}
            >
              <p
                className="text-lg font-bold mb-2"
                style={{ color: '#2B1A78', fontFamily: "'Source Serif Pro', serif" }}
              >
                {item.event}
              </p>
              <p className="text-base leading-snug" style={{ color: '#3D2E6E' }}>
                {item.consequence}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xl max-w-3xl leading-relaxed" style={{ color: '#444' }}>
          Benefits navigators and policy analysts lack accessible tools to model these transitions across programs and states.
        </p>
      </div>
    </CFASlide>
  );
}
