"use client";

import { useState } from "react";
import { SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

interface CasinoFiltersProps {
  sortBy: string;
  setSortBy: (value: string) => void;
  selectedLicenses: string[];
  setSelectedLicenses: (value: string[]) => void;
  selectedProviders: string[];
  setSelectedProviders: (value: string[]) => void;
  minSafetyScore: number;
  setMinSafetyScore: (value: number) => void;
}

const licenses = [
  "Malta Gaming Authority",
  "UK Gambling Commission",
  "Curacao eGaming",
  "Gibraltar Regulatory Authority",
  "Swedish Gambling Authority",
  "Kahnawake Gaming Commission",
];

const gameProviders = [
  "NetEnt",
  "Microgaming",
  "Evolution Gaming",
  "Pragmatic Play",
  "Play'n GO",
  "Yggdrasil",
  "Red Tiger",
  "Playtech",
];

const safetyScores = [
  { label: "All Casinos", value: 0 },
  { label: "7.0+ (Good)", value: 7 },
  { label: "8.0+ (Very Good)", value: 8 },
  { label: "9.0+ (Excellent)", value: 9 },
];

export function CasinoFilters({
  sortBy,
  setSortBy,
  selectedLicenses,
  setSelectedLicenses,
  selectedProviders,
  setSelectedProviders,
  minSafetyScore,
  setMinSafetyScore,
}: CasinoFiltersProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const toggleLicense = (license: string) => {
    setSelectedLicenses(
      selectedLicenses.includes(license)
        ? selectedLicenses.filter((l) => l !== license)
        : [...selectedLicenses, license]
    );
  };

  const toggleProvider = (provider: string) => {
    setSelectedProviders(
      selectedProviders.includes(provider)
        ? selectedProviders.filter((p) => p !== provider)
        : [...selectedProviders, provider]
    );
  };

  const clearFilters = () => {
    setSelectedLicenses([]);
    setSelectedProviders([]);
    setMinSafetyScore(0);
    setSortBy("rating");
  };

  const activeFilterCount =
    selectedLicenses.length +
    selectedProviders.length +
    (minSafetyScore > 0 ? 1 : 0);

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Sort By */}
      <div>
        <label className="text-sm font-medium text-foreground">Sort By</label>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="safety">Safety Index</SelectItem>
            <SelectItem value="bonus">Best Bonus</SelectItem>
            <SelectItem value="new">Newest</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Safety Score */}
      <div>
        <label className="text-sm font-medium text-foreground">
          Minimum Safety Score
        </label>
        <Select
          value={minSafetyScore.toString()}
          onValueChange={(v) => setMinSafetyScore(Number(v))}
        >
          <SelectTrigger className="mt-2 w-full">
            <SelectValue placeholder="Select minimum score" />
          </SelectTrigger>
          <SelectContent>
            {safetyScores.map((score) => (
              <SelectItem key={score.value} value={score.value.toString()}>
                {score.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Licenses */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium text-foreground">Licenses</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 space-y-2">
            {licenses.map((license) => (
              <div key={license} className="flex items-center gap-2">
                <Checkbox
                  id={license}
                  checked={selectedLicenses.includes(license)}
                  onCheckedChange={() => toggleLicense(license)}
                />
                <label
                  htmlFor={license}
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {license}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Game Providers */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-medium text-foreground">
            Game Providers
          </span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="mt-2 space-y-2">
            {gameProviders.map((provider) => (
              <div key={provider} className="flex items-center gap-2">
                <Checkbox
                  id={provider}
                  checked={selectedProviders.includes(provider)}
                  onCheckedChange={() => toggleProvider(provider)}
                />
                <label
                  htmlFor={provider}
                  className="text-sm text-muted-foreground cursor-pointer"
                >
                  {provider}
                </label>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {activeFilterCount > 0 && (
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={clearFilters}
        >
          Clear All Filters
        </Button>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Filters */}
      <Card className="hidden lg:block sticky top-24">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-primary" />
              <h2 className="font-semibold text-foreground">Filters</h2>
            </div>
            {activeFilterCount > 0 && (
              <Badge variant="secondary">{activeFilterCount} active</Badge>
            )}
          </div>
          <FilterContent />
        </CardContent>
      </Card>

      {/* Mobile Filter Button */}
      <div className="lg:hidden">
        <Button
          variant="outline"
          className="w-full bg-transparent"
          onClick={() => setShowMobileFilters(true)}
        >
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
          {activeFilterCount > 0 && (
            <Badge variant="secondary" className="ml-2">
              {activeFilterCount}
            </Badge>
          )}
        </Button>
      </div>

      {/* Mobile Filter Sheet */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowMobileFilters(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-primary" />
                <h2 className="font-semibold text-foreground">Filters</h2>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setShowMobileFilters(false)}
              >
                <span className="sr-only">Close filters</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <FilterContent />
            <div className="mt-8">
              <Button
                className="w-full"
                onClick={() => setShowMobileFilters(false)}
              >
                Apply Filters
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
