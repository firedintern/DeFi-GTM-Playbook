# GTM Archetype Finder — Question Bank & Scoring Spec

Design spec for the interactive portal. The quiz maps a founder's answers to the closest GTM archetype(s) from the [twelve case studies](../docs/15-synthesis.md#gtm-archetype-map), with transparent scoring — every match must be explainable as "you answered X, which is the pattern <protocol> used."

**Principles**

1. **Transparent, not clever.** No black-box score. The result page shows which answers drove the match.
2. **Rare signals score high.** An answer only one archetype can claim (parent treasury → Spark) is worth +6. Common signals (+1 to +3) differentiate, decisive ones dominate — a founder with a parent treasury should get Spark's playbook even if everything else they answered looks Aave-shaped.
3. **Top 2, not forced single.** Real protocols blend archetypes (Ethena = points meta + CEX rails). Show the runner-up when it's close.
4. **Warnings are independent of matches.** Anti-pattern flags fire on answer combinations regardless of which archetype wins.

---

## The 12 archetypes

| ID | Archetype | Exemplar | Case study |
|---|---|---|---|
| `AAVE` | Embedded B2B2C | Aave | [aave.md](../docs/protocols/aave.md) |
| `LIDO` | Liquidity-first | Lido | [lido.md](../docs/protocols/lido.md) |
| `MORPHO` | Embedded B2B infrastructure | Morpho | [morpho.md](../docs/protocols/morpho.md) |
| `SKY` | Monetary distribution | Sky (MakerDAO) | [sky-maker.md](../docs/protocols/sky-maker.md) |
| `SPARK` | Capital seeding | Spark | [spark.md](../docs/protocols/spark.md) |
| `EIGEN` | Category creation | EigenCloud | [eigencloud.md](../docs/protocols/eigencloud.md) |
| `ETHENA` | Points meta + CEX rails | Ethena | [ethena.md](../docs/protocols/ethena.md) |
| `MAPLE` | Institution-first + retail wrapper | Maple Finance | [maple-finance.md](../docs/protocols/maple-finance.md) |
| `JUSTLEND` | Ecosystem-sponsored default | JustLend | [justlend.md](../docs/protocols/justlend.md) |
| `ONDO` | Compliance-first institutional | Ondo Finance | [ondo-finance.md](../docs/protocols/ondo-finance.md) |
| `ETHERFI` | Narrative surfing + points | ether.fi | [etherfi.md](../docs/protocols/etherfi.md) |
| `UNI` | Developer platform | Uniswap | [uniswap.md](../docs/protocols/uniswap.md) |

---

## Question bank

Seven scored questions plus one routing question. Single-select. Every option lists its score contributions.

### Q1. What are you building? (category/wedge)

| Option | Scores |
|---|---|
| Lending / money market | AAVE +3, MORPHO +2, SPARK +1, JUSTLEND +1 |
| Liquid staking / restaking / receipt-token wrapper | LIDO +3, ETHERFI +2, EIGEN +1 |
| Stablecoin — CDP / non-yield-bearing | SKY +3, ETHENA +1 |
| Yield-bearing stablecoin / synthetic dollar | ETHENA +3, SKY +2, SPARK +1, ETHERFI +1 |
| Savings / yield product (non-stablecoin) | SPARK +2, ETHERFI +2, ETHENA +1 |
| Onchain credit / RWA / tokenized treasuries | MAPLE +3, ONDO +3 |
| DEX / trading / liquidity infrastructure | UNI +3 |
| An entirely new primitive (no existing category) | EIGEN +3, ETHENA +1 |

### Q2. What's your cold-start resource? (the biggest single differentiator)

| Option | Scores |
|---|---|
| A parent protocol/DAO treasury seeds my liquidity day one | **SPARK +6**, JUSTLEND +1 |
| A chain/foundation sponsors me as their ecosystem default | **JUSTLEND +6**, SPARK +1 |
| I build on top of incumbents and inherit their trust/liquidity | **MORPHO +6**, LIDO +1 |
| Strong credibility capital (top-tier VC, academic, founder brand) behind a new narrative | EIGEN +3, LIDO +1, ETHENA +1 |
| None of the above — product + incentives, bootstrapped in the open | UNI +2, ETHENA +1, ETHERFI +1 |

