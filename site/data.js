// GTM Archetype Finder — quiz data.
// Generated from matching-logic.md, which is the source of truth.
// Edit weights there first, then mirror them here.

const REPO = "https://github.com/firedintern/DeFi-GTM-Playbook";
const CS = REPO + "/blob/main/docs/protocols/";

const ARCHETYPES = {
  AAVE: {
    name: "Embedded B2B2C",
    exemplar: "Aave",
    thesis: "From failed P2P startup to embedded yield infrastructure.",
    trap: "Embedded distribution means your brand disappears — make sure economics (revenue share) don't disappear with it.",
    file: CS + "aave.md",
    related: ["MORPHO", "ETHENA"],
  },
  LIDO: {
    name: "Liquidity-first",
    exemplar: "Lido",
    thesis: "Winning by making liquidity the product.",
    trap: "Subsidizing liquidity works only if integrations make it permanent before subsidies taper.",
    file: CS + "lido.md",
    related: ["SPARK", "MORPHO"],
  },
  MORPHO: {
    name: "Embedded B2B infrastructure",
    exemplar: "Morpho",
    thesis: "The pure B2B play: sell through everyone else's app.",
    trap: "Building on incumbents caps you until you graduate to your own primitive — plan the Blue moment.",
    file: CS + "morpho.md",
    related: ["AAVE", "ETHENA"],
  },
  SKY: {
    name: "Monetary distribution",
    exemplar: "Sky (MakerDAO)",
    thesis: "The power and peril of being the default.",
    trap: "Default-asset status is the moat; anything that breaks user habit (rebrand, migration) risks destroying rather than transferring it.",
    file: CS + "sky-maker.md",
    related: ["ETHENA", "AAVE"],
  },
  SPARK: {
    name: "Capital seeding",
    exemplar: "Spark",
    thesis: "Capital as go-to-market.",
    trap: "Parent-seeded TVL is mercenary at the margin — the moat must migrate from rates to product before subsidies taper.",
    file: CS + "spark.md",
    related: ["LIDO", "MORPHO"],
  },
  EIGEN: {
    name: "Category creation",
    exemplar: "EigenCloud (EigenLayer)",
    thesis: "Category creation as GTM.",
    trap: "Narrative TVL is fast in, fast out — plan the platform pivot before incentives decay.",
    file: CS + "eigencloud.md",
    related: ["ETHENA", "ETHERFI"],
  },
  ETHENA: {
    name: "Points meta + CEX rails",
    exemplar: "Ethena",
    thesis: "The points meta, perfected.",
    trap: "Cyclical yield needs a structural hedge (TradFi wrappers) built while the cycle is still favorable.",
    file: CS + "ethena.md",
    related: ["ETHERFI", "SPARK"],
  },
  MAPLE: {
    name: "Institution-first + retail wrapper",
    exemplar: "Maple Finance",
    thesis: "Institutional credit, then a retail wrapper.",
    trap: "In credit, underwriting failure is GTM failure — risk management is the growth strategy.",
    file: CS + "maple-finance.md",
    related: ["ONDO", "LIDO"],
  },
  JUSTLEND: {
    name: "Ecosystem-sponsored default",
    exemplar: "JustLend",
    thesis: "Ecosystem-default status on Tron.",
    trap: "Sponsorship doesn't travel — credibility built inside one ecosystem doesn't transfer out.",
    file: CS + "justlend.md",
    related: ["SPARK"],
  },
  ONDO: {
    name: "Compliance-first institutional",
    exemplar: "Ondo Finance",
    thesis: "Compliance-first, institution-led.",
    trap: "Compliance-first GTM eventually scales with sales headcount, not points — budget for enterprise sales.",
    file: CS + "ondo-finance.md",
    related: ["MAPLE", "LIDO"],
  },
  ETHERFI: {
    name: "Narrative surfing + points",
    exemplar: "ether.fi",
    thesis: "Narrative surfing, then escaping the commodity trap.",
    trap: "You're renting the category's growth, not owning it — convert mercenary users into a daily-use relationship before yields compress.",
    file: CS + "etherfi.md",
    related: ["EIGEN", "UNI"],
  },
  UNI: {
    name: "Developer platform",
    exemplar: "Uniswap",
    thesis: "Default status through simplicity, defended by airdrop.",
    trap: "Free growth builds the moat but monetizing too early invites forks — activate fees only once default status is unassailable.",
    file: CS + "uniswap.md",
    related: ["ETHENA", "SPARK"],
  },
};

