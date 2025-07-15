export default function Contact() {
  return (
    <div className="bg-[#F4EFEB] min-h-screen">
      <section className="py-32 max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-[#6B4F4E] leading-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-[#6B4F4E] max-w-2xl mx-auto">
            Ready to transform your publishing platform? Let's discuss how DAaranya.AI can help you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#6B4F4E] mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#6B4F4E] mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#6B4F4E] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-[#6B4F4E] mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#6B4F4E] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B4F4E] focus:border-transparent"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#6B4F4E] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#6B4F4E] mb-4">Direct Contact</h3>
              <div className="space-y-4 text-[#6B4F4E]">
                <div>
                  <p className="font-medium">Email</p>
                  <p>hello@publisherai.com</p>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p>123 AI Street, Suite 400<br />Innovation City, CA 90210</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#6B4F4E] mb-4">Business Hours</h3>
              <div className="space-y-2 text-[#6B4F4E]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
