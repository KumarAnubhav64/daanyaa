import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#6B4F4E] py-12 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Copyright */}
        <p className="text-white text-lg mb-2">
          © 2025 PublisherAI. All rights reserved.
        </p>

        {/* Email */}
        <p className="text-white text-lg mb-2">
          Email: hello@publisherai.com
        </p>

        {/* Address */}
        <p className="text-white text-lg">
          123 AI Street, Suite 400, Innovation City, CA 90210
        </p>
      </div>
    </footer>
  );
};

export default Footer;
