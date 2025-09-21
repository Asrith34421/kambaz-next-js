export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />

      <label htmlFor="wd-description">Description</label><br />
      <textarea id="wd-description" rows={4} cols={50}>
        This assignment is available online. Submit a link to the landing page of your Web application including the following:
        - Netlify link
        - Section links to each tab assignment
        - Kanbas application links
        - Source code repositories
        - Navigation back to landing page
      </textarea>
      <br /><br />

      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option>Assignments</option>
                <option>Quizzes</option>
                <option>Exams</option>
                <option>Project</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option>Percentage</option>
                <option>Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option>Online</option>
                <option>On Paper</option>
              </select>
              <br />
              <label htmlFor="wd-text-entry">
                <input type="checkbox" id="wd-text-entry" />
                Text Entry
              </label><br />
              <label htmlFor="wd-website-url">
                <input type="checkbox" id="wd-website-url" />
                Website URL
              </label><br />
              <label htmlFor="wd-media-recordings">
                <input type="checkbox" id="wd-media-recordings" />
                Media Recordings
              </label><br />
              <label htmlFor="wd-student-annotation">
                <input type="checkbox" id="wd-student-annotation" />
                Student Annotation
              </label><br />
              <label htmlFor="wd-file-upload">
                <input type="checkbox" id="wd-file-upload" />
                File Uploads
              </label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
            <td>
              <input id="wd-assign-to" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
              until
              <input type="date" id="wd-available-until" defaultValue="2024-05-20" />
            </td>
          </tr>
        </tbody>
      </table>

      <br />
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
