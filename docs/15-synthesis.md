# Cross-Protocol Synthesis: The DeFi GTM Playbook Patterns

## The evolution of the incentive stack

Three eras are visible across these twelve stories.

- **Era 1, liquidity mining (2020–21)**: Compound-style emissions, adopted by Aave and countered by Uniswap's retroactive airdrop. Effective but mercenary.
- **Era 2, points and seasons (2023–25)**: Ethena, EigenLayer, ether.fi, Spark, and Maple's Syrup ran pre-token point campaigns: deferred, off-balance-sheet, expectation-priced incentives tuned toward high-value behaviors before committing token supply.
- **Era 3, revenue-backed and embedded growth (2025 onward)**: Sky's RWA-funded savings rates, Aave's sGHO, Maple's revenue-funded buybacks and Drips retirement, and B2B2C integrations. Incentives funded by real cash flow, distribution through platforms rather than campaigns.

## Incentive architecture quality: mercenary TVL vs. durable loops

The dividing line across every case: **incentives create value only when they unlock a loop that persists after reward intensity falls.** The test is retention through utility, not acquisition through novelty.

High-quality examples: [Lido](protocols/lido.md)'s Curve subsidies (bought credible liquidity, which integrations then made permanent); [Uniswap](protocols/uniswap.md)'s airdrop (rewarded past behavior, so it selected real users); [Morpho](protocols/morpho.md)'s Merkl campaigns (seed one market, then let curator economics sustain it); [Ethena](protocols/ethena.md)'s points (rewarded the composability loops that outlived the campaign); [Maple](protocols/maple-finance.md)'s move to allocate ~25% of protocol revenue to SYRUP buybacks and retire Drips (incentives shift from renting TVL to compounding it).

Low-quality, from the same set: [Spark](protocols/spark.md)'s TVL swings with campaign cycles; [EigenLayer](protocols/eigencloud.md)'s TVL fell roughly 75% from peak once points-era expectations cleared; [Sky](protocols/sky-maker.md)'s migration bonuses moved tokens faster than preference. Same instrument, opposite outcomes. The difference is whether the subsidy targets a structural doubt or just simulates product-market fit.

## GTM archetype map

| Protocol | Primary wedge | GTM archetype | Main channels | Incentive style |
|---|---|---|---|---|
| [Aave](protocols/aave.md) | Pooled money markets | Embedded B2B2C | Wallets, fintechs, white-labels, institutions | Late LM; targeted Merit rewards |
| [Lido](protocols/lido.md) | Liquid staking wrapper | Liquidity-first | DeFi integrations; custody workflows | Bridge subsidies (Curve LDO) |
| [Morpho](protocols/morpho.md) | Rate optimization → primitive | Embedded B2B (infra) | Exchanges, custodians, curators | Surgical Merkl campaigns |
| [Sky](protocols/sky-maker.md) | Decentralized stablecoin | Monetary distribution | Collateral status; Stars; savings rates | Revenue-funded yield (DSR) |
| [Spark](protocols/spark.md) | Subsidized rates + savings | Capital seeding | Parent ecosystem; multichain savings | Seeded liquidity; points seasons |
| [EigenCloud](protocols/eigencloud.md) | Restaking (new category) | Category creation | LRT issuers; AVS ecosystem | Points-before-token; caps |
| [Ethena](protocols/ethena.md) | Yield-bearing dollar | Points meta + CEX rails | CEX collateral/pairs; loop venues | Seasonal points on loops |
| [Maple](protocols/maple-finance.md) | Onchain institutional credit | Institution-first + retail wrapper | Delegates' networks; Syrup integrations | Points retired; revenue buybacks |
| [JustLend](protocols/justlend.md) | Tron default money market | Ecosystem-sponsored default | Tron wallets; founder promotion | Ecosystem subsidy |
| [Ondo](protocols/ondo-finance.md) | Tokenized treasuries | Compliance-first institutional | Custodians, exchanges, 14 chains | Minimal; product yield |
| [ether.fi](protocols/etherfi.md) | LRT with key control | Narrative surfing + points | Points economy → consumer fintech | Stacked/seasonal points |
| [Uniswap](protocols/uniswap.md) | Permissionless AMM | Developer platform | Aggregators, API, hooks, own chain/L2 | One retroactive airdrop; grants |

## Recurring strategic patterns

