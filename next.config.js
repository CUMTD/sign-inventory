/** @type {import('next').NextConfig} */
const ENDPOINT = process.env.NEXT_PUBLIC_INVENTORY_API_ENDPOINT;

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'localhost',
				port: '7135',
				pathname: '/child-stop/**',
			},
		],
	},
};

module.exports = nextConfig;
