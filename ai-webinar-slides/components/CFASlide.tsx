import React, { ReactNode } from 'react';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';

export type CFASlideVariant = 'dark' | 'light';

interface CFASlideProps {
  children: ReactNode;
  variant?: CFASlideVariant;
  className?: string;
  sessionTitle?: string;
}

export default function CFASlide({
  children,
  variant = 'light',
  className = '',
  sessionTitle = 'Simulating Life Changes to Understand Health Coverage and Costs',
}: CFASlideProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={`relative w-screen h-screen flex flex-col overflow-hidden ${className}`}
      style={{
        backgroundColor: isDark ? '#2B1A78' : '#FFFFFF',
        fontFamily: "'Source Sans Pro', 'Proxima Nova', Arial, sans-serif",
      }}
    >
      {/* Corner decoration (top-right) */}
      <div className="absolute top-0 right-0 w-48 h-48 pointer-events-none">
        <Image
          src={assetPath('/cfa-assets/corner-triangles.png')}
          alt=""
          fill
          className="object-cover object-top-right"
        />
      </div>

      {/* Diagonal lines decoration (bottom-left) */}
      <div className="absolute bottom-16 left-10 w-44 h-28 pointer-events-none opacity-60">
        <Image
          src={assetPath(isDark ? '/cfa-assets/diagonal-lines-light.png' : '/cfa-assets/diagonal-lines-dark.png')}
          alt=""
          fill
          className="object-contain object-bottom-left"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col">
        {children}
      </div>

      {/* Footer */}
      {!isDark && (
        <div
          className="relative z-10 flex items-center justify-between px-16 pb-6 pt-2"
          style={{ borderTop: '2px solid #E6EBF9' }}
        >
          <Image
            src={assetPath('/cfa-assets/cfa-summit-dark.png')}
            alt="Code for America Summit"
            width={180}
            height={28}
            className="object-contain opacity-70"
          />
          <span
            className="text-sm font-medium"
            style={{ color: '#2B1A78', fontFamily: "'Source Sans Pro', sans-serif" }}
          >
            {sessionTitle}
          </span>
        </div>
      )}
    </div>
  );
}
