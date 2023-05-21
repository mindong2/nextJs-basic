/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        /* 
          *은 뒤에 붙는 모든 string query를 포함 
          source로 접속시 destination으로 redirect
        */
        source: "/old-blog/:path*",
        destination: "/new-blog/:path*",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        /* 
          rewrite는 url을 다른이름으로 작성
          destination의 url을 source로 표현
        */
        source: `/api/movies`,
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`,
      },
      {
        source: `/api/movies/:id`,
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}&language=ko&page=1`,
      },
    ];
  },
};

module.exports = nextConfig;
