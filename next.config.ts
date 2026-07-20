import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/articles",
				destination: "/",
				permanent: true,
			},
			{
				source: "/article/:path*",
				destination: "/",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
