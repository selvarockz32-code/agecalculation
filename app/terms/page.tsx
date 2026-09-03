export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Terms & Conditions</h1>
      
      <div className="space-y-6 text-gray-700">
        <p className="text-lg">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Agreement to Terms</h2>
          <p>
            These Terms and Conditions (&quot;Agreement&quot;) constitute a legally binding agreement made between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and AgeCal (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). You agree that by accessing and using our website and application, you have read, understood, and agree to be bound by all of the terms and conditions of this Agreement.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on AgeCal for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-3">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the site</li>
            <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            <li>Attempt to gain unauthorized access to any portion or feature of the site</li>
            <li>Harass, abuse, or harm another person</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Disclaimer</h2>
          <p>
            The materials on AgeCal are provided on an &apos;as is&apos; basis. AgeCal makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Limitations</h2>
          <p>
            In no event shall AgeCal or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on AgeCal, even if we or our authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Accuracy of Materials</h2>
          <p>
            The materials appearing on AgeCal could include technical, typographical, or photographic errors. AgeCal does not warrant that any of the materials on its website and application are accurate, complete, or current. AgeCal may make changes to the materials contained on its website and application at any time without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Links</h2>
          <p>
            AgeCal has not reviewed all of the sites linked to its website and application and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by AgeCal of the site. Use of any such linked website is at the user&apos;s own risk.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Modifications</h2>
          <p>
            AgeCal may revise these terms of service for its website and application at any time without notice. By using this website and application, you are agreeing to be bound by the then current version of these terms of service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Contact Information</h2>
          <p>
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <p className="mt-3">
            Email: <a href="mailto:support@agecal.com" className="text-blue-600 hover:text-blue-800">support@agecal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}
