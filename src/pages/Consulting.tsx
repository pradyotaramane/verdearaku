import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import {
  TrendingUp,
  Users,
  Cog,
  FileSearch,
  Shield,
  Clock,
  Zap,
  MessageSquare,
} from "lucide-react";
import consultingImage from "@/assets/consulting-meeting.jpg";

const services = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Strategy & Growth",
    description:
      "Market entry strategies, growth planning, and competitive positioning to accelerate your business trajectory.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Partnerships & Alliances",
    description:
      "Strategic partnership development, channel strategy, and alliance management for expanded reach.",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    title: "Operations & Process",
    description:
      "Operational optimization, process improvement, and efficiency initiatives that drive measurable results.",
  },
  {
    icon: <FileSearch className="h-6 w-6" />,
    title: "Market Research & Business Plans",
    description:
      "In-depth market analysis, feasibility studies, and comprehensive business planning support.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Compliance Coordination",
    description:
      "InfoSec and regulatory compliance guidance to ensure your business meets industry standards.",
  },
];

const engagementModels = [
  {
    icon: <FileSearch className="h-8 w-8" />,
    title: "Fixed Scope Project",
    description:
      "Clearly defined deliverables with fixed timeline and investment. Ideal for specific initiatives.",
    features: ["Clear milestones", "Defined outcomes", "Predictable costs"],
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Retainer",
    description:
      "Ongoing support with dedicated hours each month. Best for continuous advisory needs.",
    features: ["Monthly commitment", "Priority access", "Flexible scope"],
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Advisory (On-Demand)",
    description:
      "Expert guidance when you need it. Pay-as-you-go consulting for specific questions.",
    features: ["No commitment", "Quick turnaround", "Expert access"],
  },
];

const caseStudies = [
  {
    icon: <Shield className="h-6 w-6" />,
    company: "Deep Trace Cybernetics",
    industry: "Defence & Cybersecurity",
    result: "Helped the company acquire clientele for their security product in the defence sector through strategic positioning and targeted outreach.",
  },
  {
    icon: <Cog className="h-6 w-6" />,
    company: "Metros Export Outlet",
    industry: "Retail & Security",
    result: "Assisted in building a secure environment by strategically positioning security cameras and implementing comprehensive surveillance solutions.",
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    company: "CourseVita",
    industry: "EdTech & Software",
    result: "Helped the company successfully deploy their products with multiple software companies through partnership development and integration support.",
  },
];

export default function Consulting() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            src={consultingImage}
            alt="Business consulting"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-main text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Business Consulting Services
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Strategic guidance and hands-on support to help your business navigate 
            challenges and capitalize on opportunities.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container-main">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive consulting across all aspects of business growth"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
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

      {/* Engagement Models */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeading
            title="Engagement Models"
            subtitle="Flexible options designed to fit your needs and budget"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-2xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {model.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {model.title}
                </h3>
                <p className="text-muted-foreground mb-6">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-muted">
        <div className="container-main">
          <SectionHeading
            title="Case Studies"
            subtitle="Real results from our client engagements"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:shadow-medium transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {study.icon}
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                  {study.company}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">{study.industry}</p>
                <p className="text-muted-foreground text-sm">{study.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help your business grow. Schedule a consultation today.
          </p>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/contact">Request a Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
