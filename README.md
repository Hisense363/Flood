# FLOOD

Introducing $FLUD. A PoW/Social Coin Hybrid

## Mission

1. Dramatically increase usage of crypto by incentivizing new users to create transactions
2. Create the most fairly distributed crypto currency possible

## ELI5

This project incentivizes miners to send transactions in exchange for $FLUD.

Proof of Spam distributes $FLUD to miners every epoch proportionally to transaction count

Proof of Social distributes $FLUD to miners every epoch from referrals that boost their score

## System overview

The $FLUD system has two components:

1\) An onchain mechanism to track user transactions, calculate rewards per user, update their position, and let users mint FLUD in proportion to the number of txs achieved during that epoch: [src/sui](./src/sui).

2\) A web miner for users to easily send lots of txs, as well as mint and claim FLUD: [src/web](./src/web). The web miner is built on top of the TypeScript SDK: [src/sdk](./src/sdk).

## Mining mechanism

A Sui "epoch" is roughly equivalent to 1 day.

Users send txs to increase their tx counters during epoch `N`, register their tx counters during epoch `N+1`, and claim FLUD anytime from epoch `N+2` based on the transactions they did in epoch `N`:

- Epoch 0: user floods UserCounter.0 (UC.0)
- Epoch 1: user floods UC.1, registers UC.0
- Epoch 2: user floods UC.2, registers UC.1, claims UC.0
- Epoch 3: user floods UC.3, registers UC.2, claims UC.1
- And so on

## Unique social rules

Claim up to 20% boost for each referral.

Social Rules:

1. You may not switch referrers
2. Rewards collected from each referral are capped at your own personal transaction count

As an example, Alice refers Bob and Carol. Alice submits 20 transactions. Bob submits 10. Carol submits 30 transactions.

Alice would receive a total of 26 = 20 from transactions + 2 from Bob (20% of 10 - limited by Bob's total transactions) + 4 from Carol (20% of 20 - limited by Alice's total transaction)

Bob would receive a total of 10 from transactions

Carol would receive a total of 30 from transactions

By creating a rigid referral mechanism, onboarding someone is truly rewarding as that person is stuck with you unless they create another account. They would most likely not want to create another account as they would lose all of their referrals in the process. Thereby giving mining accounts a social value from their accumulated referrals.

Social rewards are only given to the direct referral. They do not cascade up the tree. Therefore someone who joins much later, but onboards more users will see larger social rewards than someone who was simply early.

## Tokenomics

$FLUD is a finite resource.

Total Supply = 100,000,000 $FLUD
Mineable for 2582 epochs/days or approximately 7 years

Emission for the first epoch will start at 2,364,260.

The emissions rate will be reduced on every epoch according to the fibonnaci sequence.

The rate of reduction will be (Current Daily Emissions \* 69%) = New Daily Emissions

Following this logic we can expect the following emissions schedule:

Epoch Range | Daily Emissions

0 | 2364260

1-2 | 1631339

3-5 | 1125624

6-10 | 776681

11-18 | 535910

19-31 | 369778

32-52 | 255147

53-86 | 176051

87-141 | 121475

142-230 | 83818

231-374 | 57834

375-607 | 39905

608-984 | 27534

985-1594 | 18998

1595-2582 | 13109

## Sui implementation

Single-writer `UserCounter` objects are used to track the number of txs sent by each user within one epoch.

When that epoch ends, the user registers their `UserCounter` in a shared `EpochCounter` object, so that the total number of txs in the previous epoch can be calculated.

After that next epoch (registration period) ends, users can mint FLUD coins in proportion to the number of txs they sent.

Key functions in the order they get called for any given `UserCounter`:

1. `new_user_counter`: user creates a `UserCounter` owned object for the current epoch (epoch N)
2. `increment_user_counter`: user sends txs to increase `UserCounter.tx_count`, until epoch N ends
3. `register_user_counter`: during epoch N+1, user registers their `UserCounter` in an `EpochCounter` shared object, which counts all txs in the epoch
4. `claim_user_counter`: from epoch N+2, users can mint FLUD coins in proportion to the number of txs they sent during epoch N
