import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "glass-button text-foreground glow-on-hover",
        primary: "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-float hover:scale-105",
        secondary: "bg-gradient-secondary text-secondary-foreground shadow-glow hover:shadow-float hover:scale-105",
        accent: "bg-accent text-accent-foreground glass-button glow-on-hover",
        ghost: "hover:bg-muted hover:text-muted-foreground",
        scan: "bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-float transform hover:scale-105 active:scale-95 relative overflow-hidden",
        toggle: "glass-button border-2 border-transparent data-[state=on]:border-primary data-[state=on]:bg-primary-soft data-[state=on]:text-primary hover:scale-105"
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4",
        lg: "h-14 px-8 py-4",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-12 w-12"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(glassButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }