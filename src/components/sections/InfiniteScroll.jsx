import React from 'react';
import Marquee from 'react-fast-marquee';
import { ReactLogo,AstroLogo,TailwindLogo,JSLogo,NextjsLogo,RemixLogo,TSLogo,SvelteLogo,VueLogo } from '../ui/Logo';

const companyNames = [
  'Acme',
  'Quantum',
  'Echo',
  'Celestial',
  'Pulse',
  'Apex',
  'Nexus',
  'Zenith',
  'Vorte'
];

const InfiniteScrollingLogosMarquee = () => {
  return (
    <div className="p-6  sm:p-9 sm:px-32 md:px-48 lg:px-80 bg-[#D9D9D9] flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative z-10">
      <span className="text-base sm:text-lg text-black/70 text-center w-full sm:w-auto whitespace-nowrap mb-2 sm:mb-0 sm:mr-4">Trusted by the world's best Publishers</span>
      <div className="w-full sm:flex-1 min-w-0">
        {/* Spacer for mobile to prevent overlap */}
        <div className="block sm:hidden h-8"></div>
        <Marquee gradient={true} gradientColor="#D9D9D9" gradientWidth={40} speed={40} pauseOnHover={false}>
          {companyNames.map((name) => (
            <span
              key={name}
              className="text-lg font-semibold text-white bg-[#715482] rounded-full px-6 py-2 mx-8 inline-block shadow"
              style={{ display: 'inline-block' }}
            >
              {name}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default InfiniteScrollingLogosMarquee;