### Q3. Who is your primary user in year one?

| Option | Scores |
|---|---|
| Retail DeFi users, directly on my front end | UNI +2, ETHERFI +2, LIDO +1, ETHENA +1 |
| Developers / other protocols (B2B) | UNI +3, MORPHO +2, EIGEN +2 |
| Exchanges, wallets, fintechs who embed me (B2B2C) | AAVE +3, MORPHO +3, ETHENA +2 |
| Institutions (funds, DAOs' treasuries, TradFi) | ONDO +3, MAPLE +3, LIDO +1 |

### Q4. Is there a real yield or efficiency source under your product?

| Option | Scores |
|---|---|
| Yes — structural (credit spreads, T-bills, rate efficiency) | SKY +2, MAPLE +2, ONDO +2, MORPHO +2 |
| Yes — but market-cyclical (funding rates, staking demand, narrative yields) | ETHENA +3, ETHERFI +2, EIGEN +1 |
| No native yield — the product's value is utility, not yield | UNI +2, EIGEN +1 |

### Q5. Chain posture

| Option | Scores |
|---|---|
| Chain-neutral, aggressively multichain | AAVE +2, ONDO +1, ETHENA +1 |
| Ethereum-first, deep composability bet | LIDO +2, SKY +1, EIGEN +1 |
| All-in on one non-mainnet ecosystem | JUSTLEND +3, SPARK +1 |
| Planning my own chain/L2 eventually | UNI +2, ETHENA +1 |

### Q6. Regulatory posture

Weighted deliberately: the long-term winners in this case-study set all converge on a compliant access path (Aave Horizon, Lido stVaults, Ethena iUSDe, Maple's institutional posture, Ondo by design). Regulatory posture is a durability signal, not a detail.

| Option | Scores |
|---|---|
| Compliance-first from day one (KYC, licensed entities, jurisdiction wrappers) | ONDO +3, MAPLE +3 |
| Hybrid: permissionless core, permissioned instances in parallel | AAVE +2, LIDO +2, MAPLE +1, ETHENA +1 |
| Permissionless-first; institutional wrappers later if it works | UNI +1, AAVE +1, LIDO +1, ETHENA +1 |

### Q7. Category status

| Option | Scores |
|---|---|
| Crowded category — I win on execution/distribution | AAVE +1, MORPHO +2, ETHERFI +1 |
| Existing category with a structural twist (better rates, liquid wrapper, new collateral) | MORPHO +2, ETHENA +2, LIDO +1 |
| I'm creating the category — it doesn't exist yet | EIGEN +3, ETHENA +1 |

### Q8. Stage (routing only — not scored)

Determines which slice of the [condensed playbook](../docs/16-playbook.md) the result page emphasizes:

| Option | Playbook steps surfaced |
|---|---|
| Idea / pre-build | Wedge, Cold start |
| Building, pre-liquidity | Liquidity, Points-then-token |
| Live, early traction | Composability loops, Embed |
| Scaling / category leader | Institutionalize, Platform pivot, Re-platform from strength |

---

## Result logic

1. Sum scores across Q1–Q7. Typical winning scores land between 7 and 14; max plausible ≈ 19.
2. **Primary match** = highest score. **Secondary match** shown if its score ≥ 60% of the primary's.
3. **Tie-break**: highest single contribution wins (a +6 decisive signal beats an archetype that accumulated the same total from +1s and +2s). Rationale: the cold-start resource determines your GTM *sequence* more than accumulated category resemblance does.
4. **Low-confidence fallback**: if the top score < 6, don't fake precision — show "no single archetype fits cleanly" and route to the [synthesis](../docs/15-synthesis.md) + [builder's guide](../docs/17-builders-guide.md) instead.
5. Result page shows, per matched archetype:
   - Archetype name + exemplar protocol + one-line thesis (from the case study's title)
   - **"Why you matched"**: the 2–3 highest-scoring answers, phrased as "You said X — that's the move <protocol> made when…"
   - Links to the primary case study + the 1–2 adjacent ones (from the archetype's row in the [builder's guide table](../docs/17-builders-guide.md))
   - The stage-appropriate playbook steps (from Q8)
   - **The trap**: each archetype's primary failure mode (see below)

### Per-archetype traps (always shown with a match)

| Archetype | Trap shown |
|---|---|
| AAVE | Embedded distribution means your brand disappears — make sure economics (revenue share) don't disappear with it |
| LIDO | Subsidizing liquidity works only if integrations make it permanent before subsidies taper |
| MORPHO | Building on incumbents caps you until you graduate to your own primitive — plan the Blue moment |
| SKY | Default-asset status is the moat; anything that breaks user habit (rebrand, migration) risks destroying rather than transferring it |
| SPARK | Parent-seeded TVL is mercenary at the margin — the moat must migrate from rates to product before subsidies taper |
| EIGEN | Narrative TVL is fast in, fast out — plan the platform pivot **before** incentives decay |
| ETHENA | Cyclical yield needs a structural hedge (TradFi wrappers) built while the cycle is still favorable |
| MAPLE | In credit, underwriting failure is GTM failure — risk management *is* the growth strategy |
| JUSTLEND | Sponsorship doesn't travel — credibility built inside one ecosystem doesn't transfer out |
| ONDO | Compliance-first GTM eventually scales with sales headcount, not points — budget for enterprise sales |
| ETHERFI | You're renting the category's growth, not owning it — convert mercenary users into a daily-use relationship before yields compress |
| UNI | Free growth builds the moat but monetizing too early invites forks — activate fees only once default status is unassailable |

---

## Anti-pattern flags (fire independently of the match)

| Flag | Trigger | Warning shown (source: [failure modes](../docs/15-synthesis.md#common-gtm-failure-modes-anti-playbook)) |
|---|---|---|
| Mercenary TVL | Q4 = "no native yield" AND stage plans include incentives (Q8 ≤ pre-liquidity) | "Incentives without a real economic engine rent TVL, they don't buy it — Spark's campaign swings, EigenLayer's −75% drawdown." |
| Sponsorship ceiling | Q5 = "all-in on one ecosystem" | "Ecosystem-default status works but doesn't travel — see JustLend's limits." |
| Pivot timing | Q7 = "creating the category" | "Category creators must plan the platform pivot before incentive decay — EigenCloud and ether.fi both pivoted from strength; waiting for churn is too late." |
| Underwriting risk | Q1 = "credit / RWA" | "Credit protocols sell underwriting. One default can kill the growth loop, not just the balance sheet — Maple 2022." |
| Compliance inevitability | Q6 = "permissionless-first" | "Every mature archetype in this set eventually added a compliant access path (Aave Horizon, Lido stVaults, Ethena iUSDe). Institutionalization is a distribution upgrade, not a separate category — plan the wrapper into your roadmap even if you launch permissionless." |

---

## Worked examples (hand-validated)

**Persona 1 — "synthetic dollar founder": yield-bearing stablecoin, bootstrapped, B2B2C via exchanges, cyclical yield, multichain, permissionless, category-with-twist**
Ethena 13 · Aave 6 · Morpho 5 → **Primary ETHENA**, no secondary (6 < 60% of 13). Compliance-inevitability flag fires. Correct: this persona is Ethena, and Ethena's own hedge (iUSDe/Converge) is exactly what the flag prescribes.

**Persona 2 — "RWA treasuries": credit/RWA, VC credibility, institutions, structural yield, multichain, compliance-first, crowded category**
Ondo 12 · Maple 11 · EigenCloud 3 → **Primary ONDO, secondary MAPLE** (11 ≥ 7.2). Correct: the two institutional archetypes, in the right order given compliance-first.

**Persona 3 — "DAO-incubated lender": lending, parent treasury, retail, structural yield, multichain, permissionless-first, category-with-twist**
Spark 7 · Aave 6 · Morpho 6 → **Primary SPARK, secondary AAVE** (Aave/Morpho tie broken by highest single contribution: +3 vs +2). Correct — the decisive +6 keeps Spark on top despite Aave accumulating points across five questions, and the runner-up is honest: SparkLend literally launched as an Aave fork.

---

## Implementation notes

- Pure client-side: questions + scoring matrix live in one JSON file, so editing weights never touches code.
- Stack: single-page vanilla JS or Preact, no backend, deployed via GitHub Pages from this repo.
- Every result links back to the markdown case studies — the portal is a front door to the playbook, not a replacement for it.
- The scoring matrix in this file is the source of truth; the JSON is generated from these tables.
