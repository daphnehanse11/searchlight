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
import MarriageSlide from './slides/MarriageSlide';
import PartnersSlide from './slides/PartnersSlide';
import DemoSlide from './slides/DemoSlide';
import WorkSlide from './slides/WorkSlide';
import ClaudeCodeSlide from './slides/ClaudeCodeSlide';
import PluginWorkflowSlide from './slides/PluginWorkflowSlide';
import FutureSlide from './slides/FutureSlide';
import EndSlide from './slides/EndSlide';

export const groundworkCollaborativeConfig: SlideshowConfig = {
  id: 'groundwork-collaborative',
  title: 'AI-powered policy simulation',
  description: 'Groundwork Collaborative presentation: open-source tax and health microsimulation',
  date: 'March 2026',
  location: '',
  slides: [
    CoverSlide,          // 1. Intro
    ProblemSlide,        // 2. Health policy modeling is gatekept
    FourthOptionSlide,   // 3. What if AI + credible models?
    Microsim1Slide,      // 4. Start with a household
    Microsim2Slide,      // 5. Apply policies
    Microsim3Slide,      // 6. Add dynamics
    Microsim4Slide,      // 7. Scale to millions
    WhatIsPESlide,       // 8. What we build
    CoverageSlide,       // 9. Comprehensive coverage
    MarriageSlide,       // 10. Tax+health in practice: marriage penalty
    PartnersSlide,       // 11. Who uses it
    DemoSlide,           // 12. App screenshots
    WorkSlide,           // 13. ACA calculator + CRFB
    ClaudeCodeSlide,     // 14. The PolicyEngine plugin for Claude
    PluginWorkflowSlide, // 15. What can you ask?
    FutureSlide,         // 16. AI enables a new paradigm of encoding
    EndSlide,            // 17. Thank you
  ],
};
