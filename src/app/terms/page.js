import React from 'react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen py-24 md:py-32 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Terms of Service</h1>
        <p className="text-gray-400 text-sm mb-12">Last Updated: May 28, 2026</p>

        <div className="space-y-8 text-gray-300 text-sm leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using our websites and services provided by Thiran Private Ltd ("Thiran", "we", "us", or "our"), you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Description of Services</h2>
            <p>
              Thiran operates as a technology company providing educational tools (like NextStep) and web agency services (like LaunchLab). The services may change over time as we refine our products. We reserve the right to modify or discontinue services with or without notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Beta Access and Products</h2>
            <p>
              Certain products, such as NextStep, may be provided in "Beta" or test form. You understand that Beta products are still under development, may contain bugs or errors, and are provided "as is" without warranty of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property of Thiran Private Ltd and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Thiran Private Ltd.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              In no event shall Thiran Private Ltd, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages resulting from your access to or use of, or inability to access or use the services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at: <strong className="text-white">legal@thiran.in</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
