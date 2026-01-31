import { SectionHeading } from "@/components/ui/SectionHeading";
import { Target, Heart, Shield, Eye, Compass, Lightbulb, Handshake } from "lucide-react";

const values = [
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Partner-First",
    description: "Our partners' success is our success. We prioritize their growth in every decision.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Quality-First",
    description: "We only work with products and partners that meet our exacting standards.",
  },
  {
    icon: <Eye className="h-6 w-6" />,
    title: "Transparent Execution",
    description: "Clear communication, honest dealings, and no hidden agendas.",
  },
  {
    icon: <Heart className="h-6 w-6" />,
    title: "Long-Term Relationships",
    description: "We build partnerships that last, not just transactions.",
  },
];

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            About Verde Araku
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a consulting and partnerships company dedicated to connecting 
            quality with opportunity.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6">
              <Compass className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              To bridge the gap between quality producers and market opportunities. 
              We believe great products deserve great distribution, and growing 
              businesses deserve strategic guidance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Discover</h3>
                <p className="text-muted-foreground text-sm">
                  Find quality partners and opportunities
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Handshake className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Connect</h3>
                <p className="text-muted-foreground text-sm">
                  Facilitate meaningful business relationships
                </p>
              </div>
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Grow</h3>
                <p className="text-muted-foreground text-sm">
                  Support sustainable business growth
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-main">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div>
              <Shield className="h-8 w-8 mx-auto mb-2 text-gold-accent" />
              <p className="font-medium">Partner-First</p>
            </div>
            <div>
              <Target className="h-8 w-8 mx-auto mb-2 text-gold-accent" />
              <p className="font-medium">Quality-First</p>
            </div>
            <div>
              <Eye className="h-8 w-8 mx-auto mb-2 text-gold-accent" />
              <p className="font-medium">Transparent Execution</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
