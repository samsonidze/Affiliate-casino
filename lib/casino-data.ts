export interface Casino {
  id: string;
  name: string;
  slug: string;
  logo: string;
  safetyIndex: number;
  rating: number;
  bonus: {
    title: string;
    amount: string;
    wagering: string;
  };
  pros: string[];
  cons: string[];
  licenses: string[];
  paymentMethods: string[];
  gameProviders: string[];
  countries: string[];
  established: number;
  minDeposit: string;
  withdrawalTime: string;
  customerSupport: string[];
  featured: boolean;
}

export const casinos: Casino[] = [
  {
    id: "1",
    name: "LuckyStar Casino",
    slug: "luckystar-casino",
    logo: "/casinos/luckystar.png",
    safetyIndex: 9.2,
    rating: 4.8,
    bonus: {
      title: "Welcome Package",
      amount: "Up to $1,500 + 150 Free Spins",
      wagering: "35x bonus amount",
    },
    pros: [
      "Excellent customer support 24/7",
      "Fast withdrawal processing",
      "Wide selection of games",
      "Mobile-friendly platform",
    ],
    cons: ["Limited cryptocurrency options", "High wagering requirements"],
    licenses: ["Malta Gaming Authority", "UK Gambling Commission"],
    paymentMethods: ["Visa", "Mastercard", "Skrill", "Neteller", "Bank Transfer"],
    gameProviders: ["NetEnt", "Microgaming", "Evolution Gaming", "Pragmatic Play"],
    countries: ["UK", "Canada", "Germany", "Finland", "Norway"],
    established: 2018,
    minDeposit: "$10",
    withdrawalTime: "24-48 hours",
    customerSupport: ["Live Chat", "Email", "Phone"],
    featured: true,
  },
  {
    id: "2",
    name: "Royal Spin Casino",
    slug: "royal-spin-casino",
    logo: "/casinos/royalspin.png",
    safetyIndex: 8.8,
    rating: 4.6,
    bonus: {
      title: "First Deposit Bonus",
      amount: "200% up to $2,000",
      wagering: "40x bonus amount",
    },
    pros: [
      "Huge game library",
      "VIP rewards program",
      "Multiple payment options",
      "Regular promotions",
    ],
    cons: ["Slower email support", "Limited live dealer games"],
    licenses: ["Curacao eGaming", "Malta Gaming Authority"],
    paymentMethods: ["Visa", "Mastercard", "Bitcoin", "Ethereum", "Skrill"],
    gameProviders: ["Play'n GO", "Yggdrasil", "Red Tiger", "Evolution Gaming"],
    countries: ["Canada", "Australia", "Germany", "Austria", "Ireland"],
    established: 2019,
    minDeposit: "$20",
    withdrawalTime: "1-3 business days",
    customerSupport: ["Live Chat", "Email"],
    featured: true,
  },
  {
    id: "3",
    name: "Diamond Palace",
    slug: "diamond-palace",
    logo: "/casinos/diamond.png",
    safetyIndex: 9.5,
    rating: 4.9,
    bonus: {
      title: "Welcome Bonus",
      amount: "100% up to $500 + 200 Free Spins",
      wagering: "30x bonus amount",
    },
    pros: [
      "Top-rated safety score",
      "Fastest payouts in industry",
      "Dedicated account managers",
      "Exclusive VIP perks",
    ],
    cons: ["Higher minimum deposit", "Geo-restrictions apply"],
    licenses: ["UK Gambling Commission", "Gibraltar Regulatory Authority"],
    paymentMethods: ["Visa", "Mastercard", "PayPal", "Bank Transfer", "Paysafecard"],
    gameProviders: ["NetEnt", "Microgaming", "Playtech", "IGT", "Evolution Gaming"],
    countries: ["UK", "Ireland", "Sweden", "Finland", "Canada"],
    established: 2015,
    minDeposit: "$25",
    withdrawalTime: "12-24 hours",
    customerSupport: ["Live Chat", "Email", "Phone", "WhatsApp"],
    featured: true,
  },
  {
    id: "4",
    name: "Vegas Dreams",
    slug: "vegas-dreams",
    logo: "/casinos/vegas.png",
    safetyIndex: 8.5,
    rating: 4.4,
    bonus: {
      title: "No Deposit Bonus",
      amount: "$25 Free + 100% up to $1,000",
      wagering: "45x bonus amount",
    },
    pros: [
      "No deposit bonus available",
      "Large slot selection",
      "Weekly cashback offers",
      "Crypto-friendly",
    ],
    cons: ["Higher wagering requirements", "Limited table games"],
    licenses: ["Curacao eGaming"],
    paymentMethods: ["Visa", "Bitcoin", "Litecoin", "Ethereum", "Skrill"],
    gameProviders: ["Betsoft", "Rival", "Pragmatic Play", "Hacksaw Gaming"],
    countries: ["USA", "Canada", "Australia", "New Zealand"],
    established: 2020,
    minDeposit: "$10",
    withdrawalTime: "2-5 business days",
    customerSupport: ["Live Chat", "Email"],
    featured: false,
  },
  {
    id: "5",
    name: "Golden Crown Casino",
    slug: "golden-crown-casino",
    logo: "/casinos/goldencrown.png",
    safetyIndex: 9.0,
    rating: 4.7,
    bonus: {
      title: "Welcome Package",
      amount: "Up to $3,000 + 100 Free Spins",
      wagering: "35x bonus amount",
    },
    pros: [
      "Generous welcome package",
      "Excellent mobile app",
      "Wide range of live games",
      "Multiple currencies supported",
    ],
    cons: ["Limited weekend support", "Bonus restrictions on some games"],
    licenses: ["Malta Gaming Authority", "Swedish Gambling Authority"],
    paymentMethods: ["Visa", "Mastercard", "Trustly", "Skrill", "Neteller"],
    gameProviders: ["Evolution Gaming", "NetEnt", "Play'n GO", "Quickspin"],
    countries: ["Sweden", "Finland", "Norway", "Germany", "Canada"],
    established: 2017,
    minDeposit: "$15",
    withdrawalTime: "24-48 hours",
    customerSupport: ["Live Chat", "Email", "Phone"],
    featured: true,
  },
  {
    id: "6",
    name: "Jackpot City",
    slug: "jackpot-city",
    logo: "/casinos/jackpotcity.png",
    safetyIndex: 8.3,
    rating: 4.3,
    bonus: {
      title: "Match Bonus",
      amount: "150% up to $750",
      wagering: "40x bonus amount",
    },
    pros: [
      "Progressive jackpot games",
      "Established reputation",
      "Regular tournaments",
      "Loyalty program",
    ],
    cons: ["Dated interface design", "Limited game filtering"],
    licenses: ["Kahnawake Gaming Commission", "Malta Gaming Authority"],
    paymentMethods: ["Visa", "Mastercard", "ecoPayz", "Bank Transfer"],
    gameProviders: ["Microgaming", "Evolution Gaming", "Rabcat"],
    countries: ["Canada", "New Zealand", "Ireland", "UK"],
    established: 1998,
    minDeposit: "$10",
    withdrawalTime: "2-4 business days",
    customerSupport: ["Live Chat", "Email"],
    featured: false,
  },
];

