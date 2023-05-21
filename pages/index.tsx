import Link from "next/link";
import Seo from "./Seo";
import { useRouter } from "next/router";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
}

export default function Home({ results: movies }: { results: IMovie[] }) {
  const router = useRouter();
  const moveDetail = (id: string, title: string) => {
    router.push(`/movies/${title}/${id}`);
  };
  return (
    <>
      <Seo title="home" />
      <div className="container">
        {movies?.map((movie) => {
          return (
            <div className="movie" key={movie.id}>
              <div onClick={() => moveDetail(movie.id.toString(), movie.title)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
              </div>
              <h4>
                <Link href={`/movies/${movie.title}/${movie.id}`}>{movie.title}</Link>
              </h4>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie {
          cursor: pointer;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

// ssr로 불러온다 (서버측에서 html로 렌더링 완료 후 불러오기 때문에 유저는 완전한 화면을 바로 볼수있다.)
export async function getServerSideProps() {
  const { results } = await (await fetch("http://localhost:3000/api/movies")).json();
  return {
    props: {
      results,
    },
  };
}
