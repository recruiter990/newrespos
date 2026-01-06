import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glass" | "gradient";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variants = {
      default: "bg-white dark:bg-dark-light border border-gray/20",
      glass: "glass",
      gradient: "bg-gradient-primary/10 border border-primary/20",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl p-6 transition-all duration-300",
          variants[variant],
          hover && "hover:scale-105 hover:shadow-xl hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;

