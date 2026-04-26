import React from 'react';
import Image from 'next/image';
import CFASlide from '@/components/CFASlide';
import { assetPath } from '@/lib/assetPath';

export default function CloseSlide() {
  return (
    <CFASlide variant="light" hideDecorations hideFooter>
      {/* Purple diagonal on the right */}
      <div className="absolute bottom-0 right-0 w-[45%] h-full pointer-events-none z-0">
        <Image
          src={assetPath('/cfa-assets/diagonal-purple.png')}
          alt=""
          fill
          className="object-cover object-right"
        />
        {/* CFA Summit logo inside the purple area */}
        <div className="absolute bottom-8 right-8">
          <Image
            src={assetPath('/cfa-assets/cfa-summit-white.png')}
            alt="Code for America Summit"
            width={200}
            height={32}
            className="object-contain"
          />
        </div>
      </div>

      {/* Left content */}
      <div className="flex-1 flex flex-col justify-center relative z-10" style={{ paddingLeft: '8.8%', paddingRight: '50%' }}>
        <h2
          className="text-6xl font-bold leading-tight"
          style={{ fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif", color: '#1a1a2e' }}
        >
          Try it. Fork it. Reuse it.
        </h2>

        <div className="mt-10 flex flex-col gap-3 text-xl" style={{ color: '#333' }}>
          <p>To learn more visit</p>
          <p className="font-medium">policyengine.org/coverage-compass</p>
        </div>

        <div className="mt-8 flex flex-col gap-2 text-lg" style={{ color: '#555' }}>
          <p>💻 github.com/PolicyEngine/coverage-compass</p>
          <p>✉️ daphne@policyengine.org</p>
        </div>

        <div className="mt-10">
          <Image src="/qr-coverage-compass.png" alt="QR code" width={160} height={160} />
        </div>
      </div>
    </CFASlide>
  );
}
