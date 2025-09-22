import Link from "next/link";
import TOC from "./TOC";

export default function LabsLandingPage() {
  return (
    <div id="wd-labs-landing">
      <h1>Labs</h1>
      <hr />

      <section>
        <h2>Student Information</h2>
        <p><strong>Name:</strong> Bala Asrith Chavala</p>
        <p><strong>Section:</strong> Offline</p>
      </section>

      <section>
        <h2>Table of Contents</h2>
        <TOC />
      </section>

      <section>
        <h2>GitHub Repository</h2>
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
    </div>
  );
}
