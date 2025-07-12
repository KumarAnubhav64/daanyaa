import { Button } from '../components/ui/Button';

export default function Hero() {
  return (
    <div className='bg-[#F4EFEB] min-h-screen/2'>
      <section className="py-32 text-center max-w-6xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font- mb-8 text-[#715482] leading-tight">
          The AI engine powering<br />
          modern publishers.
        </h1>
        <p className="text-xl text-[#715482]  mb-12 max-w-2xl mx-auto">
          Secure, analyze & monetize AI access.
        </p>
        <div className="flex gap-6 justify-center">
          <Button className="bg-[#715482] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition">
            Book a Free Demo
          </Button>
          <Button variant="outline" className="border-[#715482] text-[#715482] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#715482] hover:text-white transition">
            Explore the Platform
          </Button>
        </div>
      </section>
    </div>
  );
}
