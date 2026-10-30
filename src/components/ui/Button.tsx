import { cn } from "@/lib/utils";

type ButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "ghost";
};

export default function Button({ variant = "primary", className, children, ...rest }: ButtonProps) {
  return (
    <a
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2",
        variant === "primary" &&
          "bg-gradient-to-r from-accent to-accent-3 text-white shadow-lg shadow-accent/30 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/40",
        variant === "ghost" &&
          "glass text-gray-200 hover:-translate-y-0.5 hover:border-white/20 hover:text-white",
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
