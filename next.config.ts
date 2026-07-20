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
				source: "/contact",
				destination: "/#book",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
