import { SlideshowConfig } from '@/lib/types';
import OpeningSlide from './slides/OpeningSlide';
import TitleSlide from './slides/TitleSlide';
import AboutSlide from './slides/AboutSlide';
import CoverageCliffSlide from './slides/CoverageCliffSlide';
import DemoSlide from './slides/DemoSlide';
import CloseSlide from './slides/CloseSlide';

export const daphneLightningTalkConfig: SlideshowConfig = {
  id: 'daphne-lightning-talk',
  title: 'Simulating Life Changes to Understand Health Coverage and Costs',
  description: 'Code for America Summit lightning talk',
  date: 'May 2026',
  location: 'Code for America Summit',
  slides: [OpeningSlide, TitleSlide, AboutSlide, CoverageCliffSlide, DemoSlide, CloseSlide],
};
