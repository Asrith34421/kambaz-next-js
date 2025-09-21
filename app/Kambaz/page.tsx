import Link from "next/link";

export default function KambazHome() {
  return (
    <div id="wd-kambaz-home">
      <h1>Northeastern University</h1>
      <h2>Kambaz Academic Portal</h2>
      <p>
        Welcome to the official course management platform for Northeastern University. Kambaz empowers students and faculty to manage academic activities, track progress, and collaborate across courses.
      </p>

      <h3>Quick Access</h3>
      <ul>
        <li>
          <Link href="/Kambaz/Account" id="wd-account-link">
            Account
          </Link>
        </li>
        <li>
          <Link href="/Kambaz/Dashboard" id="wd-dashboard-link">
            Course Dashboard
          </Link>
        </li>
        <li>
          <Link href="/Labs" id="wd-labs-link">
            Lab Exercises
          </Link>
        </li>
      </ul>

      <h3>About Kambaz</h3>
      <p>
        This portal is built using Next.js and follows modern full-stack development practices. It supports dynamic routing, modular layouts, and scalable architecture for academic institutions.
      </p>

      <h3>University Resources</h3>
      <ul>
        <li>
          <a href="https://www.northeastern.edu/" target="_blank" rel="noopener noreferrer">
            Northeastern University Website
          </a>
        </li>
        <li>
          <a href="https://github.com/Asrith34421/kambaz-next-js.git" target="_blank" rel="noopener noreferrer">
            Source Code Repository
          </a>
        </li>
      </ul>

      <p>© 2025 Northeastern University. All rights reserved.</p>
    </div>
  );
}
