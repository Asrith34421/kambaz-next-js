import Link from "next/link";
import TOC from "./TOC";

export default function LabsLandingPage() {
  return (
    <div id="wd-labs-landing">
      <h1>Lab 1: Full Stack Next.js Web Applications</h1>
      <hr />

      <section>
        <h2> Student Information</h2>
        <p><strong>Name:</strong>  [Bala Asrith Chavala]</p>
        <p><strong>Section:</strong> [CSE CORE]</p>
      </section>

      <section>
        <h2> Table of Contents</h2>
        <TOC />
      </section>

      <section>
        <h2> GitHub Repository</h2>
        <p>
          <a
            href="https://github.com/Asrith34421/kambaz-next-js"
            target="_blank"
            rel="noopener noreferrer"
            id="wd-github"
          >
            View Source Code on GitHub
          </a>
        </p>
      </section>

      <section>
        <h2> Live Deployment</h2>
        <p>
          <a
            href="https://kambaz-next-js-nine-lac.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Deployed Application on Vercel
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Northeastern University. All rights reserved.</p>
      </footer>
    </div>
  );
}
