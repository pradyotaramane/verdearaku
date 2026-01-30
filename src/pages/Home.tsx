import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { ContactForm } from "@/components/forms/ContactForm";
import {
  Briefcase,
  Handshake,
  Coffee,
  CheckCircle,
  Search,
  FileText,
  Rocket,
  HeadphonesIcon,
  ArrowRight,
} from "lucide-react";
import heroImage from "@/assets/hero-coffee-plantation.jpg";
import fnbImage from "@/assets/fnb-products.jpg";
import gymImage from "@/assets/ai-gym-equipment.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";

const services = [
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Business Consulting",
    description:
      "Strategy, go-to-market, operations, and finance/compliance support to help your business grow with clarity.",
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Partnerships",
    description:
      "We connect buyers with sellers, enable co-selling opportunities, and support distribution enablement.",
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Sourcing & Producer Connect",
    description:
      "Direct access to quality coffee beans and specialty suppliers from trusted producers worldwide.",
  },
];

const categories = [
  {
    title: "F&B Products",
    description: "Curated snacks, beverages, and packaged goods from quality partners",
    href: "/products#fnb",
    image: fnbImage,
  },
  {
    title: "AI-based Gym Equipment",
    description: "Smart strength, cardio, and sensor-enabled fitness technology",
    href: "/products#gym",
    image: gymImage,
  },
  {
    title: "Coffee Bean Producers",
    description: "Single-origin, blends, and bulk supply from specialty growers",
    href: "/coffee-beans",
    image: coffeeImage,
  },
];

const whyVerde = [
  "Vetted partners with proven track records",
  "Speed — from discovery to execution",
  "Full transparency in all dealings",
  "Quality-first approach, always",
];

const engagementSteps = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Discover",
    description: "We understand your needs and identify the right opportunities",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Propose",
    description: "Tailored solutions designed around your specific requirements",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Execute",
    description: "Seamless implementation with hands-on support",
  },
  {
    icon: <HeadphonesIcon className="h-6 w-6" />,
    title: "Support",
    description: "Ongoing assistance to ensure lasting success",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Verde Araku - Coffee plantations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-coffee-dark/80 via-coffee-dark/60 to-transparent" />
        </div>
        
        <div className="relative container-main py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-up">
              Business Consulting + Curated Partnerships
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              We help businesses grow strategically through expert consulting and 
              connect quality producers with the right distribution channels.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Talk to Us</Link>
              </Button>
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/partnerships">
                  Explore Partnerships <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            title="What We Do"
            subtitle="Comprehensive support for businesses at every stage of growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Categories */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <SectionHeading
            title="Partnership Categories"
            subtitle="Explore our curated network of quality partners"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Verde Araku */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
                Why Verde Araku?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                We're committed to creating meaningful partnerships that deliver 
                real value. Our approach is built on trust, quality, and results.
              </p>
              <ul className="space-y-4">
                {whyVerde.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-accent flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {engagementSteps.map((step, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold-accent/20 flex items-center justify-center mb-4">
                    <div className="text-gold-accent">{step.icon}</div>
                  </div>
                  <h3 className="font-serif font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="section-padding bg-background" id="contact-form">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="Let's Connect"
              subtitle="Tell us about your needs and we'll get back to you within 1 business day"
            />
            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-medium border border-border">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
