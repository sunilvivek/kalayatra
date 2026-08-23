import { Moon, Sun } from "lucide-react";

interface Props {
  theme: "light" | "dark";
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-body transition-colors hover:border-accent hover:text-accent"
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
}
