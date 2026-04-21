import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

const presenters = [
  {
    name: 'Max Ghenis',
    title: 'CEO',
    photo: '/headshots/max-ghenis.png',
    logo: '/logos/teal.svg',
    orgAlt: 'PolicyEngine',
    logoHeight: 64,
    logoMaxWidth: 220,
  },
  {
    name: 'Jill Bauman',
    title: 'Founding President & CEO',
    photo: '/headshots/jill-bauman.png',
    logo: '/logos/organizations/amplifi.png',
    orgAlt: 'Amplifi',
    logoHeight: 76,
    logoMaxWidth: 260,
  },
  {
    name: 'Laura Glaab',
    title: 'Interim CEO',
    photo: '/headshots/laura-glaab.png',
    photoScale: 1.3,
    photoOffsetY: 14,
    logo: '/logos/organizations/myfriendben.png',
    orgAlt: 'MyFriendBen',
    logoHeight: 76,
    logoMaxWidth: 260,
  },
  {
    name: 'Jeremy Barofsky',
    title: 'Associate Research Professor',
    photo: '/headshots/jeremy-barofsky.png',
    logo: '/logos/organizations/georgetown.png',
    orgAlt: 'Georgetown University',
    logoHeight: 64,
    logoMaxWidth: 220,
  },
];

export default function PosterSlideWithLogo() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#0D2F33] p-8">
      <div
        className="gradient-bg text-white relative overflow-hidden flex flex-col"
        style={{
          width: 'min(1080px, 95vh, 95vw)',
          aspectRatio: '1 / 1',
        }}
      >
        {/* Top: CFA Summit logo + date */}
        <div className="px-10 pt-10 relative z-10 flex items-center gap-6">
          <div className="relative" style={{ height: '52px', width: '260px' }}>
            <Image
              src={assetPath('/logos/organizations/code-for-america-summit.png')}
              alt="Code for America Summit"
              fill
              className="object-contain object-left"
            />
          </div>
          <span className="text-lg text-white/90 font-light">
            Panel · May 8, 2026 · 2–3 PM
          </span>
        </div>

        {/* Title block */}
        <div className="px-10 mt-6 relative z-10">
          <div className="w-16 h-1.5 bg-white/40 rounded-full mb-4" />
          <h1 className="text-[2.6rem] font-extrabold leading-[1.05] tracking-tight">
            PolicyEngine's Open-Source Ecosystem: From Policy Design to Benefit Access
          </h1>
        </div>

        {/* 2x2 presenter grid */}
        <div className="flex-1 px-10 mt-7 pb-10 relative z-10">
          <div className="grid grid-cols-2 gap-5 h-full">
            {presenters.map((p) => (
              <div
                key={p.name}
                className="flex items-start gap-6 bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="w-[120px] h-[120px] relative overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={p.photo}
                    alt={p.name}
                    fill
                    className="object-cover"
                    style={
                      p.photoScale || p.photoOffsetY
                        ? {
                            transform: `translateY(${p.photoOffsetY ?? 0}%) scale(${p.photoScale ?? 1})`,
                          }
                        : undefined
                    }
                  />
                </div>
                <div className="min-w-0 flex-1 flex flex-col">
                  <p className="text-xl font-semibold text-[#1D4044] leading-tight">
                    {p.name}
                  </p>
                  <p className="text-sm text-[#4a6363] mt-1.5 leading-snug">
                    {p.title}
                  </p>
                  <div className="w-full mt-3 flex items-center">
                    <div
                      className="relative flex-shrink-0"
                      style={{ height: `${p.logoHeight}px`, width: '100%', maxWidth: `${p.logoMaxWidth}px` }}
                    >
                      <Image
                        src={assetPath(p.logo)}
                        alt={p.orgAlt}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
