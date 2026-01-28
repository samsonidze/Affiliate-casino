import Link from "next/link";
import {
  Heart,
  ChevronRight,
  AlertTriangle,
  Phone,
  ExternalLink,
  Check,
  Clock,
  CreditCard,
  ShieldAlert,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
  title: "Responsible Gambling Guide | SafeCasino",
  description:
    "Learn about responsible gambling practices, warning signs of problem gambling, and where to get help. Your wellbeing is our priority.",
};

const warningsSigns = [
  "Spending more money than you can afford to lose",
  "Chasing losses by betting more to recover previous losses",
  "Neglecting work, relationships, or responsibilities due to gambling",
  "Borrowing money or selling possessions to gamble",
  "Feeling restless or irritable when trying to reduce gambling",
  "Lying to family or friends about gambling habits",
  "Gambling to escape problems or relieve feelings of anxiety",
  "Failed attempts to cut back or stop gambling",
];

const tips = [
  {
    icon: CreditCard,
    title: "Set a Budget",
    description:
      "Decide how much you can afford to lose before you start playing. Never gamble with money needed for bills, rent, or other essentials.",
  },
  {
    icon: Clock,
    title: "Set Time Limits",
    description:
      "Decide in advance how long you'll play. Use casino tools to set session limits and reality check reminders.",
  },
  {
    icon: ShieldAlert,
    title: "Never Chase Losses",
    description:
      "Accept that losses are part of gambling. Trying to win back money usually leads to bigger losses.",
  },
  {
    icon: Users,
    title: "Don't Gamble Alone",
    description:
      "Keep gambling social and fun. If you find yourself gambling in isolation, it may be time to take a break.",
  },
];

const helpOrganizations = [
  {
    name: "BeGambleAware",
    url: "https://www.begambleaware.org",
    phone: "0808 8020 133",
    description:
      "Free, confidential help and support for anyone affected by gambling.",
    region: "UK",
  },
  {
    name: "GamCare",
    url: "https://www.gamcare.org.uk",
    phone: "0808 8020 133",
    description:
      "Support, information and advice for anyone affected by problem gambling.",
    region: "UK",
  },
  {
    name: "Gambling Therapy",
    url: "https://www.gamblingtherapy.org",
    phone: null,
    description:
      "Free online support for those affected by problem gambling worldwide.",
    region: "International",
  },
  {
    name: "Gamblers Anonymous",
    url: "https://www.gamblersanonymous.org.uk",
    phone: null,
    description:
      "A fellowship of people who share their experience, strength and hope.",
    region: "International",
  },
  {
    name: "National Council on Problem Gambling",
    url: "https://www.ncpgambling.org",
    phone: "1-800-522-4700",
    description: "24/7 helpline for problem gamblers and their families.",
    region: "USA",
  },
];

const selfExclusionTools = [
  {
    name: "GAMSTOP",
    url: "https://www.gamstop.co.uk",
    description:
      "Free service to self-exclude from all UK-licensed gambling sites for 6 months to 5 years.",
    region: "UK",
  },
  {
    name: "GamBan",
    url: "https://www.gamban.com",
    description:
      "Software that blocks access to gambling websites and apps on your devices.",
    region: "International",
  },
];

export default function ResponsibleGamblingPage() {
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
            <Link
              href="/guides/responsible-gambling"
              className="hover:text-foreground"
            >
              Guides
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Responsible Gambling</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
              <Heart className="h-7 w-7 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
                Responsible Gambling
              </h1>
              <p className="mt-2 text-lg text-muted-foreground">
                Your wellbeing matters. Gamble safely and know when to stop.
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
            Gambling should be an enjoyable form of entertainment, not a way to
            make money or escape problems. While most people gamble responsibly,
            for some it can become problematic. Understanding the risks and
            knowing how to gamble safely is essential for everyone who chooses
            to play.
          </p>
        </div>

        {/* Tips */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground">
            Tips for Safe Gambling
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {tips.map((tip) => (
              <Card key={tip.title}>
                <CardContent className="p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mt-4 font-semibold text-foreground">
                    {tip.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {tip.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Warning Signs */}
        <div className="mt-16">
          <Card className="border-destructive/30 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <CardTitle>Warning Signs of Problem Gambling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                If you recognize any of these signs in yourself or someone you
                know, it may be time to seek help:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {warningsSigns.map((sign) => (
                  <li
                    key={sign}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                    {sign}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Casino Tools */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Use Casino Responsible Gambling Tools
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reputable casinos offer various tools to help you stay in control:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Deposit Limits",
                description:
                  "Set daily, weekly, or monthly limits on how much you can deposit.",
              },
              {
                title: "Loss Limits",
                description:
                  "Limit how much you can lose within a specific time period.",
              },
              {
                title: "Session Time Limits",
                description:
                  "Set reminders or automatic logouts after a certain playtime.",
              },
              {
                title: "Reality Checks",
                description:
                  "Receive notifications showing how long you've been playing.",
              },
              {
                title: "Cooling-Off Periods",
                description:
                  "Take a short break from gambling (24 hours to 6 weeks).",
              },
              {
                title: "Self-Exclusion",
                description:
                  "Block yourself from the casino for an extended period.",
              },
            ].map((tool) => (
              <div
                key={tool.title}
                className="flex items-start gap-3 rounded-lg border border-border p-4"
              >
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-medium text-foreground">{tool.title}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Exclusion */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">
            Self-Exclusion Services
          </h2>
          <p className="mt-4 text-muted-foreground">
            If you need to take a longer break, these services can help block
            access to gambling:
          </p>

          <div className="mt-6 space-y-4">
            {selfExclusionTools.map((tool) => (
              <Card key={tool.name}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {tool.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                      <p className="mt-1 text-xs text-primary">{tool.region}</p>
                    </div>
                    <Button variant="outline" asChild>
                      <a
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Visit Site
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Help Organizations */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-foreground">Get Help</h2>
          <p className="mt-4 text-muted-foreground">
            If you or someone you know needs support, these organizations offer
            free, confidential help:
          </p>

          <div className="mt-6 space-y-4">
            {helpOrganizations.map((org) => (
              <Card key={org.name} className="border-primary/30">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">
                        {org.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {org.description}
                      </p>
                      {org.phone && (
                        <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                          <Phone className="h-4 w-4" />
                          {org.phone}
                        </div>
                      )}
                      <p className="mt-1 text-xs text-muted-foreground">
                        {org.region}
                      </p>
                    </div>
                    <Button asChild>
                      <a
                        href={org.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Get Help
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="mt-16">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="p-8 text-center">
              <Heart className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 text-2xl font-bold text-foreground">
                Remember: It&apos;s Okay to Ask for Help
              </h2>
              <p className="mt-4 text-muted-foreground">
                Problem gambling is a recognized condition that affects millions
                of people. Seeking help is a sign of strength, not weakness.
                Support is available 24/7, and recovery is possible.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
