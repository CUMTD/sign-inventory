/** @type {import('next').NextConfig} */

const hostname = process.env.NEXT_PUBLIC_IMAGE_DOMAIN ?? '';
const port = process.env.NEXT_PUBLIC_IMAGE_PORT ?? '443';

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname,
				port,
				pathname: '/stop-point/**',
			},
		],
	},
};

module.exports = nextConfig;
