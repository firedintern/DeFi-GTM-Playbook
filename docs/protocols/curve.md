---
protocol: Curve
category: DEX (stableswap)
tvl_snapshot: "$1.3B (July 2026 DeFiLlama, aggregate curve-finance entry)"
gtm_archetype: Incentive marketplace (ve)
main_channels: Pool integrations; bribe market
incentive_style: Gauge-directed emissions
---

# Curve: Incentives as the Product, and the Market That Grew on Top

## Founding wedge

Curve launched in January 2020 (Michael Egorov; StableSwap whitepaper late 2019): an AMM specialized for like-priced assets (stablecoins, and later stETH/ETH), with far lower slippage than constant-product designs. The wedge made Curve the default venue for stable-asset liquidity. The 3pool (DAI/USDC/USDT) became early DeFi's liquidity hub, and the stETH/ETH pool is where [Lido](lido.md) bought its credibility. One of the oldest protocols in this set, and the origin of an entire GTM mechanic.

## GTM & growth levers

- **CRV launch (August 2020), no points, no seasons.** Continuous emissions to LPs. Notably, an anonymous user deployed the (public) contracts early and the team accepted the launch: community front-running as an accidental fair-launch story (verified; widely documented).
- **veCRV: lock-to-earn alignment.** Lock CRV up to 4 years for voting power, a share of trading fees, and up to 2.5x boosted LP rewards. Locking shrinks float and selects for aligned holders. This is the template every later ve-system copied.
- **The gauge system is the pivotal design.** Weekly gauge votes direct CRV emissions across pools. Curve does not decide where its liquidity incentives go. It sells the decision. That single choice turned emissions from an expense into a marketplace.
- **The consequence:** any protocol that needed deep stable liquidity (every stablecoin issuer, every LST) had to acquire veCRV influence. Customers became token buyers. Demand for distribution became demand for CRV. This is the strongest version of "make your customers your BD team" in the whole report.

```
Curve growth loop: sell the emissions decision, not the emissions

1. CRV emissions to LPs, directed weekly by gauge votes
        -> 2. Protocols needing deep stable liquidity must acquire veCRV influence
        -> 3. Customers become CRV/veCRV buyers (demand for distribution = demand for CRV)
        -> 4. Convex industrializes accumulation (cvxCRV, vlCVX); bribe markets (Votium, Hidden Hand) let
             protocols rent votes instead of buying tokens outright
        -> 5. Deepest, most liquid stable pools attract the next stablecoin/LST launch
        -> loops back to 1, but value increasingly accrues to Convex's interface, one layer up
```

## The Curve Wars and the CRV/CVX correlation

In 2021 protocols raced to accumulate veCRV, and Convex (May 2021) industrialized the race. Deposit CRV into Convex and get cvxCRV (liquid and yield-bearing) while Convex locks the CRV forever; LPs stake through Convex to get boosted yields without locking anything themselves. Convex accumulated roughly half of all veCRV (reported range 47-54% depending on snapshot date; Convex's own dashboard reads at the top of that range), which made CVX the meta-governance asset: vote-locked CVX (vlCVX) directs how Convex's veCRV votes.

This is the correlation to understand. CVX is effectively a leveraged claim on CRV governance. One locked CVX has historically commanded a multiple of veCRV voting power, so CVX's market value tracked the value of the emissions it could direct, and bribe yield anchored CVX demand the way interest rates anchor a currency: protocols paid vlCVX and veCRV voters per vote through markets like Votium and Hidden Hand instead of buying tokens outright. At the peak of the Curve Wars, bribes were the most capital-efficient way to rent stablecoin liquidity in DeFi. When emissions value fell, bribe yield fell, and CVX repriced with it. CRV and CVX are one economic system priced at two layers.

The GTM reading: Curve outsourced its own BD twice. First to token buyers (the Curve Wars), then to an aggregator built on top (Convex), which captured the interface to Curve's own incentive market. [Lido](lido.md)'s early Curve subsidies were spending directly into this machine.

## Distribution channels

Almost purely DeFi-native: pool integrations (every stablecoin or LST launch needed a Curve pool to be credible), aggregator routing, and, uniquely, the bribe market as a self-service distribution channel for third parties. Curve's sales team was the gauge ballot: outside protocols did the selling, paid the incentives, and competed for the outcome.

## Current phase & honest assessment (time-sensitive)

TVL is ~$1.3B per DeFiLlama's aggregate curve-finance entry (the DEX-only sub-protocol reads ~$1.4-1.8B depending on inclusion settings), down from a verified peak of $24.3B on January 5, 2022. That is roughly a 95% drawdown, the deepest of any protocol in this set. Contributing factors, and they are two distinct trust lessons, not one: (1) the July 2023 Vyper reentrancy exploit (~$70M), a security failure; (2) the founder's personal CRV-collateralized loans, a key-person financial failure. The mechanism on the second one matters: the founder had borrowed heavily across lending markets against his own CRV stack, so a falling CRV price threatened forced liquidations that would cascade through the very pools Curve depended on, and the resolution required discounted OTC sales to dozens of buyers. Personal balance-sheet risk bled directly into protocol credibility.

Structurally, the ve model itself is aging (see [synthesis](../15-synthesis.md#archetypes-not-fully-covered-here)): emissions-priced liquidity is losing to revenue-backed and embedded models. crvUSD (2023, with LLAMMA soft liquidations) and lending products diversified revenue beyond swap fees, but late relative to the emissions cycle. On crvUSD supply, trackers conflict badly (figures from ~$120M to $2B+ circulate for peaks, and low points near $23M): treat all crvUSD supply figures as unverified pending a check against Curve's own weekly reporting at news.curve.finance. The direction (deep decline from peak) is corroborated; the exact numbers are not. Curve remains systemically important for stable pairs, but it is now a case study in both the power and the decay of incentive-market GTM.

## GTM lessons (inference)

- Design the token so your customers must accumulate it. That converts their treasuries into your buyers and outsources BD entirely.
- When incentives become a market, expect an aggregator to capture the margin. Convex captured the interface to Curve's own system, and much of the value accrued one layer up.
- Emission-denominated moats decay. The liquidity that emissions rent leaves when the emissions' value falls. Build the real-revenue engine (crvUSD-style) before the emissions cycle turns, not after.
- Key-person leverage and security failures are GTM failures: both hit the trust that the whole incentive market was built on.
