import { ButtonHTMLAttributes, forwardRef, ReactElement, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", isLoading, children, disabled, asChild, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      primary: "bg-gradient-primary text-white hover:scale-105 hover:shadow-lg focus:ring-primary",
      secondary: "bg-secondary text-white hover:bg-secondary-dark hover:scale-105 focus:ring-secondary",
      ghost: "bg-transparent hover:bg-white/10 dark:hover:bg-white/5 text-dark dark:text-light",
      outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && isValidElement(children)) {
      return cloneElement(children as ReactElement, {
        className: cn(classes, (children as ReactElement).props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Caricamento...
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

