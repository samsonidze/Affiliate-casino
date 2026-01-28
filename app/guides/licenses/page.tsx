import Link from "next/link";
import { Award, ChevronRight, Check, AlertTriangle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Casino Licenses Explained | SafeCasino",
  description:
    "Understand different gambling licenses and what they mean for player protection. Learn about UKGC, MGA, Curacao, and other regulatory bodies.",
};

const licenses = [
  {
    name: "UK Gambling Commission (UKGC)",
    tier: "Tier 1",
    country: "United Kingdom",
    rating: 10,
    pros: [
      "Strictest regulatory standards globally",
      "Strong player protection measures",
      "Mandatory responsible gambling tools",
      "Regular audits and compliance checks",
      "Efficient dispute resolution",
    ],
    cons: [
      "Only available to UK residents",
      "Stricter advertising regulations",
    ],
    description:
      "The UKGC is widely considered the gold standard in gambling regulation. Licensed casinos must adhere to strict requirements for player protection, fair gaming, and responsible gambling.",
  },
  {
    name: "Malta Gaming Authority (MGA)",
    tier: "Tier 1",
    country: "Malta",
    rating: 9.5,
    pros: [
      "Comprehensive regulatory framework",
      "Strong player fund protection",
      "Accepts players from many countries",
      "Good dispute resolution process",
      "Regular compliance monitoring",
    ],
    cons: [
      "Less strict than UKGC in some areas",
      "Some enforcement limitations",
    ],
    description:
      "The MGA is one of the most respected regulators in the industry. Malta-licensed casinos are generally considered safe and reliable, with good player protection standards.",
  },
  {
    name: "Gibraltar Regulatory Authority",
    tier: "Tier 1",
    country: "Gibraltar",
    rating: 9,
    pros: [
      "Strong regulatory reputation",
      "Strict licensing requirements",
      "Good player protection",
      "Established gambling hub",
    ],
    cons: [
      "Limited dispute resolution for non-UK players",
      "Smaller scope than UKGC/MGA",
    ],
    description:
      "Gibraltar has a long history of gambling regulation and maintains high standards. Many well-established casino brands operate under this license.",
  },
  {
    name: "Swedish Gambling Authority",
    tier: "Tier 1",
    country: "Sweden",
    rating: 9,
    pros: [
      "Strict responsible gambling requirements",
      "Strong consumer protection",
      "Mandatory spending limits",
      "Regulated advertising",
    ],
    cons: [
      "Only for Swedish market",
      "Very strict bonus limitations",
    ],
    description:
      "Sweden's gambling authority enforces some of the strictest responsible gambling measures in the world, with mandatory deposit limits and cooling-off periods.",
  },
  {
    name: "Curacao eGaming",
    tier: "Tier 2",
    country: "Curacao",
    rating: 6.5,
    pros: [
      "Lower operational costs",
      "Accepts players from many countries",
      "Faster licensing process",
      "Flexible regulations",
    ],
    cons: [
      "Limited player protection",
      "Weak dispute resolution",
      "Less regulatory oversight",
      "Easier for rogue operators to obtain",
    ],
    description:
      "Curacao is a popular licensing jurisdiction due to its accessibility, but offers less player protection than Tier 1 regulators. Exercise more caution with Curacao-only casinos.",
  },
  {
    name: "Kahnawake Gaming Commission",
    tier: "Tier 2",
    country: "Canada (First Nation)",
    rating: 6,
    pros: [
      "Long-standing gambling regulator",
      "Accepts international players",
      "Lower licensing costs",
    ],
    cons: [
      "Limited enforcement capabilities",
      "Less stringent player protection",
      "Dispute resolution can be slow",
    ],
    description:
      "The Kahnawake Gaming Commission is one of the oldest online gambling regulators but has faced criticism for inconsistent enforcement and limited player recourse.",
  },
];

export default function LicensesGuidePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/guides/licenses" className="hover:text-foreground">
              Guides
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Licenses</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Award className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                Casino Licenses Explained
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Understanding gambling licenses and what they mean for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-4 py-8 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A gambling license is essential for any legitimate online casino.
            The license indicates which regulatory body oversees the
            casino&apos;s operations and what standards they must adhere to. Not
            all licenses are equal - some offer much stronger player
            protections than others.
          </p>
        </div>

        {/* Tier Explanation */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-6">
              <Badge className="bg-primary text-primary-foreground">
                Tier 1
              </Badge>
              <h3 className="mt-3 font-semibold text-foreground">
                Premium Licenses
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Strictest regulations, strongest player protection, mandatory
                responsible gambling tools, and efficient dispute resolution.
              </p>
            </CardContent>
          </Card>
          <Card className="border-warning/30 bg-warning/5">
            <CardContent className="p-6">
              <Badge variant="outline" className="border-warning text-warning">
                Tier 2
              </Badge>
              <h3 className="mt-3 font-semibold text-foreground">
                Standard Licenses
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Basic regulatory oversight with less stringent requirements.
                Player protection may be limited. Requires more caution.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* License Details */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">
            Major Gambling Licenses
          </h2>

          <div className="mt-8 space-y-6">
            {licenses.map((license) => (
              <Card key={license.name}>
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <CardTitle className="text-lg">
                          {license.name}
                        </CardTitle>
                        <Badge
                          className={
                            license.tier === "Tier 1"
                              ? "bg-primary text-primary-foreground"
                              : "bg-warning/20 text-warning"
                          }
                        >
                          {license.tier}
                        </Badge>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {license.country}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {license.rating}/10
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Trust Rating
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{license.description}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="flex items-center gap-2 font-medium text-primary">
                        <Check className="h-4 w-4" />
                        Advantages
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {license.pros.map((pro) => (
                          <li
                            key={pro}
                            className="text-sm text-muted-foreground"
                          >
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="flex items-center gap-2 font-medium text-destructive">
                        <AlertTriangle className="h-4 w-4" />
                        Limitations
                      </h4>
                      <ul className="mt-2 space-y-1">
                        {license.cons.map((con) => (
                          <li
                            key={con}
                            className="text-sm text-muted-foreground"
                          >
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8 text-center">
              <Shield className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">
                Browse Licensed Casinos
              </h2>
              <p className="mt-4 text-muted-foreground">
                All casinos in our database display their license information.
                Filter by license to find casinos regulated by your preferred
                authority.
              </p>
              <Button asChild className="mt-6">
                <Link href="/casinos" className="flex items-center gap-2">
                  View All Casinos
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
