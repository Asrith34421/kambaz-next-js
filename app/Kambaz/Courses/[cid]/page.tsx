import { redirect } from "next/navigation";

export default function CoursesPage({ params }: { params: { cid: string } }) {
  redirect(`/Kambaz/Courses/${params.cid}/Home`);
}
