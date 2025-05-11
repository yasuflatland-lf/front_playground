import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx"],
	typescript: {
		ignoreBuildErrors: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
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
