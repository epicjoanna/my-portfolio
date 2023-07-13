import * as React from "react";
import "../styles/Experience.css";

function Experience() {
  return (
    <>
      {/* tidy this later */}
      <section id="experience">
        <h1 className="section">/experience</h1>
        <div className="experience-content">
          <div className="timeline">
            <div className="container right">
              <p>
                <b>Graduate Apprentice Software Engineer</b>
                <br />
                <span className="date">October 2022 - Present</span>
                <br />
                <b>Smarter Grid Solutions</b>
                <br />
                Working as part of the UI modernisation team for Cirrus Flex,
                using React/Next.js
              </p>
            </div>
            <div className="container right">
              <p>
                <b>Software Engineering (Graduate Apprenticeship) BSc</b>
                <br />
                <span className="date">October 2022 - Present</span>
                <br />
                <b>University of Glasgow</b>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Experience;
