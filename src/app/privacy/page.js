import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-sm mb-12">Last Updated: May 28, 2026</p>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Introduction</h2>
            <p>
              Welcome to Thiran Private Ltd. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share your personal information when you use our website, Thiran LaunchLab, NextStep, and other services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Data We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, join a waitlist, apply for a career, or communicate with us. The types of personal data may include your name, email address, educational background, psychometric responses (for NextStep), and technical usage data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. How We Use Your Data</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
              <li>To provide, maintain, and improve our services (e.g., career recommendations).</li>
              <li>To communicate with you about updates, beta launches, and support.</li>
              <li>To analyze usage trends to optimize our platform's performance.</li>
              <li>To ensure security and prevent fraud across our systems.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, protecting your data against unauthorized access, loss, or alteration. We utilize industry-standard encryption and localized compliance infrastructure where applicable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at: <br/>
              <strong className="text-white">Email:</strong> privacy@thiran.in
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
