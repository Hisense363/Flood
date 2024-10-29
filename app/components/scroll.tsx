import React from "react";
import Link from "next/link";
import Header from "./header";
import Image from "next/image";
import AnimatedGauge from "./gauge";
import FlourishEmbed from "./flourish";
import StatusBar from "./status";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <div className={`snap-start h-screen container mx-auto`}>{children}</div>
);

const SnapScrollPage: React.FC = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen text-white">
      <Section>
        <div className="relative w-full h-full flex flex-col">
          <Header />
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              {" "}
              {/* Adjust mt-16 (margin-top) as needed for spacing from header */}
              <h1 className="text-6xl md:text-8xl font-bold mb-4 ">
                Flood Sui with Transactions
              </h1>
              <p className="text-2xl md:text-4xl mb-3">
                The next evolution of mining
              </p>
              <div className="min-h-24">
                <Link href="/about" className="hover:text-gray-300">
                  <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-xl">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <StatusBar />
        </div>
      </Section>
      <Section>
        <h1 className="text-7xl md:text-9xl font-bold xs:pt-16 pt-0">
          Flood [fluhd]:
        </h1>
        <h3 className="lg:text-6xl md:text-6xl sm:text-4xl text-3xl font-bold">
          to overwhelm with an abundance of something.
        </h3>
        <br />
        <div className="flex flex-col h-3/5">
          <div className="flex-1">
            <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
              Flood ($FLUD) is a new mineable currency on Sui Network. It
              upholds the core ethos of cryptocurrencies such as Bitcoin. No
              insiders, no pre-mine, fair distribution.
            </p>
          </div>
          <div className="flex-1">
            <div className="text-center flex justify-center h-full">
              <Link href="/about" className="hover:text-gray-300">
                <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-xl">
                  Whitepaper
                </button>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex  h-full">
              <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
                The mission is simple: onboard more users, send more
                transactions.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <h1 className="text-7xl md:text-9xl font-bold xs:pt-16 pt-0">
          Proof of Spam
        </h1>
        <h3 className="lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-bold">
          Rewarding users for their share of transactions.
        </h3>
        <br />
        <div className="flex flex-col h-3/5">
          <div className="flex-1">
            <p className="lg:text-3xl md:text-2xl text-xl">
              Instead of hardware, and electricity seen in traditional Proof of
              Work mining. Proof of Spam requires time, and transaction fees.
            </p>
          </div>
          <AnimatedGauge />
          <div className="flex-1 flex items-center">
            <div>
              <p className="lg:text-3xl md:text-2xl text-xl text-white">
                In this system, access to cheaper energy, or more powerful
                mining rigs provides no benefit. Instead, this can be viewed as
                an extremely long auction priced in Sui.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <h1 className="text-7xl md:text-9xl font-bold xs:pt-16 pt-0">
          Proof of Social
        </h1>
        <h3 className="lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-bold">
          Incentives to grow the network are built in.
        </h3>
        <br />
        <div className="w-fit">
          {" "}
          {/* Full width, 50% of viewport height */}
          <FlourishEmbed id="20019253" />
        </div>
        <div>
          <p className="lg:text-4xl md:text-3xl sm:text-2xl text-xl">
            Receive a 20% matching bonus based on each of your referrals
            transaction activity, capped at your personal transaction volume.
          </p>
        </div>
      </Section>
      <Section>
        <h1 className="text-7xl md:text-9xl font-bold xs:pt-16 pt-0">
          Tokenomics
        </h1>
        <h3 className="lg:text-5xl md:text-5xl sm:text-3xl text-2xl font-bold">
          Balancing rewards incentives at every Epoch.
        </h3>
        <br />
        <div className="text-center">
          <Image
            src="/images/rewardsChart.png" // Update this path
            alt="Chart"
            width={600} // Adjust as needed
            height={240} // Adjust as needed
            className="rounded-3xl" // Add margin if needed
          />
        </div>
        <br />
        <div className="lg:text-3xl md:text-2xl text-xl text-white">
          <p>Total Supply = 100,000,076 $FLUD</p>
          <p>
            Rewards Decay according the the fibonacci sequence. At every epoch
            in the sequence, rewards are reduced by 3/4ths.
          </p>
          <p>
            Starting at 1,302,720 rewards in the first epoch (1.3% of total
            supply).
          </p>
        </div>
      </Section>
    </div>
  );
};

export default SnapScrollPage;
