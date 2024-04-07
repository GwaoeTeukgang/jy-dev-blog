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
  transpilePackages: ["three"],
  reactStrictMode: false,
};

export default nextConfig;
