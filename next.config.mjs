/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    const isProd = process.env.NODE_ENV === "production";

    return isProd
      ? [
          {
            source: "/:path*",
            destination: "/app/:path*",
          },
        ]
      : [
          {
            source: "/:path*",
            has: [
              {
                type: "host",
                value: "app.localhost:3000",
              },
            ],
            destination: "/app/:path*",
          },
        ];
  },
};

export default nextConfig;
