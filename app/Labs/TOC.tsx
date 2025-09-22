import Link from "next/link";

export default function TOC() {
  return (
    <div id="wd-labs-toc">
      <ul>
        <li>
          <Link href="/Labs">Home</Link>
        </li>
        <li>
          <Link href="/Labs/Lab1">Lab 1 – HTML Examples</Link>
        </li>
        <li>
          <Link href="/Labs/Lab2">Lab 2 – CSS Basics</Link>
        </li>
        <li>
          <Link href="/Labs/Lab3">Lab 3 – Javascript Fundamentals</Link>
        </li>
        <li>
          <Link href="/Kambaz">Kambaz Landing Page</Link>
        </li>
      </ul>
    </div>
  );
}
