import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import fnbImage from "@/assets/fnb-products.jpg";
import gymImage from "@/assets/ai-gym-equipment.jpg";
import coffeeImage from "@/assets/coffee-beans.jpg";

const products = [
  {
    id: "fnb",
    title: "F&B Products",
    description: "Premium food and beverage offerings from quality producers. Artisan snacks, specialty beverages, and packaged goods.",
    image: fnbImage,
    href: "/products#fnb",
    color: "from-amber-900/80",
  },
  {
    id: "gym",
    title: "AI-based Gym Equipment",
    description: "Smart fitness technology with integrated sensors, AI-powered training, and connected workout experiences.",
    image: gymImage,
    href: "/products#gym",
    color: "from-slate-900/80",
  },
  {
    id: "coffee",
    title: "Coffee Beans",
    description: "Single-origin, premium blends, and bulk supply from specialty growers. Traceable quality from farm to cup.",
    image: coffeeImage,
    href: "/products#coffee",
    color: "from-coffee-dark/80",
  },
];

export function ProductCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;

    onSelect();
    api.on("select", onSelect);

    // Auto-play
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api, onSelect]);

  return (
    <div className="relative">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-0">
              <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${product.color} via-transparent to-transparent`} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
                
                <div className="relative h-full flex flex-col justify-end p-8 md:p-12 lg:p-16">
                  <div className="max-w-xl">
                    <span className="inline-block px-3 py-1 bg-gold-accent/20 text-gold-accent text-sm font-medium rounded-full mb-4">
                      Featured Product
                    </span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4">
                      {product.title}
                    </h3>
                    <p className="text-lg text-white/80 mb-6 line-clamp-2">
                      {product.description}
                    </p>
                    <Button asChild variant="hero" size="lg">
                      <Link to={product.href}>
                        Explore {product.title.split(" ")[0]}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="left-4 md:left-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 md:right-8 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30" />
      </Carousel>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-gold-accent"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