const QUESTIONS = [
  {
    short: "Category",
    title: "What are you building?",
    subtitle: "Your category — the wedge you attack first.",
    options: [
      { label: "Lending / money market", scores: { AAVE: 3, MORPHO: 2, SPARK: 1, JUSTLEND: 1 } },
      { label: "Liquid staking / restaking / receipt-token wrapper", scores: { LIDO: 3, ETHERFI: 2, EIGEN: 1 } },
      { label: "Stablecoin — CDP / non-yield-bearing", scores: { SKY: 3, ETHENA: 1 } },
      { label: "Yield-bearing stablecoin / synthetic dollar", scores: { ETHENA: 3, SKY: 2, SPARK: 1, ETHERFI: 1 } },
      { label: "Savings / yield product (non-stablecoin)", scores: { SPARK: 2, ETHERFI: 2, ETHENA: 1 } },
      { label: "Onchain credit / RWA / tokenized treasuries", scores: { MAPLE: 3, ONDO: 3 } },
      { label: "DEX / trading / liquidity infrastructure", scores: { UNI: 3 } },
      { label: "An entirely new primitive — no existing category", scores: { EIGEN: 3, ETHENA: 1 } },
    ],
  },
  {
    short: "Cold start",
    title: "What's your cold-start resource?",
    subtitle: "The single biggest differentiator — how do you solve day-one liquidity and trust?",
    options: [
      { label: "A parent protocol/DAO treasury seeds my liquidity day one", scores: { SPARK: 6, JUSTLEND: 1 } },
      { label: "A chain/foundation sponsors me as their ecosystem default", scores: { JUSTLEND: 6, SPARK: 1 } },
      { label: "I build on top of incumbents and inherit their trust/liquidity", scores: { MORPHO: 6, LIDO: 1 } },
      { label: "Strong credibility capital (top-tier VC, academic, founder brand) behind a new narrative", scores: { EIGEN: 3, LIDO: 1, ETHENA: 1 } },
      { label: "None of the above — product + incentives, bootstrapped in the open", scores: { UNI: 2, ETHENA: 1, ETHERFI: 1 } },
    ],
  },
  {
    short: "Primary user",
    title: "Who is your primary user in year one?",
    subtitle: "Not who you hope to serve eventually — who actually shows up first.",
    options: [
      { label: "Retail DeFi users, directly on my front end", scores: { UNI: 2, ETHERFI: 2, LIDO: 1, ETHENA: 1 } },
      { label: "Developers / other protocols (B2B)", scores: { UNI: 3, MORPHO: 2, EIGEN: 2 } },
      { label: "Exchanges, wallets, fintechs who embed me (B2B2C)", scores: { AAVE: 3, MORPHO: 3, ETHENA: 2 } },
      { label: "Institutions (funds, DAO treasuries, TradFi)", scores: { ONDO: 3, MAPLE: 3, LIDO: 1 } },
    ],
  },
  {
    short: "Yield source",
    title: "Is there a real yield or efficiency source under your product?",
    subtitle: "The single strongest predictor of whether growth survives the end of incentives.",
    options: [
      { label: "Yes — structural (credit spreads, T-bills, rate efficiency)", scores: { SKY: 2, MAPLE: 2, ONDO: 2, MORPHO: 2 } },
      { label: "Yes — but market-cyclical (funding rates, staking demand, narrative yields)", scores: { ETHENA: 3, ETHERFI: 2, EIGEN: 1 } },
      { label: "No native yield — the product's value is utility, not yield", scores: { UNI: 2, EIGEN: 1 } },
    ],
  },
  {
    short: "Chain posture",
    title: "What's your chain posture?",
    subtitle: null,
    options: [
      { label: "Chain-neutral, aggressively multichain", scores: { AAVE: 2, ONDO: 1, ETHENA: 1 } },
      { label: "Ethereum-first, deep composability bet", scores: { LIDO: 2, SKY: 1, EIGEN: 1 } },
      { label: "All-in on one non-mainnet ecosystem", scores: { JUSTLEND: 3, SPARK: 1 } },
      { label: "Planning my own chain/L2 eventually", scores: { UNI: 2, ETHENA: 1 } },
    ],
  },
  {
    short: "Regulatory posture",
    title: "What's your regulatory posture?",
    subtitle: "A durability signal, not a detail — the long-term winners all converge on a compliant access path.",
    options: [
      { label: "Compliance-first from day one (KYC, licensed entities, jurisdiction wrappers)", scores: { ONDO: 3, MAPLE: 3 } },
      { label: "Hybrid: permissionless core, permissioned instances in parallel", scores: { AAVE: 2, LIDO: 2, MAPLE: 1, ETHENA: 1 } },
      { label: "Permissionless-first; institutional wrappers later if it works", scores: { UNI: 1, AAVE: 1, LIDO: 1, ETHENA: 1 } },
    ],
  },
  {
    short: "Category status",
    title: "What's the state of your category?",
    subtitle: null,
    options: [
      { label: "Crowded — I win on execution and distribution", scores: { AAVE: 1, MORPHO: 2, ETHERFI: 1 } },
      { label: "Existing category with a structural twist (better rates, liquid wrapper, new collateral)", scores: { MORPHO: 2, ETHENA: 2, LIDO: 1 } },
      { label: "I'm creating the category — it doesn't exist yet", scores: { EIGEN: 3, ETHENA: 1 } },
    ],
  },
  {
    short: "Stage",
    title: "What stage are you at?",
    subtitle: "This doesn't affect your match — it picks which playbook steps you see.",
    routing: true,
    options: [
      { label: "Idea / pre-build", steps: ["wedge", "coldstart"] },
      { label: "Building, pre-liquidity", steps: ["liquidity", "points"] },
      { label: "Live, early traction", steps: ["loops", "embed"] },
      { label: "Scaling / category leader", steps: ["institutionalize", "pivot", "replatform"] },
    ],
  },
];

