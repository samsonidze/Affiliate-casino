import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";

const footerLinks = {
  casinos: [
    { name: "All Casinos", href: "/casinos" },
    { name: "Top Rated", href: "/casinos?sort=rating" },
    { name: "New Casinos", href: "/casinos?sort=new" },
    { name: "Bonuses", href: "/bonuses" },
  ],
  guides: [
    { name: "How to Choose a Safe Casino", href: "/guides/safe-casino" },
    { name: "Casino Licenses Explained", href: "/guides/licenses" },
    { name: "Responsible Gambling", href: "/guides/responsible-gambling" },
    { name: "Safety Index", href: "/safety-index" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Disclaimer", href: "/disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Responsible Gambling Notice */}
        <div className="mb-10 rounded-lg border border-warning/30 bg-warning/5 p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 flex-shrink-0 text-warning" />
            <div className="space-y-2">
              <h3 className="font-semibold text-foreground">
                Responsible Gambling
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Gambling can be addictive. Please play responsibly and only
                gamble with money you can afford to lose. If you feel you may
                have a gambling problem, please seek help from organizations
                such as{" "}
                <a
                  href="https://www.begambleaware.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  BeGambleAware
                </a>
                ,{" "}
                <a
                  href="https://www.gamcare.org.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GamCare
                </a>
                , or{" "}
                <a
                  href="https://www.gamblingtherapy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Gambling Therapy
                </a>
                . Must be 18+ to gamble.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">
                SafeCasino
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Your trusted source for honest casino reviews and safety ratings.
              We help players make informed decisions.
            </p>
          </div>

          {/* Casinos */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Casinos</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.casinos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Guides</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Affiliate Disclosure */}
        <div className="mt-10 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground leading-relaxed">
            <strong>Affiliate Disclosure:</strong> SafeCasino may receive
            compensation when you sign up at casinos through our affiliate
            links. This does not influence our reviews or ratings, which are
            based on our independent evaluation methodology. We are committed to
            providing honest, unbiased information to help you make the best
            decisions.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SafeCasino. All rights reserved.
          </p>
          <p className="mt-4 text-xs text-muted-foreground sm:mt-0">
            18+ | Gamble Responsibly | T&Cs Apply
          </p>
        </div>
      </div>
    </footer>
  );
}
