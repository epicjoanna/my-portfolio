import { Fade } from 'react-bootstrap';
import '../styles/About.css';
import FadeIn from './FadeIn';

function About() {

  const aboutDescription = (
    <p>
      I'm a software engineer based in Glasgow, Scotland.
      Interested in full-stack development, I regularly build and contribute to projects outside of work. 
      I am currently working as a <b>Software Developer</b> at
      <a href="https://www.smartergridsolutions.com/"> Smarter Grid Solutions</a>, while doing my <b> 
        Graduate Apprenticeship Bachelor's of Science </b> degree for <b>Software Engineering </b> at the {" "}
      <a href="https://www.gla.ac.uk/explore/">University of Glasgow</a>.
    </p>
  );

  const personalInterests = (
    <p>I'm a hobby collector - I enjoy all-things video games, video editing, content creation, travelling, art and graphic design!</p>
  )

  const graduateApprenticeship = (
    <p>You can learn more about the Graduate Apprenticeship <a href="https://www.gla.ac.uk/undergraduate/degrees/softwareengineeringgraduateapprenticeship/">here</a>.</p>
  )

  return (
  <section id="about">
    <FadeIn>
    <h1 className="section">
      /about-me
    </h1>
    <div id="about-description">
      { aboutDescription }
      { personalInterests }
      <br />
      { graduateApprenticeship }
    </div>
    </FadeIn>
  </section>
    );
  }
  
  export default About;