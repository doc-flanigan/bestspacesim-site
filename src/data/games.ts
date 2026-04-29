export type Game = {
  id: string;
  rank: number;
  title: string;
  tagline: string;
  score: number;
  pros: string[];
  cons: string[];
  bestFor: string;
  multiplayer: boolean;
  singleplayer: boolean;
  freeToTry: boolean;
  priceUSD: number | null;
  priceLabel: string;
  released: string;
  developer: string;
  features: {
    livingUniverse: 'yes' | 'partial' | 'no';
    fpsCombat: 'yes' | 'partial' | 'no';
    shipCombat: 'yes' | 'partial' | 'no';
    planetaryLanding: 'yes' | 'partial' | 'no';
    economy: 'yes' | 'partial' | 'no';
    coop: 'yes' | 'partial' | 'no';
    modSupport: 'yes' | 'partial' | 'no';
  };
};

export const GAMES: Game[] = [
  {
    id: 'star-citizen',
    rank: 1,
    title: 'Star Citizen',
    tagline:
      'A persistent, single-shard universe with seamless planetary landings, FPS combat, and a player-driven economy.',
    score: 9.4,
    pros: [
      'Genuinely seamless space-to-surface flight',
      'Largest scale of any current space sim',
      'Free Fly events let you try the full game at no cost',
      'Active development with frequent feature drops',
    ],
    cons: [
      'Still in alpha — expect bugs',
      'Steep learning curve for new pilots',
      'Best experienced on a mid-to-high-end PC',
    ],
    bestFor:
      'Players who want the deepest, most ambitious living universe — and who are happy to learn as the game grows.',
    multiplayer: true,
    singleplayer: false,
    freeToTry: true,
    priceUSD: 45,
    priceLabel: '$45 starter pack · Free during Free Fly',
    released: '2012 (alpha, ongoing)',
    developer: 'Cloud Imperium Games',
    features: {
      livingUniverse: 'yes',
      fpsCombat: 'yes',
      shipCombat: 'yes',
      planetaryLanding: 'yes',
      economy: 'yes',
      coop: 'yes',
      modSupport: 'no',
    },
  },
  {
    id: 'elite-dangerous',
    rank: 2,
    title: 'Elite Dangerous',
    tagline:
      'A 1:1 scale Milky Way you can fly across, with deep flight modeling and a slower, more methodical loop.',
    score: 8.2,
    pros: [
      'Full 1:1 Milky Way to explore',
      'Outstanding flight model',
      'Mature systems and stable client',
    ],
    cons: [
      'Loop can feel grindy',
      'On-foot content (Odyssey) feels bolted on',
      'Weaker player-to-player interaction than its scale suggests',
    ],
    bestFor:
      'Pilots who love sim-grade flight and the romance of pure exploration.',
    multiplayer: true,
    singleplayer: true,
    freeToTry: false,
    priceUSD: 25,
    priceLabel: '$25 base · sales frequent',
    released: '2014',
    developer: 'Frontier Developments',
    features: {
      livingUniverse: 'partial',
      fpsCombat: 'partial',
      shipCombat: 'yes',
      planetaryLanding: 'yes',
      economy: 'yes',
      coop: 'partial',
      modSupport: 'no',
    },
  },
  {
    id: 'no-mans-sky',
    rank: 3,
    title: "No Man's Sky",
    tagline:
      'A relaxed, procedurally-generated universe with base-building, exploration, and a generous co-op layer.',
    score: 8.0,
    pros: [
      'Wildly improved since launch',
      'Strong base-building and creative systems',
      'Friendly to new players',
    ],
    cons: [
      'Procedural variety thins out over time',
      'Combat is light by sim standards',
      'Less of a true sim, more an exploration RPG',
    ],
    bestFor:
      'Players who want a chill, beautiful sandbox to build and explore in solo or with friends.',
    multiplayer: true,
    singleplayer: true,
    freeToTry: false,
    priceUSD: 60,
    priceLabel: '$60 · regular sales',
    released: '2016',
    developer: 'Hello Games',
    features: {
      livingUniverse: 'partial',
      fpsCombat: 'partial',
      shipCombat: 'partial',
      planetaryLanding: 'yes',
      economy: 'partial',
      coop: 'yes',
      modSupport: 'partial',
    },
  },
  {
    id: 'eve-online',
    rank: 4,
    title: 'EVE Online',
    tagline:
      'The legendary single-shard MMO where corporations wage real economic and political war across thousands of systems.',
    score: 8.4,
    pros: [
      'Unmatched player politics and economy',
      'Legendary emergent stories',
      'Free-to-play onramp',
    ],
    cons: [
      'Notoriously steep learning cliff',
      'Spreadsheet-in-space reputation is earned',
      'No cockpit-perspective flight',
    ],
    bestFor:
      'Players who want a real sandbox MMO where their actions shape galactic history.',
    multiplayer: true,
    singleplayer: false,
    freeToTry: true,
    priceUSD: 0,
    priceLabel: 'Free-to-play · paid sub Omega tier',
    released: '2003',
    developer: 'CCP Games',
    features: {
      livingUniverse: 'yes',
      fpsCombat: 'no',
      shipCombat: 'yes',
      planetaryLanding: 'no',
      economy: 'yes',
      coop: 'yes',
      modSupport: 'no',
    },
  },
  {
    id: 'x4-foundations',
    rank: 5,
    title: 'X4: Foundations',
    tagline:
      'A single-player sandbox where you can pilot any ship, run an empire, and watch a fully simulated economy unfold.',
    score: 8.1,
    pros: [
      'Best simulated economy in the genre',
      'Run from one ship to a galactic empire',
      'Strong mod support',
    ],
    cons: [
      'Solo only — no multiplayer',
      'UI takes time to learn',
      'Performance dips in late-game empires',
    ],
    bestFor:
      'Solo strategists who like the idea of being one pilot or the CEO of a thousand-ship fleet.',
    multiplayer: false,
    singleplayer: true,
    freeToTry: false,
    priceUSD: 50,
    priceLabel: '$50 base · expansions sold separately',
    released: '2018',
    developer: 'Egosoft',
    features: {
      livingUniverse: 'partial',
      fpsCombat: 'no',
      shipCombat: 'yes',
      planetaryLanding: 'no',
      economy: 'yes',
      coop: 'no',
      modSupport: 'yes',
    },
  },
  {
    id: 'starfield',
    rank: 6,
    title: 'Starfield',
    tagline:
      "Bethesda's space-themed RPG — a thousand handcrafted-ish planets glued together by a classic loot-and-quest loop.",
    score: 7.0,
    pros: [
      'Polished AAA presentation',
      'Strong ship-builder',
      'Familiar Bethesda RPG comfort food',
    ],
    cons: [
      'Loading screens between everything',
      'No seamless space-to-surface flight',
      'Procedural worlds feel empty',
    ],
    bestFor:
      'Players who want a Bethesda RPG with a space coat of paint, not a true space sim.',
    multiplayer: false,
    singleplayer: true,
    freeToTry: false,
    priceUSD: 70,
    priceLabel: '$70 · on Game Pass',
    released: '2023',
    developer: 'Bethesda Game Studios',
    features: {
      livingUniverse: 'no',
      fpsCombat: 'yes',
      shipCombat: 'partial',
      planetaryLanding: 'partial',
      economy: 'partial',
      coop: 'no',
      modSupport: 'yes',
    },
  },
];
