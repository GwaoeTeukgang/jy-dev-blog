import withPWAInit from '@ducanh2912/next-pwa';
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.graphassets.com',
      'placehold.co',
      'localhost',
      'res.cloudinary.com',
      'splendid-luck-b586c4eedf.media.strapiapp.com',
    ],
  },
  transpilePackages: ['three'],
  reactStrictMode: false,
};

const withPwa = withPWAInit({
  dest: 'public',
})

export default withPwa(nextConfig);
