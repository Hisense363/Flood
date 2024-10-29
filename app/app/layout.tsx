// app/app/layout.tsx
import React from "react";
import Image from "next/image";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-black text-white p-6">
        <nav className="space-y-4">
          <div className="mb-8">
            <h1 className="text-xl font-bold">
              <Image
                src="/images/FloodTextWhite.png" // Update this path
                alt="Your Company Logo"
                width={200} // Adjust as needed
                height={80} // Adjust as needed
                className="mr-24" // Add margin if needed
              />
            </h1>
          </div>
          <a href="/app" className="block py-2 hover:text-blue-400">
            Home
          </a>
          <a href="/app/analytics" className="block py-2 hover:text-blue-400">
            Wallet
          </a>
          <a href="/app/settings" className="block py-2 hover:text-blue-400">
            RPCs
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100">{children}</main>
    </div>
  );
}
