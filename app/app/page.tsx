// app/app/page.tsx
import React from "react";

export default function AppLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Dashboard Cards */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Balances</h2>
              <p className="text-gray-300">0.12 Sui/423.84 Flud</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Transactions Sent</h2>
              <p className="text-gray-300">413 Epoch/6092 Total</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Performance</h2>
              <p className="text-gray-300">System metrics and analytics</p>
            </div>
          </div>

          {/* Additional Content */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">Your address:</h2>
            <h3 className="text-xl font-semibold mb-6">
              0x6e94f56699cc8b8dc652a5bb8652dfc1b7bc8c652e1ecd2dd7dff25525506773
            </h3>
            <h2 className="text-2xl font-semibold mb-6">Getting Started</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300">
                In order to begin mining, please fund your wallet with Sui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
