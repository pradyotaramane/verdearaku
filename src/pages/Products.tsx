import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageCircle } from "lucide-react";
import fnbImage from "@/assets/fnb-products.jpg";
import gymImage from "@/assets/ai-gym-equipment.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";

const fnbProducts = [
  { name: "Artisan Snacks", description: "Premium handcrafted snacks from local producers" },
  { name: "Specialty Beverages", description: "Unique drinks from craft producers" },
  { name: "Packaged Goods", description: "Quality packaged food products" },
  { name: "Health Foods", description: "Natural and organic food options" },
];

const gymProducts = [
  { name: "Smart Strength Machines", description: "AI-powered resistance training equipment" },
  { name: "Connected Cardio", description: "Interactive cardio machines with tracking" },
  { name: "Fitness Sensors", description: "Wearable and equipment-mounted sensors" },
  { name: "Recovery Systems", description: "Smart recovery and rehabilitation equipment" },
];

const coffeeProducts = [
  { name: "Single-Origin Beans", description: "Traceable beans from specific regions" },
  { name: "Premium Blends", description: "Expertly crafted coffee blends" },
  { name: "Bulk Supply", description: "Large-scale coffee bean sourcing" },
  { name: "White-Label Options", description: "Custom branded coffee solutions" },
];

interface ProductCardProps {
  name: string;
  description: string;
  category: string;
}

function ProductCard({ name, description, category }: ProductCardProps) {
  const openBot = () => {
    // Trigger the QuickBot widget opening
    const event = new CustomEvent('openQuickBot', { detail: { category } });
    window.dispatchEvent(event);
  };

  return (
    <div className="p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{name}</h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <Button variant="subtle" size="sm" onClick={openBot} className="w-full">
        <MessageCircle className="h-4 w-4 mr-2" />
        Enquire
      </Button>
    </div>
  );
}

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container-main text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            Products
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated partner offerings across categories. Availability and pricing 
            depend on our partners. Contact us for specific requirements.
          </p>
        </div>
      </section>

      {/* F&B Products */}
      <section id="fnb" className="section-padding bg-background scroll-mt-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeading
                title="F&B Products"
                subtitle="Premium food and beverage offerings from quality producers"
                align="left"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-medium">
              <img
                src={fnbImage}
                alt="F&B Products"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fnbProducts.map((product, index) => (
              <ProductCard key={index} {...product} category="F&B Products" />
            ))}
          </div>
        </div>
      </section>

      {/* AI Gym Equipment */}
      <section id="gym" className="section-padding bg-secondary scroll-mt-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 lg:order-1 aspect-video rounded-2xl overflow-hidden shadow-medium">
              <img
                src={gymImage}
                alt="AI Gym Equipment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHeading
                title="AI-based Gym Equipment"
                subtitle="Smart fitness technology with integrated sensors and tracking"
                align="left"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gymProducts.map((product, index) => (
              <ProductCard key={index} {...product} category="AI Gym Equipment" />
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Beans */}
      <section id="coffee" className="section-padding bg-background scroll-mt-24">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeading
                title="Coffee Beans"
                subtitle="Single-origin, blends, and bulk supply from specialty growers"
                align="left"
              />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden shadow-medium">
              <img
                src={coffeeImage}
                alt="Coffee Beans"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coffeeProducts.map((product, index) => (
              <ProductCard key={index} {...product} category="Coffee Beans" />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-muted">
        <div className="container-main">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-muted-foreground text-sm">
              <strong>Note:</strong> Verde Araku may facilitate introductions between 
              parties. Final commercial terms, pricing, and agreements are between 
              the buyer and the producing/supplying partner.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
