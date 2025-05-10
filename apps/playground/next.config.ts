import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["ts", "tsx", "js", "jsx"],
	async rewrites() {
		return [
			{
				source: "/",
				destination: "/home",
			},
		];
	},
};

export default nextConfig;
