"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { CasinoCard } from "@/components/casino-card";
import { CasinoFilters } from "@/components/casino-filters";
import { casinos } from "@/lib/casino-data";

export default function CasinosPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [selectedLicenses, setSelectedLicenses] = useState<string[]>([]);
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [minSafetyScore, setMinSafetyScore] = useState(0);

  const filteredCasinos = useMemo(() => {
    let result = [...casinos];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (casino) =>
          casino.name.toLowerCase().includes(query) ||
          casino.licenses.some((l) => l.toLowerCase().includes(query)) ||
          casino.gameProviders.some((p) => p.toLowerCase().includes(query))
      );
    }

    // License filter
    if (selectedLicenses.length > 0) {
      result = result.filter((casino) =>
        casino.licenses.some((l) => selectedLicenses.includes(l))
      );
    }

    // Provider filter
    if (selectedProviders.length > 0) {
      result = result.filter((casino) =>
        casino.gameProviders.some((p) => selectedProviders.includes(p))
      );
    }

    // Safety score filter
    if (minSafetyScore > 0) {
      result = result.filter((casino) => casino.safetyIndex >= minSafetyScore);
    }

    // Sort
    switch (sortBy) {
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "safety":
        result.sort((a, b) => b.safetyIndex - a.safetyIndex);
        break;
      case "bonus":
        // Sort by bonus amount (extract number from string)
        result.sort((a, b) => {
          const aMatch = a.bonus.amount.match(/\d+/);
          const bMatch = b.bonus.amount.match(/\d+/);
          const aNum = aMatch ? parseInt(aMatch[0]) : 0;
          const bNum = bMatch ? parseInt(bMatch[0]) : 0;
          return bNum - aNum;
        });
        break;
      case "new":
        result.sort((a, b) => b.established - a.established);
        break;
    }

    return result;
  }, [searchQuery, sortBy, selectedLicenses, selectedProviders, minSafetyScore]);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
          <h1 className="text-3xl font-bold text-foreground lg:text-4xl">
            Online Casino Reviews
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare {casinos.length}+ verified casinos with our comprehensive
            safety ratings and honest reviews.
          </p>
          {/* Search */}
          <div className="relative mt-8 max-w-xl">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search casinos, licenses, or game providers..."
              className="pl-10 h-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters */}
          <div className="mb-6 lg:col-span-1 lg:mb-0">
            <CasinoFilters
              sortBy={sortBy}
              setSortBy={setSortBy}
              selectedLicenses={selectedLicenses}
              setSelectedLicenses={setSelectedLicenses}
              selectedProviders={selectedProviders}
              setSelectedProviders={setSelectedProviders}
              minSafetyScore={minSafetyScore}
              setMinSafetyScore={setMinSafetyScore}
            />
          </div>

          {/* Casino List */}
          <div className="lg:col-span-3">
            {/* Results Count */}
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Showing{" "}
                <span className="font-medium text-foreground">
                  {filteredCasinos.length}
                </span>{" "}
                casinos
              </p>
            </div>

            {/* Casino Cards */}
            {filteredCasinos.length > 0 ? (
              <div className="space-y-4">
                {filteredCasinos.map((casino) => (
                  <CasinoCard key={casino.id} casino={casino} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-border bg-card p-12 text-center">
                <p className="text-lg font-medium text-foreground">
                  No casinos found
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Try adjusting your filters or search query.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
