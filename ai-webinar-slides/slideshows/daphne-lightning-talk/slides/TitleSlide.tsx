import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function TitleSlide() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{
        backgroundColor: '#2B1A78',
        fontFamily: "'Source Sans Pro', 'Proxima Nova', Arial, sans-serif",
      }}
    >
      {/* Left accent bar */}
      <div
        className="absolute top-0 left-0 h-full"
        style={{ width: '2.49%', backgroundColor: '#5650BE' }}
      />

      {/* Title — 42pt = 6.7% of slide width at 16:9 */}
      <div
        className="absolute"
        style={{
          left: '8.8%',
          top: '24%',
          width: '83.9%',
          color: '#FFFFFF',
          fontFamily: "'Source Serif Pro', 'Libre Baskerville', 'Times New Roman', serif",
          fontSize: '4.6vw',
          fontWeight: 700,
          lineHeight: 1.1,
        }}
      >
        Simulating Life Changes to<br />Understand Health Coverage and Costs
      </div>

      {/* Name — bold, #A1B4EA */}
      <div
        className="absolute font-bold"
        style={{
          left: '8.8%',
          top: '58.1%',
          color: '#A1B4EA',
          fontSize: '2.92vw',
          fontFamily: "'Source Sans Pro', Arial, sans-serif",
        }}
      >
        Daphne Hansell
      </div>

      {/* Role — regular white */}
      <div
        className="absolute"
        style={{
          left: '8.8%',
          top: '65%',
          color: '#FFFFFF',
          fontSize: '1.94vw',
          fontFamily: "'Source Sans Pro', Arial, sans-serif",
          fontWeight: 400,
        }}
      >
        Research Analyst
      </div>

      {/* Org — italic white */}
      <div
        className="absolute italic"
        style={{
          left: '8.8%',
          top: '69.5%',
          color: '#FFFFFF',
          fontSize: '1.94vw',
          fontFamily: "'Source Serif Pro', 'Libre Baskerville', serif",
          fontWeight: 400,
        }}
      >
        PolicyEngine
      </div>

      {/* CFA Summit logo (white) — bottom right */}
      <div
        className="absolute"
        style={{
          left: '77.7%',
          top: '90.7%',
          width: '18.4%',
          height: '3.7%',
        }}
      >
        <Image
          src={assetPath('/cfa-assets/cfa-summit-white.png')}
          alt="Code for America Summit"
          fill
          className="object-contain object-left"
        />
      </div>
    </div>
  );
}
