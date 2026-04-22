import React from 'react';
import CFASlide from '@/components/CFASlide';

const layers = [
  {
    label: 'Policy-as-code',
    detail: 'Eligibility rules encoded as open-source Python — Medicaid, CHIP, ACA in every state',
    color: '#2B1A78',
  },
  {
    label: 'Microsimulation engine',
    detail: 'PolicyEngine calculates benefits for any household configuration, instantly',
    color: '#4F3DAA',
  },
  {
    label: 'Life events interface',
    detail: 'Non-experts explore "what if I move to Texas?" or "what if we have a child?"',
    color: '#7B6FCC',
  },
];

export default function ArchitectureSlide() {
  return (
    <CFASlide variant="light">
      <div className="flex-1 flex flex-col justify-center px-20 pt-16">
        <p
          className="text-sm font-bold uppercase tracking-widest mb-6"
          style={{ color: '#2B1A78' }}
        >
          Under the hood
        </p>
        <h2
          className="text-5xl font-bold leading-tight mb-12"
          style={{
            fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif",
            color: '#2B1A78',
          }}
        >
          Reusable, open-source architecture
        </h2>

        <div className="flex flex-col gap-5 max-w-4xl">
          {layers.map((layer, i) => (
            <div key={i} className="flex items-start gap-6">
              <div
                className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: layer.color }}
              >
                {i + 1}
              </div>
              <div>
                <p className="text-xl font-bold" style={{ color: '#2B1A78' }}>
                  {layer.label}
                </p>
                <p className="text-base mt-1 leading-snug" style={{ color: '#555' }}>
                  {layer.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p
          className="mt-10 text-lg font-semibold"
          style={{ color: '#2B1A78' }}
        >
          github.com/PolicyEngine/policyengine-us
        </p>
      </div>
    </CFASlide>
  );
}
