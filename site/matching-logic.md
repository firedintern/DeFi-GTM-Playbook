# GTM Archetype Finder — Question Bank & Scoring Spec

Design spec for the interactive portal. The quiz maps a founder's answers to the closest GTM archetype(s) from the [twelve case studies](../docs/15-synthesis.md#gtm-archetype-map), with transparent scoring — every match must be explainable as "you answered X, which is the pattern <protocol> used."

The tool classifies **current shape**, not best-fit strategy: every question describes what a founder already has or is doing today (their actual cold-start resource, actual user relationship, actual yield source), not what they should aspire to become. That keeps the result a diagnostic ("here's the pattern you're already in, and its trap") rather than a recommendation, which matters because the stakes of a wrong recommendation are much higher than the stakes of a wrong diagnosis.

**v2 revision.** This version responds to user feedback: the v1 spec classified "what you are" (category) better than "how your distribution actually works" (mechanics). Distribution mechanics now dominate scoring more than category labels. Changes: two new scored questions (distribution owner, post-incentive retention), Q4 rewritten from a 3-option yield check into a 6-option "who pays for the promise" question, Q1's credit/RWA bucket split in two, Q2 gained a "partner channel" option, Q5 gained a distinction between sponsored-default and deliberate-single-chain, Q6 reframed around timing honesty, 3 new anti-pattern flags, a confidence band beyond primary/secondary, a "why you didn't match" runner-up explainer, and a 90-day action block on results.

**Principles**

1. **Transparent, not clever.** No black-box score. The result page shows which answers drove the match.
2. **Distribution mechanics outweigh category labels.** Two protocols in the same category (Maple, Ondo — both credit/RWA) can be different GTM species if the user relationship, the payer of the yield, and the post-incentive retention story differ. Questions about *how growth actually works* score at least as heavily as questions about *what you're building*.
3. **Rare signals score high.** An answer only one archetype can claim (parent treasury → Spark) is worth +6. Common signals (+1 to +3) differentiate, decisive ones dominate — a founder with a parent treasury should get Spark's playbook even if everything else they answered looks Aave-shaped.
4. **Top 2, not forced single.** Real protocols blend archetypes (Ethena = points meta + CEX rails). Show the runner-up when it's close, and say why the runner-up *didn't* win.
5. **Warnings are independent of matches.** Anti-pattern flags fire on answer combinations regardless of which archetype wins.
6. **Confidence is shown, not implied.** A single numeric winner overstates precision. Every result carries a confidence band (High / Mixed / Weak fit) computed from score concentration, not just score size.

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

Ten questions: nine scored, one routing-only. Single-select. Every option lists its score contributions.

### Q1. What are you building? (category/wedge)

Split the old "credit/RWA" bucket in two — Maple and Ondo are adjacent by category but different GTM species (underwriting-led vs. regulated-wrapper-led), and collapsing them produced false overlap.

| Option | Scores |
|---|---|
| Lending / money market | AAVE +3, MORPHO +2, SPARK +1, JUSTLEND +1 |
| Liquid staking / restaking / receipt-token wrapper | LIDO +3, ETHERFI +2, EIGEN +1 |
| Stablecoin — CDP / non-yield-bearing | SKY +3, ETHENA +1 |
| Yield-bearing stablecoin / synthetic dollar | ETHENA +3, SKY +2, SPARK +1, ETHERFI +1 |
| Savings / yield product (non-stablecoin) | SPARK +2, ETHERFI +2, ETHENA +1 |
| Private / onchain credit, underwriting-led | MAPLE +4 |
| Tokenized treasury / regulated yield access | ONDO +4 |
| DEX / trading / liquidity infrastructure | UNI +3 |
| An entirely new primitive (no existing category) | EIGEN +3, ETHENA +1 |

### Q2. What's your cold-start resource? (the biggest single differentiator)

Added a fifth option — "already have a partner channel" — since B2B2C archetypes (Aave, Ethena) are often better identified by an existing distribution deal than by inherited trust or capital.

