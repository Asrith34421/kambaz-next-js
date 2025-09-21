
import Modules from "../Modules/page";
import CourseStatus from "./Status";


export default function CourseHome({ params }: { params: { cid: string } }) {
  const { cid } = params;

  return (
    <div id="wd-course-home">
      <h2>Course Home: {cid}</h2>
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top" width="70%">
              <Modules />
            </td>
            <td valign="top" width="30%">
              <CourseStatus />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
