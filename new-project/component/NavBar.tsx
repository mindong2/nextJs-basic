import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    console.log(router);
    return (
        <>
            <Link href="/" style={{ color: router.pathname === "/" ? "red" : "blue" }}>
                Home
            </Link>
            <Link href="/about" style={{ color: router.pathname === "/about" ? "red" : "blue" }}>
                about
            </Link>
        </>
    );
}
