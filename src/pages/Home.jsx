import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import InfiniteScrollingLogosAnimation from '../components/InfiniteScroll';
import Feature from '../components/Feature';
import AIFeatures from '../components/AIFeatures';
import BookingSection from '../components/BookingSection';
import Useage from '../components/Useage';
import Launch from '../components/Launch';
import Motion from '../components/Motion';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <InfiniteScrollingLogosAnimation />
      <ContentSection />
      <Feature />
      <AIFeatures />
      <BookingSection />
      {/* <Useage />
      <Launch />
      <Motion /> */}
      <Footer />
    </>
  );
}
