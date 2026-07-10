# Contributing

This project is an open-source playbook on DeFi go-to-market and growth strategy. Contributions are welcome: corrections to existing case studies, updates as protocols evolve, and new protocol write-ups.

## Ways to contribute

- **Correct a claim.** If a fact is wrong, outdated, or the source doesn't support it, open a PR with the fix and cite your source.
- **Refresh a metric.** TVL, revenue, and user-count figures are point-in-time snapshots (July 2026) and will drift. PRs that update a metric should note the new snapshot date and source.
- **Add a case study.** Propose a new protocol using the structure below. Explain in the PR description why it adds a distinct GTM pattern not already covered (see the [GTM archetype map](docs/15-synthesis.md#gtm-archetype-map)) — this project favors pattern coverage over exhaustiveness.
- **Extend the synthesis.** If a new cross-protocol pattern emerges from the case studies, propose an addition to [docs/15-synthesis.md](docs/15-synthesis.md).

## Confidence classes: how to write claims

Every claim in this playbook should be classifiable into one of three confidence levels (see the [README](README.md#methodology-and-how-to-read-claims) for the full explanation):

1. **Verified facts** — corroborated by a primary source (protocol blog/announcement) or multiple independent reports. Name the source inline for load-bearing claims.
2. **Time-sensitive metrics** — TVL, supply, revenue, user counts. Mark these explicitly as time-sensitive and state the snapshot date.
3. **Analytical inference** — your interpretation of why something worked. Keep this in "GTM lessons" sections, clearly separated from facts. If a figure only traces back to a secondary/explainer-grade summary, mark it "reported."

Do not blend these tiers in the same sentence without signaling which one you're in.

## Case study structure

Each protocol file lives in `docs/protocols/<slug>.md` with this frontmatter:

```yaml
---
protocol: <Name>
category: <one of: Lending, Liquid staking, Lending infra, Stablecoin (CDP),
           Capital allocator, Restaking, Synthetic dollar, Institutional credit,
           RWA / treasuries, Restaking / neobank, DEX, or a new category>
tvl_snapshot: "$X.XB (Month Year DeFiLlama)"
gtm_archetype: <short label, e.g. "Embedded B2B2C">
main_channels: <short list>
incentive_style: <short label>
---
```

Followed by these sections:

- **Founding wedge** — the first job-to-be-done or pain point the protocol solved.
- **GTM & growth levers** — the specific tactics that compounded, as a bulleted list.
- **Distribution channels** — where users/liquidity actually come from today.
- **Current phase** (optional but encouraged) — what the protocol is doing now, including honest assessment of what isn't working.
- **GTM lessons (inference)** — 2-4 bullets of argued judgment, clearly marked as inference.

After adding a case study, update:
- [docs/01-market-snapshot.md](docs/01-market-snapshot.md) (add a row to the table)
- [docs/15-synthesis.md](docs/15-synthesis.md) (add a row to the GTM archetype map, and reference the new protocol in relevant pattern bullets if applicable)
- [README.md](README.md) (add a link under Case studies)

## Sourcing bar

Prefer protocol-primary sources (blog posts, governance forums, official docs) and named outlets (The Block, CoinDesk, Fortune, Blockworks) over aggregator/explainer summaries. If a claim's only source is an explainer-grade summary, mark it "reported" rather than stating it plainly. List your sources for a new or edited case study in [docs/appendix-a-methodology.md](docs/appendix-a-methodology.md).

## Style

- Keep the confidence-tier discipline above everything else — this is what makes the playbook trustworthy rather than just another crypto blog post.
- Prefer specific, falsifiable claims ("stkAAVE rewards flipped Aave past Compound to #1 in lending, April 2021") over vague ones ("Aave grew a lot").
- Land each case study on 2-4 GTM lessons that generalize — that's the payoff for a reader who came from the [builder's guide](docs/17-builders-guide.md).
