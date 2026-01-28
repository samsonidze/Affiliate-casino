import Link from "next/link";
import { ExternalLink, Check, X, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SafetyScore } from "@/components/safety-score";
import type { Casino } from "@/lib/casino-data";

interface CasinoCardProps {
  casino: Casino;
  variant?: "default" | "compact";
}

export function CasinoCard({ casino, variant = "default" }: CasinoCardProps) {
  if (variant === "compact") {
    return (
      <Card className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-xl font-bold text-primary">
              {casino.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground truncate">
                {casino.name}
              </h3>
              <p className="text-sm text-primary">{casino.bonus.amount}</p>
            </div>
            <SafetyScore score={casino.safetyIndex} size="sm" />
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row">
          {/* Casino Info */}
          <div className="flex flex-1 flex-col gap-4 p-6 lg:flex-row lg:items-center">
            {/* Logo */}
            <div className="flex items-center gap-4 lg:gap-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-2xl font-bold text-primary">
                {casino.name.charAt(0)}
              </div>
              <div className="lg:hidden">
                <SafetyScore score={casino.safetyIndex} size="sm" showLabel />
              </div>
            </div>

            {/* Details */}
            <div className="flex-1 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Link
                    href={`/casinos/${casino.slug}`}
                    className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {casino.name}
                  </Link>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(casino.rating)
                              ? "fill-accent text-accent"
                              : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {casino.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <SafetyScore score={casino.safetyIndex} size="md" showLabel />
                </div>
              </div>

              {/* Licenses */}
              <div className="flex flex-wrap gap-2">
                {casino.licenses.slice(0, 2).map((license) => (
                  <Badge key={license} variant="secondary" className="text-xs">
                    {license}
                  </Badge>
                ))}
              </div>

              {/* Pros/Cons */}
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="space-y-1">
                  {casino.pros.slice(0, 2).map((pro) => (
                    <div
                      key={pro}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="truncate">{pro}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-1">
                  {casino.cons.slice(0, 2).map((con) => (
                    <div
                      key={con}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <X className="h-4 w-4 flex-shrink-0 text-destructive" />
                      <span className="truncate">{con}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bonus & CTA */}
          <div className="flex flex-col justify-center gap-4 border-t border-border bg-secondary/30 p-6 lg:w-72 lg:border-l lg:border-t-0">
            <div className="text-center">
              <p className="text-sm font-medium text-muted-foreground">
                {casino.bonus.title}
              </p>
              <p className="mt-1 text-xl font-bold text-primary">
                {casino.bonus.amount}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {casino.bonus.wagering}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <Button asChild className="w-full">
                <a
                  href={`/go/${casino.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  Visit Casino
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href={`/casinos/${casino.slug}`}>Read Review</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