- **Subsidize doubt, not desire** (Lido). The highest-ROI incentive spend targets the specific fear blocking adoption: exit liquidity, safety, compliance.
- **Composability is distribution.** stETH into Aave/Maker, USDe into Pendle loops, syrupUSDC into money markets, Morpho under Coinbase. The BD org in a DeFi protocol is effectively the growth org.
- **Embedded distribution is the dominant endgame.** The mature winners grow through other people's interfaces: Lido through custodians, Aave through wallets and white-labels, Morpho through exchanges, Ethena through CEXs, Uniswap through routers and developers. The GTM question is no longer "how do we get users to our app?" but "whose interface, custody stack, or workflow can carry our economic engine?"
- **Default-asset network effects are the deepest moat, and the most fragile to self-inflicted damage** (DAI's resilience vs. USDS's struggle; stETH's and UNI's endurance).
- **Category creation compresses CAC to zero** (EigenLayer, Ethena), but narrative TVL churns when yields normalize. Corollary: yield engines built on cyclical sources (funding-rate basis for Ethena, points expectations for EigenLayer) need structural hedges. Ethena's TradFi wrappers (iUSDe, USDtb, Converge) are best read as GTM risk hedges, not just expansion.
- **Capital as GTM** (Spark, Keel; JustLend by sponsorship): seeded liquidity and honored rates beat advertised APYs. Sustainable only when backed by parent revenue. Ecosystem sponsorship (JustLend) is the same pattern with a chain, not a protocol, as the parent.
- **Institutionalization is a distribution upgrade, not a separate category.** In most cases the product barely changes; the access path does. Custody workflows (Lido–Anchorage), permissioned wrappers (Aave Horizon, Ethena iUSDe), compliance-native design (Ondo, Maple). Custody, governance controls, and reporting standards are the new distribution rails.
- **Trust is a growth asset, and decentralization is part of it.** Surviving cycles without a major exploit compounds into distribution power (Aave, Uniswap, Maker). Underwriting failure is the converse proof (Maple 2022). Proactive decentralization (Lido DVT/CSM, dual governance) defuses the concentration critiques that cap institutional adoption.
- **Escape velocity requires a second act.** Uniswap to Unichain/hooks, ether.fi to neobanking, EigenLayer to cloud, Aave to consumer app plus stablecoin, Maple to retail Syrup. Category leadership decays; winners re-platform from strength.

## Common GTM failure modes (anti-playbook)

- **Incentives not anchored in real yield or a structural doubt.** If the subsidy doesn't kill a specific adoption fear or sit on top of a real economic engine, TVL leaves when the rewards do (Spark's campaign-cycle swings; EigenLayer's ~75% drawdown from peak).
- **Rebranding a network-effect asset without preserving habit.** Sky's USDS migration moved tokens faster than preference: supply was flat and DAI briefly resurged through mid-2025 before USDS growth took hold. Adoption lives in collateral conventions and user mental models, and those migrate slowly and expensively, not by contract.
- **Complexity as a cognitive tax on users and partners.** Endgame's structure is widely cited as a drag on Sky's adoption. Every layer a user or integration partner must understand narrows the funnel.
- **Underwriting or risk failure in credit protocols.** Maple's Orthogonal default shows that when trust in underwriting breaks, the growth loop dies with it, not just the balance sheet. In credit, risk management is the GTM.

## Archetypes not fully covered here

This report is TVL-anchored, so several GTM archetypes fall outside the case-study set but deserve naming, with their most distinctive mechanics.

- **Perp DEX GTM** (GMX, dYdX, Hyperliquid): trader- and market-maker flywheels, fee rebates and points, and chain co-design (dYdX's appchain; Hyperliquid's purpose-built L1). Hyperliquid adds two mechanics no protocol in this set uses: HIP-3 permissionless markets (stake HYPE to launch and control your own perp market, keeping up to 50% of its fees; a builder-acquisition channel) and a buyback engine reportedly directing the large majority of trading-fee revenue, plus a negotiated share of Circle's USDC reserve yield, into HYPE buybacks. That is materially more aggressive token-value accrual than GMX or dYdX fee-share programs.
- **Solana chain-native GTM** (Jupiter, Kamino): more specific than "UX plus incentives." Jupiter's playbook includes a governance-gated launchpad (stake JUP for access to token launches), a recurring annual airdrop cadence ("Jupuary") instead of one-off events, and roll-up acquisitions (e.g. Rain.fi) as a distribution tactic. Recurring, predictable rewards change farmer behavior versus single retroactive drops. This report touches Solana via Keel's Tokenization Regatta and Ethena's integrations, but the chain-native pattern deserves its own study.
- **Router/aggregator GTM** (1inch, LiFi, bridge aggregators): selling best execution and integrating everywhere. Little TVL by design; the GTM variable is routing share and partnership depth.
- **TradFi-brand-led tokenization** (Securitize): excluded from the case-study set (see [Appendix A](appendix-a-methodology.md)), but worth contrast with [Ondo](protocols/ondo-finance.md). Securitize is the #1 RWA sub-protocol by TVL (~$3.7B, ahead of any single Ondo product line), and its GTM mechanic is the inverse of Ondo's: BlackRock's existing brand and distribution do the customer acquisition, with Securitize as the rails. Ondo builds crypto-native distribution toward institutions; Securitize rides institutional distribution into crypto.
- **AI-agent distribution** (2026, emerging): PancakeSwap's Agent Studio, Bancor/Carbon's MCP server, and Injective's iAgent SDK target agent-to-agent rather than human-facing distribution: making a protocol easy for autonomous agents to discover and transact with. Too early to score, but it is a genuinely new channel that none of the twelve human-GTM case studies capture.
- **veTokenomics status check**: not covered in the case studies, but note the 2026 development: Balancer's veBAL effectively ended after the November 2025 exploit-driven shutdown, and Pendle replaced vePENDLE with a lock-free sPENDLE model in January 2026. The rigid multi-year-lock design is being displaced industry-wide; treat ve-style locks as a declining GTM pattern, not a current default.

## What separates winners from the rest

Four factors recur.

1. **A real yield or efficiency source under the incentives**: Ethena's basis trade, Sky's T-bills, Maple's credit spreads, Morpho's rate optimization. Growth survives the end of emissions.
2. **Incentives designed as an economy** (points others build on) rather than a rebate.
3. **Distribution partners with aligned economics**: curators, CEXs, fintechs, LRTs, pool delegates, who spend their own resources growing you.
4. **Ruthless pivots executed from strength**: ETHLend to Aave, optimizer to Morpho Blue, LRT to neobank, undercollateralized to Maple 2.0.
