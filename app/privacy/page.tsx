export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
      
      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Introduction</h2>
          <p>
            AgeCal (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the AgeCal website and application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Information We Collect</h2>
          <p>
            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li><strong>Personal Data:</strong> Email address, name, and other contact information you provide voluntarily</li>
            <li><strong>Log Data:</strong> IP address, browser type, pages visited, and time stamps</li>
            <li><strong>Device Information:</strong> Device type, operating system, and unique device identifiers</li>
            <li><strong>Usage Information:</strong> How you interact with our application</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Improve our website and services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Analyze usage trends and gather demographic information</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect and prevent fraudulent transactions</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li><strong>By Law or to Protect Rights:</strong> If required by law or to protect our rights</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors who assist us in operating our website</li>
            <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger or acquisition</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to protect your personal information. However, no security system is impenetrable, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="mt-3">
            Email: <a href="mailto:privacy@agecal.com" className="text-blue-600 hover:text-blue-800">privacy@agecal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
