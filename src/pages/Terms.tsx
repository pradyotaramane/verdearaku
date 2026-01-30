export default function Terms() {
  return (
    <div className="section-padding bg-background">
      <div className="container-main">
        <div className="max-w-3xl mx-auto prose prose-neutral">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <p className="text-muted-foreground mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted-foreground">
              By accessing and using the Verde Araku website, you agree to be bound 
              by these Terms of Service. If you do not agree to these terms, please 
              do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              2. Services Description
            </h2>
            <p className="text-muted-foreground">
              Verde Araku provides business consulting services and facilitates 
              partnerships between producers and buyers. We act as intermediaries 
              and advisors; final commercial arrangements are between the respective parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              3. Use of Website
            </h2>
            <p className="text-muted-foreground mb-4">
              You agree to use this website only for lawful purposes. You may not:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              <li>Submit false or misleading information</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the website to transmit harmful code or content</li>
              <li>Reproduce or distribute website content without permission</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground">
              All content on this website, including text, graphics, logos, and images, 
              is the property of Verde Araku and is protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground">
              Verde Araku provides information and facilitates introductions but is not 
              liable for any outcomes of partnerships or commercial arrangements between 
              parties. We do not guarantee specific business results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              6. Data Collection
            </h2>
            <p className="text-muted-foreground">
              Information submitted through our contact forms and Quick Bot is used 
              solely to respond to your enquiries and provide our services. See our 
              Privacy Policy for full details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use 
              of the website after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
              8. Contact
            </h2>
            <p className="text-muted-foreground">
              For any questions about these Terms, please contact us at:{" "}
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
