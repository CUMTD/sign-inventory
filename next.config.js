/** @type {import('next').NextConfig} */

const hostname = process.env.IMAGE_DOMAIN ?? '';
const port = process.env.IMAGE_PORT ?? '443';

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname,
				port,
				pathname: '/child-stop/**',
			},
		],
	},
};

module.exports = nextConfig;
