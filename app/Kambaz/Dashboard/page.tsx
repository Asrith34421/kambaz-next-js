import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: "CS5610",
    title: "React JS",
    description: "Full Stack Software Developer",
    image: "/images/reactjs.jpg",
  },
  {
    id: "CS5611",
    title: "Node JS",
    description: "Backend Development",
    image: "/images/node.jpg",
  },
  {
    id: "CS5612",
    title: "HTML & CSS",
    description: "Frontend Fundamentals",
    image: "/images/html.jpg",
  },
  {
    id: "CS5613",
    title: "JavaScript",
    description: "Interactive Web Apps",
    image: "/images/js.jpg",
  },
  {
    id: "CS5614",
    title: "MongoDB",
    description: "NoSQL Database System",
    image: "/images/mongo.jpg",
  },
  {
    id: "CS5615",
    title: "NEXT.js",
    description: "React Based Web Framework",
    image: "/images/next.jpg",
  },
  {
    id: "CS5616",
    title: "Security",
    description: "Secure Web Applications",
    image: "/images/security.jpg",
  },
];

export default function Dashboard() {
  const rows = [];
  for (let i = 0; i < courses.length; i += 3) {
    rows.push(courses.slice(i, i + 3));
  }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <table cellPadding={20}>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((course) => (
                <td key={course.id} valign="top">
                  <Link href={`/Kambaz/Courses/${course.id}/Home`}>
                    <div>
                      <Image
                        src={course.image}
                        width={200}
                        height={150}
                        alt={`${course.title} thumbnail`}
                      />
                      <h5>{course.id}: {course.title}</h5>
                      <p>{course.description}</p>
                      <button>Go</button>
                    </div>
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
