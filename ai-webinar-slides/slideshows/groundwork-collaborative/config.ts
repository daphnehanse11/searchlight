import { SlideshowConfig } from '@/lib/types';
import CoverSlide from './slides/CoverSlide';
import ProblemSlide from './slides/ProblemSlide';
import FourthOptionSlide from './slides/FourthOptionSlide';
import Microsim1Slide from './slides/Microsim1Slide';
import Microsim2Slide from './slides/Microsim2Slide';
import Microsim3Slide from './slides/Microsim3Slide';
import Microsim4Slide from './slides/Microsim4Slide';
import WhatIsPESlide from './slides/WhatIsPESlide';
import CoverageSlide from './slides/CoverageSlide';
import LandscapeSlide from './slides/LandscapeSlide';
import CapabilitiesSlide from './slides/CapabilitiesSlide';
import WorkSlide from './slides/WorkSlide';
import MarriageSlide from './slides/MarriageSlide';
import PartnersSlide from './slides/PartnersSlide';
import VisionSlide from './slides/VisionSlide';
import EndSlide from './slides/EndSlide';

export const groundworkCollaborativeConfig: SlideshowConfig = {
  id: 'groundwork-collaborative',
  title: 'AI-powered policy simulation',
  description: 'Groundwork Collaborative presentation: open-source tax and health microsimulation',
  date: 'March 2026',
  location: '',
  slides: [
    CoverSlide,        // 1. Intro
    ProblemSlide,      // 2. Health policy modeling is gatekept
    FourthOptionSlide, // 3. What if AI + credible models?
    Microsim1Slide,    // 4. Start with a household
    Microsim2Slide,    // 5. Apply policies
    Microsim3Slide,    // 6. Add dynamics
    Microsim4Slide,    // 7. Scale to millions
    WhatIsPESlide,     // 8. What we build
    CoverageSlide,     // 9. Comprehensive coverage
    LandscapeSlide,    // 10. Health modeling landscape
    CapabilitiesSlide, // 11. What we model
    WorkSlide,         // 12. ACA calc + CRFB
    MarriageSlide,     // 13. Why tax and health must be modeled together
    PartnersSlide,     // 14. Who uses it
    VisionSlide,       // 15. Long-term vision
    EndSlide,          // 16. Thank you
  ],
};
