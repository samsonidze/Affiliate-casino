import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  FileCheck,
  Lock,
  CreditCard,
  Headphones,
  Scale,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "How to Choose a Safe Casino | SafeCasino",
  description:
    "Learn how to identify safe and trustworthy online casinos. Our comprehensive guide covers licenses, security, payment methods, and red flags to watch for.",
};

const checklistItems = [
  {
    icon: FileCheck,
    title: "Valid Gambling License",
    description:
      "Always check for a valid license from reputable regulators like the UK Gambling Commission, Malta Gaming Authority, or Gibraltar Regulatory Authority.",
    tips: [
      "Look for license information in the website footer",
      "Verify the license on the regulator's website",
      "Tier-1 licenses (UKGC, MGA) offer the strongest protection",
    ],
  },
  {
    icon: Lock,
    title: "SSL Encryption",
    description:
      "Ensure the casino uses SSL encryption to protect your personal and financial data. Look for the padlock icon in your browser's address bar.",
    tips: [
      "Check for HTTPS in the URL",
      "Look for security certificates",
      "Avoid casinos without visible security measures",
    ],
  },
  {
    icon: Scale,
    title: "Fair Gaming Certification",
    description:
      "Reputable casinos have their games tested by independent auditors like eCOGRA, iTech Labs, or GLI to ensure fair outcomes.",
    tips: [
      "Look for audit certificates on the casino site",
      "Check published RTP (Return to Player) rates",
      "Ensure the casino uses certified random number generators",
    ],
  },
  {
    icon: CreditCard,
    title: "Secure Payment Options",
    description:
      "Safe casinos offer multiple trusted payment methods and process withdrawals within reasonable timeframes.",
    tips: [
      "Check for popular payment methods (Visa, PayPal, etc.)",
      "Review withdrawal processing times",
      "Understand any fees or limits",
    ],
  },
  {
    icon: Headphones,
    title: "Responsive Customer Support",
    description:
      "Quality customer support is essential. Look for multiple contact options and reasonable response times.",
    tips: [
      "Test live chat response times before depositing",
      "Check for 24/7 support availability",
      "Look for multiple contact methods (chat, email, phone)",
    ],
  },
  {
    icon: Clock,
    title: "Responsible Gambling Tools",
    description:
      "Trustworthy casinos provide tools to help you stay in control of your gambling, including deposit limits and self-exclusion options.",
    tips: [
      "Check for deposit, loss, and time limits",
      "Look for self-exclusion options",
      "Ensure links to gambling help organizations are visible",
    ],
  },
];

const redFlags = [
  "No visible gambling license or fake license claims",
  "Poor or no SSL encryption",
  "Unrealistically high bonuses with hidden terms",
  "Multiple unresolved player complaints",
  "Delayed or refused withdrawals without explanation",
  "No responsible gambling tools available",
  "Unresponsive or rude customer support",
  "Lack of transparency about ownership",
];

export default function SafeCasinoGuidePage() {
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
            <Link href="/guides/safe-casino" className="hover:text-foreground">
              Guides
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Safe Casino</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <CheckCircle2 className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                How to Choose a Safe Casino
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Essential tips for finding trustworthy online casinos.
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
            Choosing a safe online casino is crucial for protecting your money
            and personal information. With thousands of online casinos available,
            it can be challenging to distinguish between legitimate operators
            and those that may pose risks to players. This guide will help you
            identify the key factors that separate safe casinos from potentially
            harmful ones.
          </p>
        </div>

        {/* Checklist */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">
            Safety Checklist
          </h2>
          <p className="mt-4 text-muted-foreground">
            Use this checklist when evaluating any online casino.
          </p>

          <div className="mt-8 space-y-6">
            {checklistItems.map((item, index) => (
              <Card key={item.title}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <item.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold text-foreground">
                          {item.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-muted-foreground">
                        {item.description}
                      </p>
                      <ul className="mt-4 space-y-2">
                        {item.tips.map((tip) => (
                          <li
                            key={tip}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            {tip}
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

        {/* Red Flags */}
        <div className="mt-16">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h2 className="text-xl font-bold text-foreground">
                  Red Flags to Watch For
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                If you notice any of these warning signs, proceed with extreme
                caution or avoid the casino entirely:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {redFlags.map((flag) => (
                  <li
                    key={flag}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    {flag}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8 text-center">
              <Shield className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">
                Find Pre-Verified Safe Casinos
              </h2>
              <p className="mt-4 text-muted-foreground">
                Skip the research and browse our collection of thoroughly vetted
                casinos, each evaluated using our comprehensive Safety Index.
              </p>
              <Button asChild className="mt-6">
                <Link href="/casinos" className="flex items-center gap-2">
                  Browse Safe Casinos
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
