import React from 'react';

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 mb-4">
              By accessing or using the Intercâmbio Diáspora website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
            <p className="text-gray-700 mb-4">
              Our services are intended for:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Community members seeking to connect with the African and Afro-descendant diaspora</li>
              <li>Participants in cultural exchange and educational programs</li>
              <li>Users interested in our events and activities</li>
            </ul>
            <p className="text-gray-700 mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">User Accounts</h2>
            <p className="text-gray-700 mb-4">When creating an account, you agree to:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Provide accurate and complete information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Promptly update any changes to your information</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Community Guidelines</h2>
            <p className="text-gray-700 mb-4">Users must:</p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Respect other community members</li>
              <li>Avoid harmful or discriminatory behavior</li>
              <li>Not post inappropriate or offensive content</li>
              <li>Follow event and program guidelines</li>
              <li>Maintain confidentiality when required</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, and images, is the property of Intercâmbio Diáspora or our licensors and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Events and Programs</h2>
            <p className="text-gray-700 mb-4">
              Participation in events and programs is subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Registration requirements and deadlines</li>
              <li>Payment of any applicable fees</li>
              <li>Adherence to event-specific guidelines</li>
              <li>Cancellation and refund policies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              Intercâmbio Diáspora shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us at:
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

export default TermsOfService;