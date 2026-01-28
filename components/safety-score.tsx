import { cn } from "@/lib/utils";
import { getSafetyColor, getSafetyLabel } from "@/lib/casino-data";

interface SafetyScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
}

export function SafetyScore({
  score,
  size = "md",
  showLabel = false,
}: SafetyScoreProps) {
  const sizes = {
    sm: { container: "h-10 w-10", text: "text-sm", label: "text-xs" },
    md: { container: "h-14 w-14", text: "text-lg", label: "text-sm" },
    lg: { container: "h-20 w-20", text: "text-2xl", label: "text-base" },
  };

  const percentage = (score / 10) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className={cn("relative", sizes[size].container)}>
        <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-secondary"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={getSafetyColor(score)}
            style={{
              transition: "stroke-dashoffset 0.5s ease-in-out",
            }}
          />
        </svg>
        <span
          className={cn(
            "absolute inset-0 flex items-center justify-center font-bold text-foreground",
            sizes[size].text
          )}
        >
          {score.toFixed(1)}
        </span>
      </div>
      {showLabel && (
        <span
          className={cn(
            "font-medium",
            getSafetyColor(score),
            sizes[size].label
          )}
        >
          {getSafetyLabel(score)}
        </span>
      )}
    </div>
  );
}
