import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ExternalLink,
  Check,
  X,
  Star,
  Shield,
  CreditCard,
  Gamepad2,
  Headphones,
  Clock,
  Gift,
  ChevronRight,
  AlertTriangle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SafetyScore } from "@/components/safety-score";
import { CasinoCard } from "@/components/casino-card";
import { casinos, getSafetyLabel, getSafetyColor } from "@/lib/casino-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return casinos.map((casino) => ({
    slug: casino.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const casino = casinos.find((c) => c.slug === slug);

  if (!casino) {
    return {
      title: "Casino Not Found",
    };
  }

  return {
    title: `${casino.name} Review - Safety Index ${casino.safetyIndex}/10 | SafeCasino`,
    description: `Read our in-depth review of ${casino.name}. Safety rating: ${casino.safetyIndex}/10. ${casino.bonus.amount}. Honest analysis of games, payments, and support.`,
  };
}

export default async function CasinoReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const casino = casinos.find((c) => c.slug === slug);

  if (!casino) {
    notFound();
  }

  const relatedCasinos = casinos
    .filter((c) => c.id !== casino.id && c.safetyIndex >= 8)
    .slice(0, 3);

  const safetyMetrics = [
    { name: "License & Regulation", score: casino.safetyIndex + 0.3 },
    { name: "Player Security", score: casino.safetyIndex - 0.2 },
    { name: "Fair Gaming Practices", score: casino.safetyIndex + 0.1 },
    { name: "Responsible Gambling Tools", score: casino.safetyIndex - 0.1 },
    { name: "Payment Security", score: casino.safetyIndex },
  ].map((m) => ({ ...m, score: Math.min(10, Math.max(0, m.score)) }));

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-4 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/casinos" className="hover:text-foreground">
              Casinos
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{casino.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            {/* Casino Info */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 text-3xl font-bold text-primary">
                {casino.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold text-foreground">
                    {casino.name}
                  </h1>
                  {casino.safetyIndex >= 9 && (
                    <Badge className="bg-primary text-primary-foreground">
                      Top Rated
                    </Badge>
                  )}
                </div>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(casino.rating)
                            ? "fill-accent text-accent"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-lg font-medium text-foreground">
                      {casino.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {casino.licenses.map((license) => (
                    <Badge key={license} variant="secondary">
                      {license}
                    </Badge>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Established {casino.established} | Min. Deposit:{" "}
                  {casino.minDeposit}
                </p>
              </div>
            </div>

            {/* Safety Score & CTA */}
            <div className="flex flex-col items-center gap-4 sm:flex-row lg:flex-col">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="flex items-center gap-4 p-4">
                  <SafetyScore score={casino.safetyIndex} size="lg" showLabel />
                  <div className="text-sm">
                    <p className="font-medium text-foreground">Safety Index</p>
                    <p className="text-muted-foreground">
                      Verified & trusted casino
                    </p>
                  </div>
                </CardContent>
              </Card>
              <div className="flex flex-col gap-2 w-full sm:w-auto">
                <Button size="lg" asChild className="w-full">
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
                <p className="text-center text-xs text-muted-foreground">
                  T&Cs apply. 18+ only.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bonus Banner */}
      <div className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                <Gift className="h-6 w-6 text-accent" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  {casino.bonus.title}
                </p>
                <p className="text-xl font-bold text-primary">
                  {casino.bonus.amount}
                </p>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground">
                Wagering: {casino.bonus.wagering}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Review Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="safety">Safety</TabsTrigger>
                <TabsTrigger value="games">Games</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6 space-y-6">
                {/* Pros & Cons */}
                <Card>
                  <CardHeader>
                    <CardTitle>Pros & Cons</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <h4 className="mb-4 font-medium text-primary">
                          Advantages
                        </h4>
                        <ul className="space-y-3">
                          {casino.pros.map((pro) => (
                            <li key={pro} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                              <span className="text-muted-foreground">
                                {pro}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="mb-4 font-medium text-destructive">
                          Disadvantages
                        </h4>
                        <ul className="space-y-3">
                          {casino.cons.map((con) => (
                            <li key={con} className="flex items-start gap-2">
                              <X className="mt-0.5 h-5 w-5 flex-shrink-0 text-destructive" />
                              <span className="text-muted-foreground">
                                {con}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Info</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <CreditCard className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Min. Deposit
                          </p>
                          <p className="font-medium text-foreground">
                            {casino.minDeposit}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Withdrawal Time
                          </p>
                          <p className="font-medium text-foreground">
                            {casino.withdrawalTime}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                          <Shield className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            Established
                          </p>
                          <p className="font-medium text-foreground">
                            {casino.established}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Review Summary */}
                <Card>
                  <CardHeader>
                    <CardTitle>Our Verdict</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {casino.name} is a{" "}
                      <span className={getSafetyColor(casino.safetyIndex)}>
                        {getSafetyLabel(casino.safetyIndex).toLowerCase()}
                      </span>{" "}
                      rated casino with a safety index of {casino.safetyIndex}
                      /10. Licensed by{" "}
                      {casino.licenses.slice(0, 2).join(" and ")}, this casino
                      offers a solid gaming experience with {casino.bonus.title}{" "}
                      of {casino.bonus.amount}. With{" "}
                      {casino.gameProviders.length}+ game providers including{" "}
                      {casino.gameProviders.slice(0, 3).join(", ")}, players have
                      access to a diverse selection of games. Withdrawal
                      processing typically takes {casino.withdrawalTime}, which
                      is competitive in the industry.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="safety" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      Safety Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Safety Metrics */}
                    <div className="space-y-4">
                      {safetyMetrics.map((metric) => (
                        <div key={metric.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-muted-foreground">
                              {metric.name}
                            </span>
                            <span
                              className={`font-medium ${getSafetyColor(metric.score)}`}
                            >
                              {metric.score.toFixed(1)}/10
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-secondary">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: `${(metric.score / 10) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Licenses */}
                    <div>
                      <h4 className="mb-3 font-medium text-foreground">
                        Gaming Licenses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {casino.licenses.map((license) => (
                          <Badge
                            key={license}
                            variant="outline"
                            className="py-2"
                          >
                            <Check className="mr-1 h-3 w-3 text-primary" />
                            {license}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="games" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gamepad2 className="h-5 w-5 text-primary" />
                      Game Selection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <h4 className="mb-3 font-medium text-foreground">
                      Software Providers
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {casino.gameProviders.map((provider) => (
                        <Badge key={provider} variant="secondary">
                          {provider}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {casino.name} partners with {casino.gameProviders.length}{" "}
                      leading software providers to offer a diverse selection of
                      slots, table games, and live dealer options.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="payments" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      Payment Methods
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {casino.paymentMethods.map((method) => (
                        <Badge key={method} variant="secondary">
                          {method}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <div className="rounded-lg border border-border p-4">
                        <p className="text-sm text-muted-foreground">
                          Minimum Deposit
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          {casino.minDeposit}
                        </p>
                      </div>
                      <div className="rounded-lg border border-border p-4">
                        <p className="text-sm text-muted-foreground">
                          Withdrawal Time
                        </p>
                        <p className="text-lg font-semibold text-foreground">
                          {casino.withdrawalTime}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="support" className="mt-6 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Headphones className="h-5 w-5 text-primary" />
                      Customer Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {casino.customerSupport.map((support) => (
                        <Badge key={support} variant="secondary">
                          {support}
                        </Badge>
                      ))}
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {casino.name} offers customer support via{" "}
                      {casino.customerSupport.join(", ")}. Support is available
                      to assist with account inquiries, technical issues, and
                      responsible gambling concerns.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="mt-8 lg:mt-0">
            <div className="sticky top-24 space-y-6">
              {/* CTA Card */}
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="p-6">
                  <div className="text-center">
                    <p className="text-sm font-medium text-muted-foreground">
                      {casino.bonus.title}
                    </p>
                    <p className="mt-2 text-2xl font-bold text-primary">
                      {casino.bonus.amount}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {casino.bonus.wagering}
                    </p>
                  </div>
                  <Button size="lg" asChild className="mt-6 w-full">
                    <a
                      href={`/go/${casino.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Claim Bonus
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                  <p className="mt-4 text-center text-xs text-muted-foreground">
                    New players only. T&Cs apply. 18+
                  </p>
                </CardContent>
              </Card>

              {/* Warning Notice */}
              <Card className="border-warning/30 bg-warning/5">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 flex-shrink-0 text-warning" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Gamble Responsibly
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Gambling can be addictive. Play responsibly and only bet
                        what you can afford to lose.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Countries */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">
                    Available Countries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {casino.countries.map((country) => (
                      <Badge key={country} variant="secondary">
                        {country}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Related Casinos */}
        {relatedCasinos.length > 0 && (
          <div className="mt-12 border-t border-border pt-12">
            <h2 className="text-2xl font-bold text-foreground">
              Similar Casinos
            </h2>
            <p className="mt-2 text-muted-foreground">
              Other highly-rated casinos you might like
            </p>
            <div className="mt-6 space-y-4">
              {relatedCasinos.map((c) => (
                <CasinoCard key={c.id} casino={c} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
