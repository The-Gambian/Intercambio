import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Intercâmbio Diáspora ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Name and contact information</li>
              <li>Account credentials</li>
              <li>Profile information</li>
              <li>Communication preferences</li>
              <li>Event participation details</li>
            </ul>
            <p className="text-gray-700 mb-4">
              We also automatically collect certain information when you visit our website, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Usage data and cookies</li>
              <li>Website interaction information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide and improve our services</li>
              <li>Communicate with you about events and updates</li>
              <li>Process event registrations and memberships</li>
              <li>Personalize your experience</li>
              <li>Ensure website security and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Cookies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us improve our services and your experience.
            </p>
            <p className="text-gray-700 mb-4">
              You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Service providers who assist in our operations</li>
              <li>Partners for specific events or programs</li>
              <li>Legal authorities when required by law</li>
              <li>Other users with your consent (e.g., public profile information)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to data processing</li>
              <li>Withdraw consent</li>
              <li>Request data portability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 mb-4">
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have questions about this privacy policy or our practices, please contact us at:
            </p>
            <p className="text-gray-700">
              Email: info@intercambiodiaspora.org<br />
              Address: Lisbon, Portugal
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;