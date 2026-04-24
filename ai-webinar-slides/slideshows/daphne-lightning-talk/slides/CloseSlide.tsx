import React from 'react';
import Image from 'next/image';
import CFASlide from '@/components/CFASlide';
import { assetPath } from '@/lib/assetPath';

export default function CloseSlide() {
  return (
    <CFASlide variant="dark">
      {/* Diagonal swoosh */}
      <div className="absolute bottom-0 right-0 w-[55%] h-full pointer-events-none">
        <Image
          src={assetPath('/cfa-assets/diagonal-purple.png')}
          alt=""
          fill
          className="object-cover object-right"
        />
      </div>

      <div className="flex-1 flex flex-row items-center relative z-10" style={{ paddingLeft: '8.8%', paddingRight: '8%' }}>
        {/* Left: text content */}
        <div className="flex flex-col justify-center flex-1">
          <h2
            className="text-6xl font-bold text-white leading-tight max-w-2xl"
            style={{ fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif" }}
          >
            Try it. Fork it. Reuse it.
          </h2>

          <div className="mt-10 flex flex-col gap-4 text-xl text-white/85">
            <p>🔗 policyengine.org/coverage-compass</p>
            <p>💻 github.com/PolicyEngine/coverage-compass</p>
            <p>✉️ daphne@policyengine.org</p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-14 h-14 relative overflow-hidden rounded-full border-2 border-white/40 flex-shrink-0">
              <Image src="/headshots/daphne-hansell.jpeg" alt="Daphne Hansell" fill className="object-cover" />
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Daphne Hansell</p>
              <p className="text-base text-white/65">Research Analyst, PolicyEngine</p>
            </div>
          </div>
        </div>

        {/* Right: QR code in dead space before swoosh */}
        <div className="flex items-center justify-center flex-1">
          <Image src="/qr-coverage-compass.png" alt="QR code" width={300} height={300} className="invert" />
        </div>
      </div>
    </CFASlide>
  );
}
