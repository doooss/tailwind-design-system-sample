/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        // cva로 생성되는 variable을 safe-list 에 등록할 수 있도록 하는 파일
        require('./safe-list-generator.js');
        return config;
    },
};

module.exports = nextConfig;
