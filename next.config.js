/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.imgflip.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
