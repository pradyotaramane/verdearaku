import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PartnerForm } from "@/components/forms/PartnerForm";
import {
  Building2,
  ShoppingBag,
  CheckCircle,
  ArrowRight,
  Users,
  Handshake,
  TrendingUp,
  FileCheck,
} from "lucide-react";

const partnerSteps = [
  {
    step: "01",
    title: "Submit Application",
    description: "Share your product or company details through our partner form",
  },
  {
    step: "02",
    title: "Review & Vetting",
    description: "Our team evaluates fit, quality standards, and market potential",
  },
  {
    step: "03",
    title: "Onboarding",
    description: "We set up systems, agreements, and integration requirements",
  },
  {
    step: "04",
    title: "Go Live",
    description: "Your products become available to our buyer network",
  },
];

const partnerBenefits = [
  "Access to curated buyer network across multiple markets",
  "Co-selling and distribution support",
  "Market entry and expansion assistance",
  "Transparent partnership terms",
  "Dedicated partner success team",
  "Marketing and promotional support",
];

export default function Partnerships() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Partnerships
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with producers and product companies to connect demand, 
            distribution, and execution. Whether you're a producer looking for buyers 
            or a buyer seeking quality products — we're here to help.
          </p>
        </div>
      </section>

      {/* Two Columns */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* For Product Companies */}
            <div className="p-8 md:p-10 bg-primary text-primary-foreground rounded-2xl">
              <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                For Product Companies & Producers
              </h2>
              <p className="text-primary-foreground/80 mb-6">
                Looking to expand your distribution? We connect quality producers 
                with buyers, distributors, and retail partners across markets.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <span>Access to curated buyer network</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <span>Co-selling and distribution support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <span>Market entry assistance</span>
                </li>
              </ul>
              <Button asChild variant="heroOutline" size="lg">
                <a href="#partner-form">
                  Apply as Partner <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* For Buyers */}
            <div className="p-8 md:p-10 bg-card border border-border rounded-2xl shadow-soft">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <ShoppingBag className="h-7 w-7 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4">
                For Buyers, Distributors & Brands
              </h2>
              <p className="text-muted-foreground mb-6">
                Seeking quality products for your business? We provide access to 
                vetted producers and help facilitate commercial arrangements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Pre-vetted quality producers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Transparent pricing and terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Facilitated introductions</span>
                </li>
              </ul>
              <Button asChild variant="premium" size="lg">
                <Link to="/contact?category=Partnerships">
                  Request Partnership Options <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Onboarding Steps */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <SectionHeading
            title="Partner Onboarding Process"
            subtitle="A simple, transparent journey from application to launch"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="p-6 bg-card rounded-xl border border-border h-full">
                  <span className="text-4xl font-serif font-bold text-primary/20">
                    {step.step}
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < partnerSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-muted-foreground/30 h-6 w-6" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Application Form */}
      <section id="partner-form" className="section-padding bg-background scroll-mt-24">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileCheck className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Become a Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form below and our team will review your application. 
                We typically respond within 2 business days.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 md:p-10 shadow-medium border border-border">
              <div className="mb-8 p-4 bg-secondary rounded-lg">
                <h3 className="font-semibold text-foreground mb-3">Partner Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {partnerBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PartnerForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="font-serif text-4xl font-bold text-foreground mb-2">
                50+
              </div>
              <p className="text-muted-foreground">Partner Companies</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Handshake className="h-8 w-8 text-primary" />
              </div>
              <div className="font-serif text-4xl font-bold text-foreground mb-2">
                100+
              </div>
              <p className="text-muted-foreground">Successful Connections</p>
            </div>
            <div className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="font-serif text-4xl font-bold text-foreground mb-2">
                5+
              </div>
              <p className="text-muted-foreground">Markets Covered</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
