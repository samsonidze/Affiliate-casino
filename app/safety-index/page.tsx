import Link from "next/link";
import {
  Shield,
  Scale,
  Lock,
  FileCheck,
  Users,
  AlertTriangle,
  ChevronRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SafetyScore } from "@/components/safety-score";

export const metadata = {
  title: "Safety Index Explained | SafeCasino",
  description:
    "Learn how our Safety Index score is calculated. Understand our methodology for rating online casinos based on licenses, security, fair gaming, and player protection.",
};

const safetyFactors = [
  {
    icon: FileCheck,
    title: "License & Regulation",
    weight: "25%",
    description:
      "We verify all gambling licenses and check compliance with regulatory requirements. Casinos with multiple tier-1 licenses (UKGC, MGA) score highest.",
    criteria: [
      "Valid gambling license verification",
      "Regulatory compliance history",
      "License jurisdiction reputation",
      "Multiple license bonus",
    ],
  },
  {
    icon: Lock,
    title: "Security & Encryption",
    weight: "20%",
    description:
      "Technical security assessment including SSL encryption, data protection practices, and secure payment processing.",
    criteria: [
      "SSL/TLS encryption (256-bit minimum)",
      "Secure payment gateways",
      "Data protection compliance (GDPR)",
      "Two-factor authentication availability",
    ],
  },
  {
    icon: Scale,
    title: "Fair Gaming Practices",
    weight: "20%",
    description:
      "Evaluation of game fairness, RTP transparency, RNG certification, and partnerships with reputable game providers.",
    criteria: [
      "Third-party RNG audits (eCOGRA, iTech Labs)",
      "Published RTP percentages",
      "Reputable software providers",
      "Game outcome transparency",
    ],
  },
  {
    icon: Users,
    title: "Responsible Gambling Tools",
    weight: "20%",
    description:
      "Assessment of available tools to help players maintain control, including deposit limits, self-exclusion, and reality checks.",
    criteria: [
      "Deposit and loss limits",
      "Self-exclusion options",
      "Reality check notifications",
      "Session time limits",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Complaint Resolution",
    weight: "15%",
    description:
      "Analysis of how casinos handle player complaints, dispute resolution processes, and overall customer satisfaction.",
    criteria: [
      "Response time to complaints",
      "Fair dispute resolution",
      "Payment reliability",
      "Customer feedback analysis",
    ],
  },
];

const scoreRanges = [
  {
    range: "9.0 - 10.0",
    label: "Excellent",
    color: "text-primary",
    bgColor: "bg-primary/20",
    description:
      "Top-tier casinos with exceptional safety standards, multiple licenses, and proven track records.",
  },
  {
    range: "8.0 - 8.9",
    label: "Very Good",
    color: "text-accent",
    bgColor: "bg-accent/20",
    description:
      "Highly reliable casinos with strong security measures and good regulatory compliance.",
  },
  {
    range: "7.0 - 7.9",
    label: "Good",
    color: "text-warning",
    bgColor: "bg-warning/20",
    description:
      "Solid casinos meeting minimum safety requirements with room for improvement.",
  },
  {
    range: "Below 7.0",
    label: "Caution",
    color: "text-destructive",
    bgColor: "bg-destructive/20",
    description:
      "Casinos with concerns that require careful consideration. We recommend extra caution.",
  },
];

export default function SafetyIndexPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Shield className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                Safety Index Explained
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                How we evaluate and rate online casinos for player safety.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground">
                Our Rating Methodology
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The SafeCasino Safety Index is a proprietary scoring system
                designed to help players make informed decisions. Our team of
                experts evaluates each casino across multiple criteria,
                weighing factors based on their importance to player safety and
                experience.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Unlike other review sites, we prioritize transparency and player
                protection over promotional considerations. Our scores are
                updated regularly to reflect any changes in a casino&apos;s
                operations, licensing status, or player feedback.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="flex flex-col items-center p-8">
                  <SafetyScore score={9.5} size="lg" showLabel />
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Example of our highest-rated casino score
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Score Ranges */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Score Interpretation
          </h2>
          <p className="mt-4 text-muted-foreground">
            Understanding what each score range means for your safety.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {scoreRanges.map((range) => (
              <Card key={range.range} className={`border ${range.bgColor}`}>
                <CardContent className="p-6">
                  <div className={`text-2xl font-bold ${range.color}`}>
                    {range.range}
                  </div>
                  <div className={`mt-1 font-semibold ${range.color}`}>
                    {range.label}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {range.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Safety Factors */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Evaluation Criteria
          </h2>
          <p className="mt-4 text-muted-foreground">
            The five key factors we assess when calculating a casino&apos;s Safety
            Index.
          </p>

          <div className="mt-8 space-y-6">
            {safetyFactors.map((factor) => (
              <Card key={factor.title}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-6 lg:flex-row">
                    <div className="flex items-start gap-4 lg:w-1/3">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <factor.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          {factor.title}
                        </h3>
                        <p className="text-sm text-primary">
                          Weight: {factor.weight}
                        </p>
                      </div>
                    </div>
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground">
                        {factor.description}
                      </p>
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {factor.criteria.map((criterion) => (
                          <li
                            key={criterion}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 flex-shrink-0 text-primary" />
                            {criterion}
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

        {/* Trust Statement */}
        <div className="mt-16">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary" />
                <h2 className="mt-4 text-2xl font-bold text-foreground">
                  Our Commitment to Transparency
                </h2>
                <p className="mt-4 max-w-2xl text-muted-foreground">
                  We are committed to providing unbiased, accurate information.
                  While we may receive compensation through affiliate links,
                  this never influences our Safety Index scores. Our primary
                  goal is to protect players and help them make informed
                  decisions.
                </p>
                <Button asChild className="mt-6">
                  <Link href="/casinos" className="flex items-center gap-2">
                    View Casino Ratings
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
