// next.config.js
const nextConfig = {
    reactStrictMode: true, // React의 Strict Mode를 활성화
    images: {
      domains: ['example.com'], // 외부 도메인의 이미지 사용을 허용
    },
    env: {
      customKey: 'value', // 환경 변수 설정
    },
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = { fs: false }; // Node.js 모듈 'fs'가 클라이언트 사이드에서 사용되지 않도록 설정
      }
      return config;
    },
  };
  
  module.exports = nextConfig;
  