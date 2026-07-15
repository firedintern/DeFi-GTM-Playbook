# Appendix B: Key Mechanics & Terms (GTM Grammar)

This is not a full DeFi glossary. It covers only the mechanics that drive the growth loops in the case studies, and every entry says why the mechanic matters for GTM, not just what it is. Non-DeFi-native readers should skim this before the [protocol case studies](01-market-snapshot.md).

## B.1 Liquidity, trading, and composability

- **Liquidity pool (LP) and LP token.** A smart contract holding assets for trading; depositors receive LP tokens representing their share. GTM angle: LP tokens are the handle for incentives (emissions, points) and for composability (LP positions reused as collateral or strategy inputs).
- **Automated Market Maker (AMM).** A DEX that prices trades with a formula instead of an order book. Matters because permissionless pool creation ([Uniswap](protocols/uniswap.md)) turns every token launch into a distribution event for the DEX.
- **Slippage and impermanent loss.** Slippage: the gap between expected and executed price. Impermanent loss: LP underperformance when prices move away from the pool's initial ratio. Both degrade pool attractiveness, which is why protocols subsidize liquidity ([Lido](protocols/lido.md) on Curve) or engineer efficiency (Uniswap v3 concentrated liquidity).
- **Aggregator / router.** Tools (1inch, UniswapX) that route orders across venues for best execution. GTM angle: routers are distribution channels; being integrated into a major aggregator means your liquidity gets used, not just parked.
- **Composability.** Plugging protocols and positions into each other like Lego. The core GTM superpower in this report: integrations are how stETH, USDe, and syrupUSDC became default building blocks.

## B.2 Credit, leverage, and looping

- **Collateral and overcollateralized lending.** Collateral is the asset pledged against a loan; overcollateralized means the collateral is worth more than the loan. Conservative collateralization is part of the safety brand that makes deposits sticky ([Aave](protocols/aave.md)).
- **Looping.** Borrow against a deposit, redeposit the proceeds, repeat. Multiplies TVL and points per user, which is why it is central to [Ethena](protocols/ethena.md)-style growth. Also multiplies incentive sensitivity: leveraged TVL leaves fast when rewards fall.
- **Undercollateralized credit / pool delegates.** Loans underwritten by professional delegates who stake first-loss capital and set terms ([Maple](protocols/maple-finance.md) pre-2.0). The GTM lens: underwriting quality is the growth strategy; when it fails, the growth loop collapses with it.

## B.3 Staking, restaking, LSTs, and LRTs

- **Staking.** Locking tokens to secure a network for rewards. The raw material; protocols compete on how liquid and reusable that exposure becomes.
- **Liquid staking token (LST).** A transferable token representing staked assets plus rewards (stETH). Turns passive staking into an active balance-sheet primitive, enabling the integration loops described in the [Lido case study](protocols/lido.md).
- **Restaking.** Re-pledging staked ETH to secure additional services ([EigenLayer](protocols/eigencloud.md)'s AVSs). Lets new networks rent Ethereum's security, and turned LRT issuers into a distribution layer for the platform.
- **Liquid restaking token (LRT).** A wrapped, circulating representation of restaked ETH ([ether.fi](protocols/etherfi.md)'s eETH). The asset that made stacked points and multi-protocol yield strategies possible.

## B.4 Yield farming, liquidity mining, and points

- **Yield farming.** Doing things in DeFi (LPing, lending, staking) for rewards. The bootstrap engine; the strategic question is always whether the rewards create durable loops or rent mercenary capital.
- **Liquidity mining (LM).** Emitting tokens to LPs or lenders based on capital supplied. Era 1 of the [incentive stack](15-synthesis.md#the-evolution-of-the-incentive-stack): effective but mercenary unless anchored to real yield or a safety brand.
- **Points programs / seasons.** Off-chain points accrued for behaviors (depositing, looping, referring) over defined seasons, later converted to tokens via airdrop. Era 2: lets teams tune incentives toward high-value behaviors before committing token supply.
- **Retroactive airdrop.** Token distribution to past users based on historical activity ([Uniswap](protocols/uniswap.md)'s 400 UNI). Selects for real users and creates goodwill instead of bribing prospective mercenaries.

## B.5 RWAs, stablecoins, and savings

- **Stablecoin.** A token holding stable value, fiat-backed (USDC, USDS) or synthetic (USDe). The central rails of DeFi; being the default unit of account is one of the deepest moats.
- **Real-world assets (RWAs).** Off-chain assets (T-bills, credit) tokenized onchain. RWA yield funds sustainable incentives ([Sky](protocols/sky-maker.md)'s DSR, [Spark](protocols/spark.md), [Ondo](protocols/ondo-finance.md), USDtb), underpinning Era 3.
- **Savings rate / savings vault.** Protocol-set yield on holding a stablecoin (DSR, sUSDS, sGHO). A monetary GTM lever: it drives stablecoin demand and stickiness directly.

## B.6 Governance, tokenomics, and bribes

- **Governance token.** Voting rights over protocol parameters and treasury. Distribution of it (LM, points, airdrops) is both an incentive system and an alignment mechanism.
- **veTokenomics, gauges, and bribes.** Vote-escrowed systems (Curve, Balancer): lock tokens for boosted voting power; gauges route emissions where votes direct them; bribes are side payments to voters. GTM angle: this is a market for distribution. Protocols without big treasuries can rent emission flows in established ecosystems, but it tips into purely mercenary GTM if not tied to lasting utility. Not covered in the case studies, and note the model is in decline as of 2026 (veBAL ended after Balancer's Nov 2025 exploit; Pendle moved to lock-free sPENDLE in Jan 2026; see the [synthesis](15-synthesis.md#archetypes-not-fully-covered-here)).
- **Buyback-and-burn / revenue buybacks.** Using protocol revenue to repurchase (and sometimes burn) the token. When real revenue funds it ([Maple](protocols/maple-finance.md)'s SYRUP program), the token becomes a credible claim on protocol economics, turning tokenomics into retention.

## B.7 Ecosystem and GTM slang

- **DeFi mullet.** Fintech front end, DeFi back end (Coinbase loans powered by [Morpho](protocols/morpho.md)). Grow through embedded rails in existing brands without owning UX or acquisition.
- **Ecosystem-default status.** Being a chain's official or founder-backed default ([JustLend](protocols/justlend.md) on Tron). Substitutes for years of open-market GTM, at the cost of single-chain dependence.
- **Mercenary capital.** Capital that follows the highest emissions or points with no loyalty. The failure mode the whole [incentive-quality discussion](15-synthesis.md#incentive-architecture-quality-mercenary-tvl-vs-durable-loops) is built around.
