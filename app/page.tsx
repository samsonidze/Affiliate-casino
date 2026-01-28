import Link from "next/link";
import {
  Shield,
  Search,
  Award,
  Clock,
  ChevronRight,
  Star,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CasinoCard } from "@/components/casino-card";
import { SafetyScore } from "@/components/safety-score";
import { casinos } from "@/lib/casino-data";

const features = [
  {
    icon: Shield,
    title: "Verified Safety",
    description:
      "Every casino is thoroughly reviewed for licenses, security protocols, and fair gaming practices.",
  },
  {
    icon: Search,
    title: "Transparent Reviews",
    description:
      "Honest, unbiased evaluations based on real player experiences and industry standards.",
  },
  {
    icon: Award,
    title: "Best Bonuses",
    description:
      "Compare welcome offers and promotions with clear terms and wagering requirements.",
  },
  {
    icon: Clock,
    title: "Regular Updates",
    description:
      "Our reviews are continuously updated to reflect the latest changes at each casino.",
  },
];

const howWeReview = [
  {
    step: "01",
    title: "License Verification",
    description:
      "We verify all gambling licenses and check regulatory compliance.",
  },
  {
    step: "02",
    title: "Security Analysis",
    description:
      "SSL encryption, data protection, and responsible gambling tools are evaluated.",
  },
  {
    step: "03",
    title: "Game Testing",
    description:
      "We test games, RTPs, and software providers for fairness and quality.",
  },
  {
    step: "04",
    title: "Payment Review",
    description:
      "Deposit/withdrawal methods, processing times, and limits are thoroughly checked.",
  },
  {
    step: "05",
    title: "Support Quality",
    description:
      "Customer service responsiveness and helpfulness are tested multiple times.",
  },
];

export default function HomePage() {
  const featuredCasinos = casinos.filter((c) => c.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-secondary/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm text-primary">
              <Shield className="h-4 w-4" />
              Trusted by 100,000+ players worldwide
            </div>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Find Safe & Trusted
              <span className="text-primary"> Online Casinos</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Discover verified casinos with transparent reviews, safety
              ratings, and the best bonuses. We help you make informed decisions
              with our comprehensive safety index.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/casinos" className="flex items-center gap-2">
                  Browse All Casinos
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/safety-index">Learn About Safety Index</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Why Trust SafeCasino?
            </h2>
            <p className="mt-4 text-muted-foreground">
              We prioritize your safety and provide honest, data-driven reviews.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="border-border bg-card transition-all hover:border-primary/50"
              >
                <CardContent className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Casinos */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                Top Rated Casinos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our highest-rated casinos based on safety, bonuses, and overall
                experience.
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex bg-transparent">
              <Link href="/casinos" className="flex items-center gap-2">
                View All
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-10 space-y-4">
            {featuredCasinos.map((casino) => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button asChild>
              <Link href="/casinos">View All Casinos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How We Review */}
      <section className="border-b border-border bg-secondary/20 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground">
                How We Review Casinos
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our comprehensive review process ensures every casino is
                thoroughly evaluated. We analyze multiple factors to calculate
                our proprietary Safety Index score.
              </p>
              <div className="mt-8 space-y-6">
                {howWeReview.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="outline" asChild>
                  <Link href="/safety-index">
                    Learn More About Our Methodology
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Card className="w-full max-w-md border-border bg-card">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground">
                      Safety Index Score
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Our proprietary rating system
                    </p>
                  </div>
                  <div className="mt-8 flex justify-center">
                    <SafetyScore score={9.5} size="lg" showLabel />
                  </div>
                  <div className="mt-8 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        License & Regulation
                      </span>
                      <span className="font-medium text-foreground">
                        9.8/10
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Security</span>
                      <span className="font-medium text-foreground">
                        9.6/10
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Fair Gaming</span>
                      <span className="font-medium text-foreground">
                        9.4/10
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Player Protection
                      </span>
                      <span className="font-medium text-foreground">
                        9.5/10
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="border-b border-border py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">500+</div>
              <div className="mt-2 text-muted-foreground">
                Casinos Reviewed
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">50+</div>
              <div className="mt-2 text-muted-foreground">
                Review Criteria
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">100K+</div>
              <div className="mt-2 text-muted-foreground">
                Monthly Visitors
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">24/7</div>
              <div className="mt-2 text-muted-foreground">
                Updated Reviews
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Links */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">
              Learn Before You Play
            </h2>
            <p className="mt-4 text-muted-foreground">
              Educational resources to help you gamble safely and responsibly.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <Link
              href="/guides/safe-casino"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CheckCircle2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                How to Choose a Safe Casino
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Learn what to look for when selecting an online casino.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                Read Guide
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/guides/licenses"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                Casino Licenses Explained
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Understand different gambling licenses and what they mean.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                Read Guide
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/guides/responsible-gambling"
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary transition-colors">
                Responsible Gambling
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tips and resources for safe and responsible gambling.
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm text-primary">
                Read Guide
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
