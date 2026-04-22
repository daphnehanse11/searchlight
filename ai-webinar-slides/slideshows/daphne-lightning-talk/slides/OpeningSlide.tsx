import React from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

// Faithful reproduction of slide 4 from the CFA Summit deck template —
// just the full-bleed branded background.
export default function OpeningSlide() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Image
        src={assetPath('/cfa-assets/background.png')}
        alt="Code for America Summit"
        fill
        className="object-cover"
        priority
      />
    </div>
  );
}
