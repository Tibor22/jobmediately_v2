/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'anknfefxfvwkhvhdqubf.supabase.co',
				port: '',
				pathname: '**',
			},
		],
	},
};

module.exports = nextConfig;
