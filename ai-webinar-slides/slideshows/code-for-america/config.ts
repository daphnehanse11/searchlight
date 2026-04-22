import { SlideshowConfig } from '@/lib/types';
import PosterSlide from './slides/PosterSlide';
import PosterSlideWithLogo from './slides/PosterSlideWithLogo';
import DaphneLightningSlide from './slides/DaphneLightningSlide';

export const codeForAmericaConfig: SlideshowConfig = {
  id: 'code-for-america',
  title: "PolicyEngine's Open-Source Ecosystem",
  description: 'Code for America panel social poster',
  date: 'May 2026',
  location: 'Code for America Summit',
  slides: [PosterSlide, PosterSlideWithLogo, DaphneLightningSlide],
};
