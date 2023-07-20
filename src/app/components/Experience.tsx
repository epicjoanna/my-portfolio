import * as React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";

class Experience extends React.Component {
  render() {
    const prevExperience = [
      {
        id: 1,
        jobTitle: "Graduate Apprentice Software Engineer",
        date: "October 2022 - Present",
        company: "Smarter Grid Solutions",
        description:
          "Working as part of the UI modernisation team for Cirrus Flex, using React/Next.js",
      },
      {
        id: 2,
        jobTitle: "Software Engineering (Graduate Apprenticeship) BSc",
        date: "October 2022 - Present",
        company: "University of Glasgow",
        description: "",
      },
    ];

    return (
      <>
        <section id="experience">
          <FadeIn>
            <h1 className="section">/experience</h1>
            <div className="experience-content">
              {prevExperience.map(function (job) {
                return (
                  <div className="timeline">
                    <div className="container right">
                      <div key={job.id}>
                        <p>
                          <b>{job.jobTitle}</b>
                          <br />
                          <span className="date">{job.date}</span>
                          <br />
                          <b>{job.company}</b>
                          <br />
                          {job.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        </section>
      </>
    );
  }
}

export default Experience;
