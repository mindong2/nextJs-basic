import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>home</h1>
      <Link href={"/list"}>list</Link>
    </>
  );
}