const PLAYBOOK_STEPS = {
  wedge: {
    title: "Wedge",
    text: "Attack one balance-sheet pain point that becomes urgent during a market, chain, or regulatory transition. (Aave, Lido, Maple, Ethena)",
  },
  coldstart: {
    title: "Cold start",
    text: "Inherit trust by building on incumbents, inherit capital from a parent balance sheet, or make early liquidity unmistakably credible. (Morpho, Spark, JustLend, Lido)",
  },
  liquidity: {
    title: "Liquidity",
    text: "Spend incentives on the doubt-killer — usually exit liquidity for your receipt token. (Lido)",
  },
  points: {
    title: "Points, then token",
    text: "Run seasonal points targeting referrals, locking, and integrations; airdrop retroactively; keep 50%+ of supply for long-duration user distribution. Judge the program on what remains when rewards fall, not on peak TVL. (Ethena, ether.fi, Spark, Uniswap)",
  },
  loops: {
    title: "Composability loops",
    text: "Get your asset into yield markets (Pendle-style) and as collateral into major money markets before scaling incentives. (Ethena, ether.fi, Maple)",
  },
  embed: {
    title: "Embed",
    text: "Pursue one flagship B2B2C integration (exchange, wallet, fintech) with revenue share. It derisks every later enterprise deal. (Morpho, Aave, Ethena)",
  },
  institutionalize: {
    title: "Institutionalize",
    text: "Remove workflow friction instead of rebuilding the product: permissioned instances, custody integrations, governance exit rights, licensed entities. Treat custody stacks and compliance wrappers as distribution rails. (Lido, Aave Horizon, Ondo, Maple)",
  },
  pivot: {
    title: "Platform pivot",
    text: "If early TVL is narrative-driven, plan the platform pivot before incentives decay — waiting until churn shows up in the data is too late. (EigenCloud, ether.fi)",
  },
  replatform: {
    title: "Re-platform from strength",
    text: "Once category-default, vertically integrate distribution (own chain, own app, own card) before the category commoditizes. (Uniswap, Aave)",
  },
};

// answers = array of chosen option indices, one per question (Q8 = index 7)
const FLAGS = [
  {
    title: "Mercenary TVL risk",
    test: (a) => a[3] === 2 && (a[7] === 0 || a[7] === 1),
    text: "Incentives without a real economic engine rent TVL, they don't buy it — see Spark's campaign-cycle swings and EigenLayer's ~75% drawdown from peak. If you run points or emissions, make sure each subsidy kills a specific adoption doubt.",
  },
  {
    title: "Sponsorship ceiling",
    test: (a) => a[4] === 2,
    text: "Ecosystem-default status works but doesn't travel — credibility built inside one chain's ecosystem transfers poorly outside it. See JustLend's limits.",
  },
  {
    title: "Plan the pivot now",
    test: (a) => a[6] === 2,
    text: "Category creators must plan the platform pivot before incentive decay — EigenCloud and ether.fi both pivoted from strength; waiting for churn is too late.",
  },
  {
    title: "Underwriting is your GTM",
    test: (a) => a[0] === 5,
    text: "Credit protocols sell underwriting. One default can kill the growth loop, not just the balance sheet — Maple's 2022 Orthogonal default nearly killed the protocol. Risk management is the growth strategy.",
  },
  {
    title: "Compliance is coming either way",
    test: (a) => a[5] === 2,
    text: "Every mature archetype in this set eventually added a compliant access path (Aave Horizon, Lido stVaults, Ethena iUSDe). Institutionalization is a distribution upgrade, not a separate category — plan the wrapper into your roadmap even if you launch permissionless.",
  },
];

const LINKS = {
  repo: REPO,
  synthesis: REPO + "/blob/main/docs/15-synthesis.md",
  playbook: REPO + "/blob/main/docs/16-playbook.md",
  buildersGuide: REPO + "/blob/main/docs/17-builders-guide.md",
};
