import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image?: string;
  className?: string;
}

export function CategoryCard({
  title,
  description,
  href,
  image,
  className,
}: CategoryCardProps) {
  return (
    <Link
      to={href}
      className={cn(
        "group block relative overflow-hidden rounded-xl aspect-[4/3] shadow-medium hover:shadow-strong transition-all duration-300",
        className
      )}
    >
      {/* Background image or placeholder */}
      <div className="absolute inset-0 bg-primary/20">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <h3 className="font-serif text-xl md:text-2xl font-semibold text-white mb-2">
          {title}
        </h3>
        <p className="text-white/80 text-sm md:text-base mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex items-center text-white font-medium text-sm group-hover:gap-3 gap-2 transition-all duration-300">
          <span>Explore</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
