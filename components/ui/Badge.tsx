import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "secondary" | "accent";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    const variants = {
      default: "bg-gray/20 text-gray",
      primary: "bg-primary/20 text-primary",
      secondary: "bg-secondary/20 text-secondary",
      accent: "bg-accent/20 text-accent",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;

