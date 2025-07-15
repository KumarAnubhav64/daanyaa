import { Button } from "../ui/Button";

export default function Hero() {
  return (
    <div className='bg-[#F4EFEB] min-h-screen/2'>
      <section className="py-32 text-center max-w-6xl mx-auto px-8">
        <h1 className="text-5xl md:text-7xl font- mb-8 text-[#6B4F4E] leading-tight animate-fade-in-up animation-delay-200">
          The AI engine powering<br />
          modern publishers.
        </h1>
        <p className="text-xl text-[#6B4F4E] mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
          Secure, analyze & monetize AI access.
        </p>
        <div className="flex gap-6 justify-center animate-fade-in-up animation-delay-600">
          <Button className="bg-[#6B4F4E] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition transform hover:scale-105 active:scale-95">
            Book a Free Demo
          </Button>
          <Button variant="outline" className="border-[#6B4F4E] text-[#6B4F4E] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#6B4F4E] transition transform hover:scale-105 active:scale-95">
            Explore the Platform
          </Button>
        </div>
      </section>
    </div>
  );
}
