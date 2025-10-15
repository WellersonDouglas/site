import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  strong?: boolean;
}

export const GlassCard = ({ children, className, hover = true, strong = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl",
        strong ? "glass-strong" : "glass",
        hover && "glass-hover",
        className
      )}
    >
      {children}
    </div>
  );
};
