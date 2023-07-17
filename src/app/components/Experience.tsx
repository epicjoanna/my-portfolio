import * as React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";

class Experience extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1",
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: any) {
    this.setState({
      activeKey: eventKey,
    });
  }

  render() {
    const prevExperience: Record<string, any> = {
      currentJob: {
        jobTitle: "Graduate Apprentice Software Engineer",
        date: "October 2022 - Present",
        company: "Smarter Grid Solutions",
        description:
          "Working as part of the UI modernisation team for Cirrus Flex, using React/Next.js",
      },
      education: {
        jobTitle: "Software Engineering (Graduate Apprenticeship) BSc",
        date: "October 2022 - Present",
        company: "University of Glasgow",
        description: "",
      },
    };

    return (
      <>
        <section id="experience">
        <FadeIn>
          <h1 className="section">/experience</h1>
          <div className="experience-content">
            {Object.keys(prevExperience).map((key, i) => (
              <div className="timeline">
                <div className="container right">
                  <p>
                    <b>{prevExperience[key]["jobTitle"]}</b>
                    <br />
                    <span className="date">{prevExperience[key]["date"]}</span>
                    <br />
                    <b>{prevExperience[key]["company"]}</b>
                    <br />
                    {prevExperience[key]["description"]}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </FadeIn>
        </section>
      </>
    );
  }
}

export default Experience;
