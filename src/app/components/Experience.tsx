import * as React from "react";
import "../styles/Experience.css";
import FadeIn from "./FadeIn";
import JobList from "./JobList";

class Experience extends React.Component {
  render() {

    return (
      <>
        <section id="experience">
          <FadeIn>
            <h1 className="section">/experience</h1>
            <JobList />
          </FadeIn>
        </section>
      </>
    );
  }
}

export default Experience;
