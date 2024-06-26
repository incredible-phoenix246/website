/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "lh3.googleusercontent.com" },
            { hostname: "res.cloudinary.com" },
            { hostname: "ui-avatars.com" },
            { hostname: "i.pinimg.com" },
            { hostname: "giphy.com" },
        ],
    },
};

export default nextConfig;
