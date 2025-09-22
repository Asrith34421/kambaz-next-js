export default function Modules() {
  return (
    <div id="wd-modules">
      <h2>Course CS5610</h2>

      <div id="wd-modules-buttons">
        <button id="wd-collapse-all">Collapse All</button>
        <button id="wd-view-progress">View Progress</button>
        <button id="wd-publish-all">Publish All</button>
        <button id="wd-add-module">+ Module</button>
      </div>

      <br />

      <ul id="wd-modules-list">
        {/* Week 1, Lecture 1 */}
        <li className="wd-module">
          <h3>Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</h3>
          <ul>
            <li>
              <strong>LEARNING OBJECTIVES</strong>
              <ul>
                <li>Introduction to the course</li>
                <li>Learn what is Web Development</li>
              </ul>
            </li>
            <li>
              <strong>READING</strong>
              <ul>
                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                <li>Full Stack Developer - Chapter 2 - Web Development</li>
              </ul>
            </li>
            <li>
              <strong>SLIDES</strong>
              <ul>
                <li>Introduction to Web Development</li>
                <li>Creating an HTTP server with Node.js</li>
                <li>Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Week 1, Lecture 2 */}
        <li className="wd-module">
          <h3>Week 1, Lecture 2 - Formatting User Interfaces with HTML</h3>
          <ul>
            <li>
              <strong>LEARNING OBJECTIVES</strong>
              <ul>
                <li>Learn how to create user interfaces with HTML</li>
                <li>Deploy the assignment to Netlify</li>
              </ul>
            </li>
            <li>
              <strong>SLIDES</strong>
              <ul>
                <li>Introduction to HTML and the DOM</li>
                <li>Formatting Web content with Headings</li>
                <li>Formatting content with Lists and Tables</li>
              </ul>
            </li>
          </ul>
        </li>

        

        {/* Week 2 */}
        <li className="wd-module">
          <h3>Week 2</h3>
          
        </li>

        {/* Week 3 */}
        <li className="wd-module">
          <h3>Week 3</h3>
          
        </li>
      </ul>
    </div>
  );
}
