export default function Privacy() {
  return (
    <div className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-4">
              When you use our website or contact us, we may collect the following information:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Name and contact information (email, phone number)</li>
              <li>Company name and business details</li>
              <li>Messages and enquiries you send us</li>
              <li>Information about how you use our website</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-4">
              The information we collect is used solely to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Respond to your enquiries and requests</li>
              <li>Provide consulting and partnership services</li>
              <li>Improve our website and services</li>
              <li>Send relevant updates about our services (with your consent)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              3. Data Protection
            </h2>
            <p className="text-muted-foreground">
              We take appropriate security measures to protect your personal information. 
              Your data is stored securely and is only accessible to authorized personnel 
              who need it to respond to your enquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              4. Third-Party Sharing
            </h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share your information 
              with our partners only when necessary to fulfill your specific requests 
              and with your knowledge.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              5. Your Rights
            </h2>
            <p className="text-muted-foreground">
              You have the right to access, correct, or delete your personal information. 
              Contact us at support@verdearaku.com for any privacy-related requests.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              6. Contact
            </h2>
            <p className="text-muted-foreground">
              For any questions about this Privacy Policy, please contact us at:{" "}
              <a href="mailto:support@verdearaku.com" className="text-primary hover:underline">
                support@verdearaku.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