| Option | Scores |
|---|---|
| A parent protocol/DAO treasury seeds my liquidity day one | **SPARK +6**, JUSTLEND +1 |
| A chain/foundation sponsors me as their ecosystem default | **JUSTLEND +6**, SPARK +1 |
| I build on top of incumbents and inherit their trust/liquidity | **MORPHO +6**, LIDO +1 |
| I already have (or am close to) a distribution deal with an exchange, wallet, or fintech | **AAVE +5**, ETHENA +2, MORPHO +1 |
| Strong credibility capital (top-tier VC, academic, founder brand) behind a new narrative | EIGEN +3, LIDO +1, ETHENA +1 |
| None of the above — product + incentives, bootstrapped in the open | UNI +2, ETHENA +1, ETHERFI +1 |

### Q3. Who is your primary user in year one?

Unchanged from v1 — kept distinct from the new Q9 (distribution owner). This asks *who consumes the product*; Q9 asks *who controls the acquisition channel*. They're correlated but not identical: Ethena's user is a CEX trader, but the CEX also owns the relationship. Splitting them is what lets the quiz tell Aave from Morpho.

| Option | Scores |
|---|---|
| Retail DeFi users, directly on my front end | UNI +2, ETHERFI +2, LIDO +1, ETHENA +1 |
| Developers / other protocols (B2B) | UNI +3, MORPHO +2, EIGEN +2 |
| Exchanges, wallets, fintechs who embed me (B2B2C) | AAVE +3, MORPHO +3, ETHENA +2 |
| Institutions (funds, DAOs' treasuries, TradFi) | ONDO +3, MAPLE +3, LIDO +1 |

### Q4. What actually pays for the promise you're making to users?

Rewritten from a 3-option "is there real yield" check into a 6-option question. The old version bundled Spark, Sky, Ondo, and Maple into the same "structural yield" bucket even though their underlying engines — subsidy, monetary-default status, compliance access, and credit spreads — are not the same GTM logic.

| Option | Scores |
|---|---|
| Credit spreads / treasury yield / real cash flows | MAPLE +3, MORPHO +2, ONDO +1 |
| Market-cyclical funding, staking, or basis trades | ETHENA +3, ETHERFI +2, EIGEN +1 |
| Subsidy from a parent treasury, foundation, or ecosystem sponsor | **SPARK +4**, JUSTLEND +2 |
| Utility or workflow advantage, not yield | UNI +2, EIGEN +1 |
| Habit / default-money status — monetary distribution, not yield | **SKY +4** |
| A compliance or access wrapper around assets that already yield elsewhere | **ONDO +4**, MAPLE +1 |

### Q5. Chain posture

Split "all-in on one ecosystem" into sponsored-default vs. deliberate-single-chain — these are different postures with different traps (one doesn't travel by design; the other doesn't travel because it can't).

| Option | Scores |
|---|---|
| Chain-neutral, aggressively multichain | AAVE +2, ONDO +1, ETHENA +1 |
| Ethereum-first, deep composability bet | LIDO +2, SKY +1, EIGEN +1 |
| We're the default financial layer for one specific ecosystem (chain/foundation sponsored) | **JUSTLEND +5** |
| Deliberately single-ecosystem for product or composability reasons, not sponsorship | SPARK +2, LIDO +1 |
| Planning my own chain/L2 eventually | UNI +2, ETHENA +1 |

### Q6. When does compliance actually become necessary for growth?

Reframed from a posture self-report ("compliance-first" sounds mature and gets over-claimed) into a timing question, which is harder to answer aspirationally.

| Option | Scores |
|---|---|
| Day one — it's the wedge, not a later feature | ONDO +3, MAPLE +3 |
| After PMF — permissionless core first, permissioned instances once it works | AAVE +2, LIDO +2, MAPLE +1, ETHENA +1 |
| Only for a specific institutional wrapper, not the core product | MAPLE +2, LIDO +1, ETHENA +1 |
| Probably never core to this wedge | UNI +1, AAVE +1 |

### Q7. Category status

Unchanged from v1.

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

### Q9. Who owns the relationship that actually brings users in? *(new)*

The single highest-leverage addition. This is what separates Aave (partners own the touchpoint) from Morpho (partners own it too, but Morpho's growth is in graduating *away* from that toward its own primitive), and Ondo (a thin internal salesforce, growing slowly) from Maple (delegates' own franchises do the selling).

| Option | Scores |
|---|---|
| We do — our own app or front end is the primary touchpoint | UNI +2, ETHERFI +1, ETHENA +1 |
| Partners do — exchanges, wallets, custodians, fintechs embed us | **AAVE +5**, MORPHO +2, ETHENA +2 |
| A parent ecosystem does — DAO, chain, or foundation channels users to us | **SPARK +5**, JUSTLEND +3 |
| Integrators/builders do — other protocols build on top of us | **MORPHO +5**, EIGEN +2, UNI +1 |
| Institutional sales/distribution partners do — brokers, allocators, custodians | **ONDO +4**, MAPLE +3 |

### Q10. If incentives disappeared tomorrow, what would still pull users in? *(new)*

The second highest-leverage addition. This directly encodes the [incentive-quality test](../docs/15-synthesis.md#incentive-architecture-quality-mercenary-tvl-vs-durable-loops) — durable loop vs. mercenary capital — as a scored question instead of leaving it buried in a warning.

| Option | Scores |
|---|---|
| Deep liquidity, integrations, and composability | **LIDO +5**, MORPHO +1 |
| Better rates or balance-sheet efficiency that we can actually honor | AAVE +2, MORPHO +2, SPARK +1 |
| Captive distribution from a sponsor or parent ecosystem | **SPARK +4**, JUSTLEND +3 |
| A regulatory wrapper or institutional access path competitors don't have | **ONDO +4**, MAPLE +2 |
| New-category mindshare — we own the vocabulary | **EIGEN +5** |
| A developer ecosystem building products we don't have to build ourselves | **UNI +5** |
| Honestly, not much yet — we're still mid-narrative | ETHENA +2, ETHERFI +3 |

---

## Result logic

1. Sum scores across Q1–Q7 and Q9–Q10 (nine scored questions total; Q8 is routing-only). Typical winning scores land between 16 and 24 (validated against the four worked personas below); max plausible ≈ 30.
2. **Primary match** = highest score. **Secondary match** shown if its score ≥ 60% of the primary's.
3. **Tie-break**: highest single contribution wins (a +6 decisive signal beats an archetype that accumulated the same total from +1s and +2s). Rationale: cold-start resource and distribution ownership determine your GTM *sequence* more than accumulated category resemblance does.
4. **Low-confidence fallback**: if the top score < 8, don't fake precision — show "no single archetype fits cleanly" and route to the [synthesis](../docs/15-synthesis.md) + [builder's guide](../docs/17-builders-guide.md) instead.
5. **Confidence band** (shown alongside the primary match, computed from concentration, not just size):
   - **High confidence**: primary score ≥ 16 AND primary ≥ 1.8× the third-place score (the field isn't just two-way close, it's decisively led).
   - **Mixed archetype**: primary/secondary within the 60% band from rule 2 — you are a genuine blend, not an ambiguous read.
   - **Weak fit**: primary score is 8–15 with no runner-up close enough to call "mixed" — a real but thin signal. Say so plainly rather than dressing it up.
6. **"Why you didn't match" for the top non-matching archetype**: identify the archetype with the third-highest score (or the highest-scoring archetype in a *different* category than the primary/secondary, whichever is more instructive) and name the single answer that would have flipped it, e.g. "You look somewhat Ethena-like on points and cyclical yield, but you didn't match because you lack CEX-led distribution (Q9) and structural-twist category status (Q7)."
7. Result page shows, per matched archetype:
   - Archetype name + exemplar protocol + one-line thesis (from the case study's title)
   - Confidence band
   - **"Why you matched"**: the 2–3 highest-scoring answers, phrased as "You said X — that's the move <protocol> made when…"
   - **"Why you didn't match [runner-up]"**: one sentence, per rule 6
   - Links to the primary case study + the 1–2 adjacent ones (from the archetype's row in the [builder's guide table](../docs/17-builders-guide.md))
   - The stage-appropriate playbook steps (from Q8)
   - **The trap**: each archetype's primary failure mode (see below)
   - **Next 90 days**: one thing to prove, one thing to delay, one metric to watch, one mistake to avoid (see below)

### Per-archetype traps (always shown with a match)

| Archetype | Trap shown |
|---|---|
| AAVE | Embedded distribution means your brand disappears — make sure economics (revenue share) don't disappear with it |
| LIDO | Subsidizing liquidity works only if integrations make it permanent before subsidies taper |
| MORPHO | Building on incumbents caps you until you graduate to your own primitive — plan the Blue moment |
| SKY | Default-asset status is the moat; anything that breaks user habit (rebrand, migration) risks destroying rather than transferring it |
| SPARK | Parent-seeded TVL is mercenary at the margin, and verify retail-adoption claims yourself — Spark's own "200K users" figure didn't survive onchain scrutiny (~2,800 real wallets found). The moat must migrate from rates to product before subsidies taper |
| EIGEN | Narrative TVL is fast in, fast out — plan the platform pivot **before** incentives decay |
| ETHENA | Cyclical yield needs a structural hedge (TradFi wrappers) built while the cycle is still favorable |
| MAPLE | In credit, underwriting failure is GTM failure — risk management *is* the growth strategy. Separately: Maple's headline $4.1-4.6B is self-reported AUM including off-chain loan-book value, not netted TVL (~$2.3B on DeFiLlama) — don't let a comparable's AUM-style reporting inflate your own targets |
| JUSTLEND | Sponsorship doesn't travel — credibility built inside one ecosystem doesn't transfer out |
| ONDO | Compliance-first GTM eventually scales with sales headcount, not points — budget for enterprise sales |
| ETHERFI | You're renting the category's growth, not owning it — convert mercenary users into a daily-use relationship before yields compress |
| UNI | Free growth builds the moat but monetizing too early invites forks — activate fees only once default status is unassailable |

### Next 90 days (per archetype)

Four short, concrete lines per archetype: one thing to prove, one to delay, a metric to watch, and a mistake to avoid. These make the result feel like a builder utility rather than a diagnosis and stop at the result page.

| Archetype | Prove | Delay | Watch | Avoid |
|---|---|---|---|---|
| AAVE | One flagship partner integration live with real volume | Building your own consumer front end as the primary channel | Share of deposits arriving via partner surfaces vs. your own app | Discounting the partner relationship as "just distribution" — it's the product |
| LIDO | Deep, credibly redeemable exit liquidity for your receipt token | Chasing new integrations before the first one is truly liquid | % of your receipt token accepted as collateral elsewhere | Subsidizing yield instead of subsidizing liquidity |
| MORPHO | One embed where a recognizable brand outsources risk to your primitive | Owning the front end — let the embed be invisible | Deposits routed through partner-curated vaults vs. direct | Competing with the incumbents you should be building on top of |
| SKY | Real reuse of your stable unit as collateral elsewhere, not just supply growth | Any rebrand or migration before habit is fully established | Combined old+new asset supply, not just the new asset in isolation | Treating a token migration as a growth event instead of a retention risk |
| SPARK | A rate you can honor without the parent subsidy for a full cycle | Marketing retail-user counts before you've verified them onchain | Ratio of parent-seeded vs. externally-acquired liquidity | Repeating unverified adoption claims because they're flattering |
| EIGEN | A second product surface that doesn't depend on your original narrative | Scaling points programs once the narrative shows signs of plateauing | TVL as % of category peak, tracked monthly | Waiting for churn to show up in the data before planning the pivot |
| ETHENA | One TradFi or fixed-income wrapper live, however small | Treating current APY as durable | Spread between your funding-rate yield and a risk-free benchmark | Presenting cyclical yield as if it were structural |
| MAPLE | A second delegate/curator with an independent borrower network | Publishing AUM without separating on-chain TVL from off-chain book value | Netted onchain TVL, reported separately from AUM | Letting one underwriter's book concentrate your entire credit risk |
| JUSTLEND | Any real usage outside your home ecosystem, however small | Assuming ecosystem-default status transfers to a second chain | Revenue/usage tied to the ecosystem's core activity vs. general DeFi usage | Mistaking sponsorship for product-market fit |
| ONDO | A second sales/distribution channel beyond your first institutional partner | Assuming compliance alone will generate inbound demand | Enterprise pipeline and sales cycle length, not just AUM | Calling a licensed wrapper "GTM" without a salesforce behind it |
| ETHERFI | Daily-active usage on your non-yield product surface (card, app) | Scaling a second points season before the first cohort's retention is known | Daily actives on the retention product vs. total TVL | Confusing farmed TVL with a loyal user base |
| UNI | A second team building on your primitive without your help | Turning on fees or extraction before default status is unquestioned | External developers/integrations building on you, not just volume | Monetizing before the free-growth flywheel has fully compounded |

---

## Anti-pattern flags (fire independently of the match)

| Flag | Trigger | Warning shown (source: [failure modes](../docs/15-synthesis.md#common-gtm-failure-modes-anti-playbook)) |
|---|---|---|
| Mercenary TVL | Q10 = "not much yet, mid-narrative" AND stage plans include incentives (Q8 ≤ pre-liquidity) | "Incentives without a real economic engine rent TVL, they don't buy it — Spark's campaign swings (onchain analysis found only ~2,800 real retail wallets behind a widely reported '200K users' claim), EigenLayer's −75% drawdown." |
| Sponsorship ceiling | Q5 = "default financial layer for one ecosystem" | "Ecosystem-default status works but doesn't travel — see JustLend's limits." |
| Pivot timing | Q7 = "creating the category" | "Category creators must plan the platform pivot before incentive decay — EigenCloud and ether.fi both pivoted from strength; waiting for churn is too late." |
| Underwriting risk | Q1 = "private/onchain credit" | "Credit protocols sell underwriting. One default can kill the growth loop, not just the balance sheet — Maple 2022." |
| Compliance inevitability | Q6 = "probably never core" | "Every mature archetype in this set eventually added a compliant access path (Aave Horizon, Lido stVaults, Ethena iUSDe). Institutionalization is a distribution upgrade, not a separate category — plan the wrapper into your roadmap even if you launch permissionless." |
| Metric laundering *(new)* | Q2 = "parent treasury" OR Q4 = "subsidy from sponsor" OR Q1 = "private/onchain credit" | "Don't mix TVL, deposits, borrowed balances, AUM, and off-chain balances into one growth story. Maple's self-reported AUM ($4.1–4.6B) and DeFiLlama's netted TVL (~$2.3B) tell different stories from the same protocol — pick one metric basis and disclose it, because a shifting metric basis makes your GTM narrative untrustworthy the moment someone checks." |
| Channel concentration risk *(new)* | Q9 = "partner channel," "parent ecosystem," or "institutional sales" (any single-channel answer) AND Q5 ≠ "chain-neutral, multichain" | "If one exchange, one chain, one foundation, or one treasury explains most of your acquisition, you have dependency risk, not GTM durability — see JustLend's single-ecosystem ceiling and Spark's parent-subsidy dependence. A second independent channel is the test of whether this is a strategy or a subsidy." |
| Compliance theater *(new)* | Q6 = "day one" AND Q9 ≠ "institutional sales/distribution partners" | "A compliance-first story without actual wrappers, licenses, counterparties, or sales capacity behind it is branding, not GTM. Ondo and Maple's compliance-first posture is backed by real institutional sales relationships (Section 12.3, 10.5) — if you don't have the sales motion yet, the compliance claim is aspirational, not a moat." |

---

## Worked examples (hand-validated)

Re-validated against the v2 scoring model (10 questions; Q1/Q2/Q4/Q5/Q6 changed, Q9/Q10 added).

Scores below are machine-computed against the exact tables above (not hand-estimated), using this answer set per persona: Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q9, Q10 (Q8 is routing-only and doesn't affect scoring).

**Persona 1 — "synthetic dollar founder": yield-bearing stablecoin, bootstrapped, B2B2C via exchanges, cyclical yield, multichain, permissionless (after PMF), category-with-twist, live with early traction, distribution via partners, no durable pull without incentives yet**
Ethena 17 · Aave 12 · ether.fi 7 · Morpho 7 → **Primary ETHENA, High confidence** (17 ≥ 16 and ≥ 1.8× third place, since Aave — the second-place score — doesn't count against the *third*-place bar). **Secondary AAVE** (12 ≥ 0.6 × 17). This secondary is not an error: Ethena's CEX-embedded distribution genuinely shares DNA with Aave's embedded-B2B2C pattern (both grow through partner-owned touchpoints), and Aave accumulates from four separate questions (Q3, Q5, Q6, Q9) rather than one decisive signal — exactly the "many weak signals vs. one strong one" case the tie-break rule exists for, and here it correctly leaves Ethena on top on raw score while being transparent that a real blend exists. Compliance-inevitability does not fire (Q6 = "after PMF", not "never"). Mercenary-TVL flag also does not fire here: it's gated to pre-liquidity stages (Q8 = idea or pre-liquidity), and this persona is already live — the flag is about warning founders *before* they lean on unproven incentives, not about relitigating an established protocol's yield cyclicality (that's what the ETHENA trap text is for). "Why you didn't match ether.fi/Morpho" (both tied at 7): you lack ether.fi's narrative-surfing origin story and Morpho's incumbent-inheritance cold start.

**Persona 2 — "RWA treasuries": tokenized treasury, VC credibility, institutions, compliance wrapper as payer, multichain, compliance day-one, crowded category, institutional sales own the relationship, regulatory wrapper is the durable pull**
Ondo 23 · Maple 12 · EigenCloud 3 · Aave 3 → **Primary ONDO, High confidence** (23 ≥ 16 and ≥ 1.8× third place). No secondary (12 is 52% of 23, below the 60% bar) — a real change from v1, where Q1's shared "credit/RWA" bucket and Q4's shared "structural yield" bucket pulled Ondo and Maple closer together (12 vs. 24 in that version, i.e. Maple *was* 50%; here splitting those questions widens the gap on the *raw* score too, from 24→23 on Ondo but 10→12 on Maple, netting a lower ratio). Compliance-theater flag does not fire (Q9 = institutional sales partners, satisfying the "actual sales capacity" condition).

**Persona 3 — "DAO-incubated lender": lending, parent treasury, retail, credit-spread yield, deliberately single-ecosystem, after-PMF compliance, category-with-twist, parent ecosystem owns distribution, captive distribution is the durable pull**
Spark 18 · JustLend 8 · Morpho 6 · Aave 5 → **Primary SPARK, High confidence** (18 ≥ 16 and ≥ 1.8× third place). No secondary (8 is 44% of 18). Metric-laundering flag fires (Q2 = parent treasury). Channel-concentration flag fires (Q9 = parent ecosystem, Q5 = deliberately single-ecosystem ≠ multichain). Both are appropriate — this is the SparkLend story, including its real dependency risks. Note Aave no longer places second here (Morpho and JustLend both edge ahead of it) — the new Q9 "parent ecosystem owns distribution" answer (+5 Spark, +3 JustLend) pulls JustLend up rather than leaving Aave as the natural runner-up, which is a more honest reflection of Spark's actual DNA (a Sky "Star," not fundamentally an Aave-alike, even though SparkLend is an Aave fork under the hood).

**Persona 4 — "lending optimizer on incumbents": lending, inherits incumbent trust, B2B, credit-spread yield, Ethereum-first, after-PMF compliance, structural-twist category, integrators own distribution, liquidity/integrations are the durable pull**
Morpho 20 · Lido 11 · Aave 5 · EigenCloud 5 → **Primary MORPHO, High confidence** (20 ≥ 16 and ≥ 1.8× third place). No secondary (11 is 55% of 20, just under the bar). This is a much cleaner separation from Aave than v1 produced (14 vs. 6, a 43% ratio there too, but Aave was the *only* real contender; here Lido edges into second by way of the "durable pull = liquidity/integrations" answer, which is honestly closer to Morpho's own graduation story than Aave's embedded-distribution story is). The lesson holds even better than intended: Q9's "integrators own distribution" is a Morpho-exclusive +5 signal that Aave structurally cannot also claim, which is what the rewrite was for.

---

## Implementation notes

- Pure client-side: questions + scoring matrix live in one JSON file, so editing weights never touches code.
- Stack: single-page vanilla JS, no backend, deployed via GitHub Pages from this repo.
- Every result links back to the markdown case studies — the portal is a front door to the playbook, not a replacement for it.
- The scoring matrix in this file is the source of truth; `site/data.js` mirrors it.
- Answers still encode into the URL hash for sharing; the hash format grows from 8 digits to 10.
