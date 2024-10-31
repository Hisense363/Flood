import React from "react";
import Link from "next/link";
import Header from "./header";
import Image from "next/image";
import StatusBar from "./status";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => (
  <div
    className={`snap-start h-screen flex min-h-dvh w-full py-8 md:py-16 px-3 sm:px-8 flex-col md:flex-row`}
  >
    {children}
  </div>
);

const SnapScrollPage: React.FC = () => {
  return (
    <div className="snap-y snap-mandatory overflow-y-scroll overflow-x-hidden h-screen w-screen text-white">
      <div className="snap-start container mx-auto relative w-full h-full flex flex-col">
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
          <StatusBar />
        </div>
      </div>
      <Section>
        <div
          id="about"
          className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-6 md:gap-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pt-10">
            Flood [fluhd]:
          </h1>
        </div>
        <br />
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
          <h3 className="lg:text-5xl md:text-4xl smallPhone:text-3xl text-2xl font-bold">
            To overwhelm with an abundance of something.
          </h3>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Flood ($FLUD) is a new mineable currency on Sui Network. It upholds
            the core ethos of cryptocurrencies such as Bitcoin. No insiders, no
            pre-mine, fair distribution.
          </p>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            The mission is simple: onboard more users, send more transactions.
          </p>
          <Link
            href="https://github.com/Hisense363/Flood/blob/main/README.md"
            className="hover:text-gray-300"
          >
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-xl">
              Whitepaper
            </button>
          </Link>
        </div>
      </Section>

      <Section>
        <div
          id="spam"
          className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-6 md:gap-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pt-10">
            Proof of Spam:
          </h1>
        </div>
        <br />
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 transition-colors text-white selection:bg-white selection:text-black">
          <h3 className="lg:text-5xl md:text-4xl smallPhone:text-3xl text-2xl font-bold">
            Send Transactions. Earn Rewards.
          </h3>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Instead of hardware, and electricity seen in traditional Proof of
            Work mining. Proof of Spam requires time, and transaction fees.
          </p>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            In this system, access to cheaper energy, or more powerful mining
            rigs provides no benefit. Instead, this can be viewed as an
            extremely long auction priced in Sui.
          </p>
          <Link href="hop.fun" className="hover:text-gray-300">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-xl">
              Buy it
            </button>
          </Link>
        </div>
      </Section>
      <Section>
        <div
          id="social"
          className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-6 md:gap-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pt-10">
            Proof of Social:
          </h1>
        </div>
        <br />
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 transition-colors text-white selection:bg-white selection:text-black">
          <h3 className="lg:text-5xl md:text-4xl smallPhone:text-3xl text-2xl font-bold">
            Incentives to grow the network are built in.
          </h3>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Receive a 20% matching bonus based on each of your referrals
            transaction activity, capped at your personal transaction volume.
          </p>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Be rewarded for working with your friends to mine together, onboard
            more people, and grow the community!
          </p>
          <Link href="https://x.com" className="hover:text-gray-300">
            <button className="bg-black hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-full text-xl">
              Connect
            </button>
          </Link>
        </div>
      </Section>
      <Section>
        <div
          id="supply"
          className="w-full md:w-1/3 flex flex-col gap-4 sm:gap-6 md:gap-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold pt-10">
            Supply:
          </h1>
        </div>
        <br />
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 transition-colors text-white selection:bg-white selection:text-black">
          <h3 className="lg:text-5xl md:text-4xl smallPhone:text-3xl text-2xl font-bold">
            Smooth rewards distribution
          </h3>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Total Supply = 100,000,076 $FLUD
          </p>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Rewards Decay according the the fibonacci sequence. At every epoch
            in the sequence, rewards are reduced by 3/4ths.
          </p>
          <p className="text-lg custom1:text-xl smallPhone:text-2xl md:text-2xl lg:text-3xl leading-relaxed max-w-[48rem] font-medium font-hero">
            Starting at 1,302,720 rewards in the first epoch (1.3% of total
            supply).
          </p>
          <Image
            src="/images/rewardsChart.png" // Update this path
            alt="Chart"
            width={500} // Adjust as needed
            height={200} // Adjust as needed
            className="rounded-3xl" // Add margin if needed
          />
        </div>
      </Section>
    </div>
  );
};

export default SnapScrollPage;
