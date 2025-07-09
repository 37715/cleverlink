import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "primary" | "outline" | "white";
  icon?: React.ReactNode;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", variant = "primary", icon, className, ...props }, ref) => {
  const variantStyles = {
    primary: {
      button: "bg-black text-white border-black",
      hoverText: "text-black",
      dot: "bg-white"
    },
    outline: {
      button: "bg-transparent text-black border-gray-200",
      hoverText: "text-white", 
      dot: "bg-black"
    },
    white: {
      button: "bg-white text-black border-white",
      hoverText: "text-white",
      dot: "bg-zinc-900"
    }
  };

  const styles = variantStyles[variant];

  return (
    <button
      ref={ref}
      className={cn(
        "group relative cursor-pointer overflow-hidden border font-ultra-light transition-all duration-300 hover:scale-105 px-6 py-3 text-base lowercase tracking-wide",
        styles.button,
        className,
      )}
      {...props}
    >
      {/* Dot animation - positioned BEHIND text and further left */}
      <div className={cn(
        "absolute left-[5%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] z-0",
        styles.dot
      )}></div>

      {/* Original text - slides out */}
      <span className="relative z-20 inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 flex items-center gap-2">
        {text}
        {icon}
      </span>

      {/* Hover text - slides in and centers perfectly */}
      <div className={cn(
        "absolute top-0 z-20 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100",
        styles.hoverText
      )}>
        <span>{text}</span>
        {icon || <ArrowRight className="w-4 h-4" />}
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton }; 