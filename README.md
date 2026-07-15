# DeFi GTM Playbook

**GTM & Growth Strategies of the Leading DeFi Protocols** — twelve protocol case studies, a cross-protocol synthesis, and a condensed playbook for builders. Fact-checked edition (v9), July 2026.

This project looks at how the most successful DeFi protocols went to market and grew, and distills a repeatable playbook from the patterns. It is open source: corrections, updates as protocols evolve, and new case studies are welcome via PR — see [CONTRIBUTING.md](CONTRIBUTING.md).

**🧭 Try the [interactive GTM Archetype Finder](https://firedintern.github.io/DeFi-GTM-Playbook/)** — answer 8 questions about your protocol and get the closest archetype from the case studies, the trap that comes with it, and your stage-appropriate playbook steps. Scoring is fully transparent: see the [matching spec](site/matching-logic.md).

## Contents

- **[Market snapshot](docs/01-market-snapshot.md)** — the twelve-protocol set, TVL, and primary GTM motion at a glance.
- **Case studies** (in `docs/protocols/`): [Aave](docs/protocols/aave.md), [Lido](docs/protocols/lido.md), [Morpho](docs/protocols/morpho.md), [Sky (MakerDAO)](docs/protocols/sky-maker.md), [Spark](docs/protocols/spark.md), [EigenCloud](docs/protocols/eigencloud.md), [Ethena](docs/protocols/ethena.md), [Maple Finance](docs/protocols/maple-finance.md), [JustLend](docs/protocols/justlend.md), [Ondo Finance](docs/protocols/ondo-finance.md), [ether.fi](docs/protocols/etherfi.md), [Uniswap](docs/protocols/uniswap.md).
- **[Cross-protocol synthesis](docs/15-synthesis.md)** — the recurring patterns, incentive-architecture quality test, GTM archetype map, and common failure modes.
- **[Condensed playbook](docs/16-playbook.md)** — the distilled sequence for a new DeFi protocol's GTM.
- **[Builder's guide](docs/17-builders-guide.md)** — maps common builder situations ("designing a points campaign," "landing a B2B2C embed") to the case studies worth reading.
- **[Appendix A: methodology](docs/appendix-a-methodology.md)** — protocol selection rationale and full source list.
- **[Appendix B: GTM grammar](docs/appendix-b-glossary.md)** — the mechanics behind the growth loops (LP tokens, looping, LSTs/LRTs, points, veTokenomics, and more), each explained by why it matters for GTM. Skim this first if you're new to DeFi.

## Methodology and how to read claims

The protocol set is fixed: Aave, Lido, Morpho, Sky (MakerDAO), Spark, EigenCloud (EigenLayer), Ethena, Maple Finance, JustLend, Ondo Finance, ether.fi, and Uniswap, anchored on the DeFiLlama TVL leaderboard and finalized editorially (see [Appendix A](docs/appendix-a-methodology.md)). Each profile covers the founding wedge, the launch GTM, the growth levers that compounded, distribution channels, and the current phase.

Three types of statement appear in this document, and they carry different confidence:

1. **Verified facts**: events corroborated by primary protocol announcements or multiple independent reports (launches, fundraises, partnerships). Stated plainly, with the source named for the important ones.
2. **Time-sensitive metrics**: TVL, supply, revenue, user counts. Accurate at the July 2026 DeFiLlama snapshot or at the cited report date, and will drift. Treat all figures as point-in-time.
3. **Analytical inference**: interpretation of why a tactic worked. These sit in "GTM lessons" subsections and in the synthesis, and should be read as argued judgment, not fact. Figures that could only be sourced to secondary summaries are marked "reported."

One note on terms. DeFi GTM rarely looks like SaaS GTM. There is usually no sales team at launch. GTM runs through token incentive design, liquidity bootstrapping, integrations (composability as distribution), narrative and category creation, and increasingly B2B2C embedding into exchanges, wallets, and fintech apps. A useful framing: **DeFi GTM is the system a protocol uses to acquire three scarce resources at the same time: users, liquidity, and credibility.**

### Limitations and scope

This report is TVL-anchored, so three categories fall outside the case-study set: perpetual DEXs (GMX, dYdX, Hyperliquid), cross-chain routers and aggregators (1inch, LiFi), and most Solana-native apps (Jupiter, Kamino). They follow related GTM patterns (trader flywheels, execution-quality selling, chain-native UX plus ecosystem incentives) and are sketched in the [synthesis](docs/15-synthesis.md#archetypes-not-fully-covered-here), but they are not covered in depth here. Metrics are point-in-time snapshots and the analysis reflects the July 2026 market; re-verify figures before external use.

## License

Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) unless noted otherwise. Attribution appreciated; corrections and PRs welcome.
