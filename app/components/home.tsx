"use client";

import Link from "next/link";

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <main className="flex flex-col items-center justify-center">
        <div className="text-center mt-32 mb-8">
          {" "}
          {/* Adjust mt-16 (margin-top) as needed for spacing from header */}
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            Turn your Sui into Mist
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
        {/* Add more content here as needed */}
      </main>
    </div>
  );
};

export default Home;
