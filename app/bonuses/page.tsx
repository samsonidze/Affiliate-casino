import Link from "next/link";
import {
  Gift,
  ExternalLink,
  ChevronRight,
  AlertTriangle,
  Check,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { bonuses, casinos } from "@/lib/casino-data";

export const metadata = {
  title: "Casino Bonuses & Promotions | SafeCasino",
  description:
    "Compare the best casino bonuses and promotions. Welcome offers, free spins, and no deposit bonuses with clear terms and wagering requirements.",
};

export default function BonusesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Gift className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                Casino Bonuses & Promotions
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Compare the best offers with transparent terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Notice Banner */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <div className="flex items-start gap-3 rounded-lg border border-warning/30 bg-warning/5 p-4">
            <AlertTriangle className="h-5 w-5 flex-shrink-0 text-warning" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-foreground">Important:</strong> Always
              read the full terms and conditions before claiming any bonus.
              Wagering requirements, game restrictions, and expiry dates apply.
              Gamble responsibly.
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Bonus Types */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              type: "Welcome Bonus",
              count: bonuses.filter((b) => b.type === "Welcome Bonus").length,
              description: "First deposit match bonuses",
            },
            {
              type: "No Deposit",
              count: bonuses.filter((b) => b.type === "No Deposit Bonus").length,
              description: "Free bonuses without deposit",
            },
            {
              type: "Free Spins",
              count: 12,
              description: "Bonus spins on selected slots",
            },
            {
              type: "Cashback",
              count: 8,
              description: "Get money back on losses",
            },
          ].map((item) => (
            <Card
              key={item.type}
              className="border-border bg-card transition-all hover:border-primary/50"
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{item.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <Badge variant="secondary">{item.count}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonus List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground">
            Featured Bonuses
          </h2>

          <div className="space-y-4">
            {bonuses.map((bonus) => (
              <Card
                key={bonus.id}
                className="overflow-hidden transition-all hover:border-primary/50"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Casino Info */}
                    <div className="flex items-center gap-4 border-b border-border bg-secondary/30 p-6 lg:w-64 lg:border-b-0 lg:border-r">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-xl font-bold text-primary">
                        {bonus.casinoName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {bonus.casinoName}
                        </h3>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {bonus.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Bonus Details */}
                    <div className="flex-1 p-6">
                      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground">
                            {bonus.title}
                          </h4>
                          <p className="mt-1 text-2xl font-bold text-primary">
                            {bonus.amount}
                          </p>

                          {/* Quick Info */}
                          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Wagering
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {bonus.wagering}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Min. Deposit
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {bonus.minDeposit}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Max Bet
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {bonus.maxBet}
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">
                                Expiry
                              </p>
                              <p className="text-sm font-medium text-foreground">
                                {bonus.expiry}
                              </p>
                            </div>
                          </div>

                          {/* Bonus Code */}
                          {bonus.code && (
                            <div className="mt-4 flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                Bonus Code:
                              </span>
                              <code className="rounded bg-secondary px-2 py-1 text-sm font-mono text-foreground">
                                {bonus.code}
                              </code>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="h-7 w-7 p-0"
                              >
                                <Copy className="h-4 w-4" />
                                <span className="sr-only">Copy code</span>
                              </Button>
                            </div>
                          )}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col gap-2">
                          <Button asChild>
                            <a
                              href={`/go/${casinos.find((c) => c.id === bonus.casinoId)?.slug}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              Claim Bonus
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link
                              href={`/casinos/${casinos.find((c) => c.id === bonus.casinoId)?.slug}`}
                            >
                              Read Review
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="border-t border-border bg-secondary/20 px-6 py-4">
                    <details className="group">
                      <summary className="flex cursor-pointer items-center gap-2 text-sm font-medium text-foreground">
                        <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                        View Terms & Conditions
                      </summary>
                      <ul className="mt-3 space-y-2 pl-6">
                        {bonus.terms.map((term, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            {term}
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Understanding Bonuses */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Understanding Casino Bonuses
          </h2>
          <p className="mt-4 text-muted-foreground">
            Before claiming any bonus, make sure you understand these key terms:
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Wagering Requirements",
                description:
                  "The number of times you must bet the bonus amount before withdrawing. Lower is better (30x-35x is considered fair).",
              },
              {
                title: "Maximum Bet Limit",
                description:
                  "The maximum amount you can bet per spin/hand while a bonus is active. Exceeding this may void your bonus.",
              },
              {
                title: "Game Contributions",
                description:
                  "Different games contribute differently to wagering. Slots usually 100%, table games often 10-20%.",
              },
              {
                title: "Expiry Period",
                description:
                  "Bonuses have a time limit to complete wagering. Unused bonuses are forfeited after expiry.",
              },
              {
                title: "Maximum Withdrawal",
                description:
                  "Some bonuses cap how much you can withdraw from winnings. Check this before playing.",
              },
              {
                title: "Excluded Games",
                description:
                  "Certain games may be excluded from bonus play or have reduced wagering contributions.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
