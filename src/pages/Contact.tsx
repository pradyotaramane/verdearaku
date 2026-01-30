import { useSearchParams } from "react-router-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const defaultCategory = searchParams.get("category") || undefined;

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a question or ready to get started? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a
                      href="mailto:support@verdearaku.com"
                      className="text-primary hover:underline"
                    >
                      support@verdearaku.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Response Time</h3>
                    <p className="text-muted-foreground">
                      We respond within 1 business day
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">
                      Operating globally with presence in India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-secondary rounded-xl">
                <h3 className="font-serif font-semibold text-foreground mb-2">
                  Prefer a quick chat?
                </h3>
                <p className="text-muted-foreground text-sm">
                  Use the "Ask Verde" button at the bottom right of your screen 
                  for quick queries.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 md:p-10 shadow-medium border border-border">
                <SectionHeading
                  title="Send us a message"
                  subtitle="Fill out the form below and we'll get back to you shortly"
                  align="left"
                  className="mb-8"
                />
                <ContactForm defaultCategory={defaultCategory} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
