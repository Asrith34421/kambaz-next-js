import Link from "next/link";

export default function KambazNavigation() {
  return (
    <div id="wd-kambaz-navigation">
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Northeastern
      </a>
      <br />

      {/* Corrected paths — route group (Kambaz) is invisible in URL */}
      <Link href="/Kambaz/Account" id="wd-account-link">Account</Link><br />
      <Link href="/Kambaz/Dashboard" id="wd-dashboard-link">Dashboard</Link><br />
      <Link href="/Kambaz/Dashboard" id="wd-course-link">Courses</Link><br />

      {/* Other links remain unchanged */}
      <Link href="/Calendar" id="wd-calendar-link">Calendar</Link><br />
      <Link href="/Inbox" id="wd-inbox-link">Inbox</Link><br />
      <Link href="/Labs" id="wd-labs-link">Labs</Link><br />
    </div>
  );
}
