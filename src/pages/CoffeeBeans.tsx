import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircle, MapPin, Award, Leaf, Package } from "lucide-react";
import coffeeImage from "@/assets/coffee-beans.jpg";
import heroImage from "@/assets/hero-coffee-plantation.jpg";

const producers = [
  {
    name: "Araku Valley Estates",
    region: "Andhra Pradesh, India",
    specialty: "Organic Arabica",
    description: "High-altitude organic coffee from the misty valleys of Araku",
  },
  {
    name: "Highland Growers Collective",
    region: "Ethiopia",
    specialty: "Single-Origin Yirgacheffe",
    description: "Traditional Ethiopian coffee with distinctive floral notes",
  },
  {
    name: "Pacific Coast Coffee Co.",
    region: "Colombia",
    specialty: "Washed Arabica",
    description: "Premium Colombian beans with balanced, bright profiles",
  },
];

const options = [
  {
    icon: <Package className="h-6 w-6" />,
    title: "Bulk Supply",
    description: "Large-volume orders for commercial roasters and distributors",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Retail Packaging",
    description: "Consumer-ready packaging for retail and e-commerce",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    title: "White-Label",
    description: "Custom branded coffee with your own label and specifications",
  },
];

export default function CoffeeBeans() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Coffee plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 to-coffee-dark/40" />
        </div>
        <div className="relative container-main">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
              Coffee Beans
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Direct from quality producers. We source premium coffee beans with 
              full traceability, connecting you with specialty growers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-strong">
              <img
                src={coffeeImage}
                alt="Premium coffee beans"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Our Sourcing Story
              </h2>
              <p className="text-muted-foreground mb-4">
                Verde Araku was born from a passion for quality coffee. We work 
                directly with producers, visiting farms, understanding their methods, 
                and ensuring every bean meets our standards.
              </p>
              <p className="text-muted-foreground mb-4">
                From the misty highlands of Araku Valley to the ancient coffee 
                forests of Ethiopia, we source beans that tell a story — of place, 
                people, and craft.
              </p>
              <p className="text-muted-foreground mb-6">
                Our commitment: full traceability, fair partnerships, and 
                exceptional quality in every batch.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span>Sustainably Sourced</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Direct Trade</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="h-5 w-5 text-primary" />
                  <span>Quality Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producer Spotlight */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <SectionHeading
            title="Producer Spotlight"
            subtitle="Meet some of our trusted coffee partners"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {producers.map((producer, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {producer.name}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {producer.region}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {producer.description}
                </p>
                <span className="inline-block px-3 py-1 bg-secondary text-sm rounded-full">
                  {producer.specialty}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Options */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            title="Supply Options"
            subtitle="Flexible options to meet your business needs"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {options.map((option, index) => (
              <div
                key={index}
                className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-soft text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  {option.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {option.title}
                </h3>
                <p className="text-muted-foreground">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Request Samples or Pricing
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Interested in our coffee offerings? Get in touch for samples, 
            pricing, or to discuss your requirements.
          </p>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/contact?category=Coffee Beans">
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Information
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