export const bonuses = [
  {
    id: "1",
    casinoId: "1",
    casinoName: "LuckyStar Casino",
    casinoLogo: "/casinos/luckystar.png",
    type: "Welcome Bonus",
    title: "Welcome Package",
    amount: "Up to $1,500 + 150 Free Spins",
    wagering: "35x bonus amount",
    minDeposit: "$10",
    maxBet: "$5 per spin",
    validGames: ["Slots", "Table Games"],
    expiry: "30 days",
    code: "WELCOME150",
    terms: [
      "Minimum deposit of $10 required",
      "Wagering requirement: 35x bonus amount",
      "Maximum bet while bonus active: $5",
      "Free spins valid on selected slots only",
      "Bonus expires 30 days after activation",
    ],
  },
  {
    id: "2",
    casinoId: "3",
    casinoName: "Diamond Palace",
    casinoLogo: "/casinos/diamond.png",
    type: "Welcome Bonus",
    title: "Premium Welcome Offer",
    amount: "100% up to $500 + 200 Free Spins",
    wagering: "30x bonus amount",
    minDeposit: "$25",
    maxBet: "$10 per spin",
    validGames: ["All Games"],
    expiry: "21 days",
    code: "DIAMOND500",
    terms: [
      "Minimum deposit of $25 required",
      "Lower wagering: 30x bonus amount",
      "Free spins credited over 10 days",
      "Valid on all casino games",
      "VIP members get additional perks",
    ],
  },
  {
    id: "3",
    casinoId: "4",
    casinoName: "Vegas Dreams",
    casinoLogo: "/casinos/vegas.png",
    type: "No Deposit Bonus",
    title: "Free Cash No Deposit",
    amount: "$25 Free",
    wagering: "45x bonus amount",
    minDeposit: "$0",
    maxBet: "$2 per spin",
    validGames: ["Slots"],
    expiry: "7 days",
    code: "FREE25",
    terms: [
      "No deposit required",
      "Maximum withdrawal: $100",
      "Wagering requirement: 45x",
      "Valid on slots only",
      "One bonus per player/household",
    ],
  },
  {
    id: "4",
    casinoId: "5",
    casinoName: "Golden Crown Casino",
    casinoLogo: "/casinos/goldencrown.png",
    type: "Welcome Package",
    title: "3-Tier Welcome Bonus",
    amount: "Up to $3,000 + 100 Free Spins",
    wagering: "35x bonus amount",
    minDeposit: "$15",
    maxBet: "$7.50 per spin",
    validGames: ["Slots", "Live Casino"],
    expiry: "30 days",
    code: "CROWN3000",
    terms: [
      "Spread across first 3 deposits",
      "1st: 100% up to $1,000",
      "2nd: 75% up to $1,000",
      "3rd: 50% up to $1,000",
      "Free spins on premium slots",
    ],
  },
];

export function getSafetyColor(score: number): string {
  if (score >= 9) return "text-primary";
  if (score >= 8) return "text-accent";
  if (score >= 7) return "text-warning";
  return "text-destructive";
}

export function getSafetyBgColor(score: number): string {
  if (score >= 9) return "bg-primary/20";
  if (score >= 8) return "bg-accent/20";
  if (score >= 7) return "bg-warning/20";
  return "bg-destructive/20";
}

export function getSafetyLabel(score: number): string {
  if (score >= 9) return "Excellent";
  if (score >= 8) return "Very Good";
  if (score >= 7) return "Good";
  if (score >= 6) return "Average";
  return "Below Average";
}
