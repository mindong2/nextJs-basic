import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <Link href="/">
        <span className={router.pathname === "/" ? "active" : ""}>Home</span>
      </Link>
      <Link href="/about">
        <span className={router.pathname === "/about" ? "active" : ""}>about</span>
      </Link>
      <style jsx>
        {`
          .active {
            color: red;
          }
        `}
      </style>
    </div>
  );
}
