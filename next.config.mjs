/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'media.graphassets.com',
      'placehold.co',
      'localhost',
      'res.cloudinary.com',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;
