import Hero from '../components/sections/Hero';
import InfiniteScrollingLogosAnimation from '../components/sections/InfiniteScroll';
import ContentSection from '../components/sections/ContentSection';
import Feature from '../components/sections/Feature';
import AIFeatures from '../components/sections/AIFeatures';
import BookingSection from '../components/sections/BookingSection';
export default function Home() {
  return (
    <>
      <Hero />
      {/* <InfiniteScrollingLogosAnimation /> */}
      <ContentSection />
      <Feature />
      <AIFeatures />
      <BookingSection />
      {/* <Launch /> */}
      {/* <Motion /> */}
    </>
  );
}
