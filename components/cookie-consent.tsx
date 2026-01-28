"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card p-4 shadow-lg md:p-6">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div className="flex-1 pr-8">
          <h3 className="text-sm font-semibold text-foreground">
            Cookie Consent
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            We use cookies to enhance your browsing experience, analyze site
            traffic, and personalize content. By clicking &quot;Accept
            All&quot;, you consent to our use of cookies.{" "}
            <a href="/cookies" className="text-primary hover:underline">
              Learn more
            </a>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="sm" onClick={declineCookies}>
            Decline
          </Button>
          <Button size="sm" onClick={acceptCookies}>
            Accept All
          </Button>
        </div>
        <button
          onClick={declineCookies}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground md:hidden"
          aria-label="Close cookie banner"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
