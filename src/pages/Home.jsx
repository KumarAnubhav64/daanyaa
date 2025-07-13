import Hero from '../components/sections/Hero';
import InfiniteScrollingLogosAnimation from '../components/sections/InfiniteScroll';
import ContentSection from '../components/sections/ContentSection';
import Feature from '../components/sections/Feature';
import AIFeatures from '../components/sections/AIFeatures';
import BookingSection from '../components/sections/BookingSection';
import Useage from '../components/Useage';
import Launch from '../components/Launch';
import Motion from '../components/Motion';
import SmoothScroll from '../components/SmoothScroll';
export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <Hero />
      <InfiniteScrollingLogosAnimation />
      <ContentSection />
      <Feature />
      <AIFeatures />
      <BookingSection />
      {/* <Useage />
      <Launch />
      <Motion /> */}
      {/* </SmoothScroll> */}
    </>
  );
}
