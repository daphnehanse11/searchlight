import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export default function DaphneLightningSlide() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0D2F33] p-8">
      <div
        className="gradient-bg text-white relative overflow-hidden flex flex-col"
        style={{
          width: 'min(1080px, 95vh, 95vw)',
          aspectRatio: '1 / 1',
        }}
      >
        {/* Top: CFA Summit logo + Lightning Talk tag */}
        <div className="px-10 pt-10 relative z-10 flex items-center gap-6">
          <div className="relative" style={{ height: '52px', width: '260px' }}>
            <Image
              src={assetPath('/logos/organizations/code-for-america-summit.png')}
              alt="Code for America Summit"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-sm uppercase tracking-[0.25em] text-white/80 font-semibold">
            Lightning Talk
          </span>
        </div>

        {/* Date/time */}
        <div className="px-10 mt-6 relative z-10">
          <p className="text-lg text-white/85 font-light">
            Thursday, May 7, 2026 · 2–3 PM
          </p>
        </div>

        {/* Title block */}
        <div className="px-10 mt-6 relative z-10">
          <div className="w-16 h-1.5 bg-white/40 rounded-full mb-4" />
          <h1 className="text-[2.4rem] font-extrabold leading-[1.05] tracking-tight">
            Simulating Life Changes to Understand Health Coverage and Costs
          </h1>
        </div>

        {/* Presenter card — centered, squarer */}
        <div className="flex-1 px-10 pb-10 relative z-10 flex items-center justify-center">
          <div className="flex flex-col items-center gap-5 bg-white rounded-2xl px-10 py-9 shadow-xl" style={{ width: '460px' }}>
            <div className="w-[240px] h-[240px] relative overflow-hidden rounded-full flex-shrink-0">
              <Image
                src={assetPath('/headshots/daphne-hansell.jpeg')}
                alt="Daphne Hansell"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center text-center">
              <p className="text-xl font-semibold text-[#1D4044] leading-tight">
                Daphne Hansell
              </p>
              <p className="text-sm text-[#4a6363] mt-1.5 leading-snug">
                Research Analyst
              </p>
              <div className="mt-4 flex items-center justify-center">
                <div
                  className="relative flex-shrink-0"
                  style={{ height: '52px', width: '180px' }}
                >
                  <Image
                    src={assetPath('/logos/teal.svg')}
                    alt="PolicyEngine"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
