import Modules from "../Modules/page";
import CourseStatus from "./Status";

export default function CourseHome({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-course-home">
      <h2>Course Home: {cid}</h2>
      <table>
        <tbody>
          <tr>
            <td valign="top" width="75%">
              <Modules />
            </td>
            <td valign="top" width="25%">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );}
