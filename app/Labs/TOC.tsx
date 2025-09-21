import Link from "next/link";

export default function TOC() {
  return (
    <ul>
      <li><Link href="/Kambaz">Kambaz Landing Page</Link></li>
      <li><Link href="/Labs/Lab1">Lab 1 – HTML Basics</Link></li>
      <li><Link href="/Labs/Lab2">Lab 2 – Routing in Next.js</Link></li>
      <li><Link href="/Labs/Lab3">Lab 3 – Dynamic Pages</Link></li>
    </ul>
  );
}
