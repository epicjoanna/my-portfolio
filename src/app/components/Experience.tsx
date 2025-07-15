import * as React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";

class Experience extends React.Component {
  render() {
    const prevExperience = [
      {
        id: 1,
        jobTitle: "Graduate Apprentice Software Engineer",
        date: "OCTOBER 2022 — PRESENT",
        company: "Smarter Grid Solutions",
        description:
          "Working full-time in the renewable energy sector, part of the UI modernisation team for Fleet DERMS software Cirrus Flex.",
        link: "https://www.smartergridsolutions.com/"
      },
      {
        id: 2,
        jobTitle: "Software Engineering (Graduate Apprenticeship) BSc",
        date: "OCTOBER 2022 — PRESENT",
        company: "University of Glasgow",
        description: "In my third year at university, building my workplace project.",
        link: "https://www.gla.ac.uk/undergraduate/degrees/softwareengineeringgraduateapprenticeship/"
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
                          <span className="date">{job.date}</span>
                          <br />
                          <span className="title">{job.jobTitle}</span> @{" "}
                          <a href={job.link}><span className="company">{job.company}</span></a>
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
