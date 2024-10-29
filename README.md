# FLOOD

Introducing $FLUD. A PoW/Social Coin Hybrid

## Mission

1. Dramatically increase usage of Sui by incentivizing new users to create transactions
2. Create the most fairly distributed currency on Sui

## ELI5

Building on the SPAM project, this project incentivizes miners to send transactions in exchange for $FLUD.

Proof of Spam distributes $FLUD to miners every epoch proportionally to transaction count

Proof of Social distributes $FLUD to miners every epoch from referrals that boost their score

## System overview

The $FLUD system has two components:

1\) An onchain mechanism to track user transactions, calculate rewards per user, update their position, and let users mint FLUD in proportion to the number of txs achieved during that epoch: [src/sui](./src/sui).

2\) A web miner for users to easily send lots of txs, as well as mint and claim FLUD: [src/web](./src/web). The web miner is built on top of the TypeScript SDK: [src/sdk](./src/sdk).

## Boiling mechanism

A Sui "epoch" is roughly equivalent to 1 day.

Users send txs to increase their tx counters during epoch `N`, register their tx counters during epoch `N+1`, and claim FLUD anytime from epoch `N+2` based on the transactions they did in epoch `N`:

- Epoch 0: user floods UserCounter.0 (UC.0)
- Epoch 1: user floods UC.1, registers UC.0
- Epoch 2: user floods UC.2, registers UC.1, claims UC.0
- Epoch 3: user floods UC.3, registers UC.2, claims UC.1
- And so on

## Unique social rules

If miners wish to participate. They can be either:
A referrer: Someone who onboards a new user, and benefits from the new user's transactions.
A referree: Someone who is onboarded, and benefits from being referred.

Claim up to 20% boost for each referral or referree.

Social Rules:

1. Referrers may not claim a bonus from transactions in excess capacity of their own
2. Referrers may not claim a bonus on their referees referral bonuses
3. Limit of one referrer relationship
4. Limit of five referee relationships

As an example, Alice refers Bob and Carol. Alice submits 20 transactions. Bob submits 10. Carol submits 30 transactions.

Alice would receive a total of 26 = 20 from transactions + 2 from Bob (20% of 10 - limited by Bob's total transactions) + 4 from Carol (20% of 20 - limited by Alice's total transaction)
Bob would receive a total of 12 = 10 from transactions + 2 from Alice (20% of 10 - limited by Bob's total transactions)
Carol would receive a total of 34 = 30 from transactions + 4 from Alice (20% of 20 - limited by Alice's total transactions)

The bonus is given when the referree registers their counter. If Carol forgot to register her counter of 30 on the following epoch, Carol would not receive credit for her 30 transactions, nor would Alice receive the bonus of 4.

Circular referrals are allowed. Carol may refer Alice. In that case Carol would receive an addition of 4 to her score (20% of 20 - limited by Alice's total transactions)

## Tokenomics

$FLUD is a finite resource.

Total Supply = 100,000,076 $FLUD
Mineable for 1595 epochs/days or approx 4.4 years

Emission for the first epoch will start at 1,302,720.

The emissions rate will be reduced on every epoch according to the fibonnaci sequence.

The rate of reduction will be (Current Daily Emissions \* 0.7) = New Daily Emissions

Following this logic we can expect the following emissions schedule:

Epoch Range | Daily Emissions

0 | 1302720

1-2 | 977040

3-5 | 732780

6-10 | 549585

11-18 | 412189

19-31 | 309142

32-52 | 231857

53-86 | 173893

87-141 | 130420

142-230 | 97815

231-374 | 73361

375-607 | 55021

608-984 | 41266

985-1594 | 30950

## Sui implementation

Single-writer `UserCounter` objects are used to track the number of txs sent by each user within one epoch.

When that epoch ends, the user registers their `UserCounter` in a shared `EpochCounter` object, so that the total number of txs in the previous epoch can be calculated.

After that next epoch (registration period) ends, users can mint FLUD coins in proportion to the number of txs they sent.

Key functions in the order they get called for any given `UserCounter`:

1. `new_user_counter`: user creates a `UserCounter` owned object for the current epoch (epoch N)
2. `increment_user_counter`: user sends txs to increase `UserCounter.tx_count`, until epoch N ends
3. `register_user_counter`: during epoch N+1, user registers their `UserCounter` in an `EpochCounter` shared object, which counts all txs in the epoch
4. `claim_user_counter`: from epoch N+2, users can mint FLUD coins in proportion to the number of txs they sent during epoch N