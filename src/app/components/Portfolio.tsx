import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/Portfolio.css';


type Project = {
  title: string;
  description: string;
  tech: string;
  repo: string;
  demo: string;
  image: string;
}

class Portfolio extends React.Component {

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: any) {
    this.setState({
      activeKey: eventKey
    });
  }

  render() {

    const carouselProjects: Record<string, Project> = {
    "My Portfolio": {
      title: "my-portfolio",
      description: "my personal website: joannajardine.com",
      tech: "react/next.js",
      repo: "Repository",
      demo: "Demo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
    },
    "Next.js Course": {
      title: "nextjs-course",
      description: "my progress from the udemy course by Maximilian Schwarzmüller.",
      tech: "react/next.js",
      repo: "Repository",
      demo: "Demo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
    },
    "Item three": {
      title: "Item three",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
    },
    "Item four": {
      title: "Item four",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
    },
  };

  return (
    <section id="portfolio">
      <h1 className="section">/portfolio</h1>
      <div className="portfolio-content">
      <p>Check out more of my GitHub projects <a href="https://github.com/epicjoanna?tab=repositories">here</a>!</p>

      <div style={{ display: 'block', width: 1000 }}>
      <Carousel>

      {Object.keys(carouselProjects).map((key, i) => (
        <Carousel.Item interval={ 1500 }>
          <img
            className="d-block w-100"
            src={carouselProjects[key]["image"]}
            alt={key}
          />
            <Carousel.Caption>
            <h3>{carouselProjects[key]["title"]}</h3>
    <p>
        {carouselProjects[key]["description"]}
        <br/>
        {carouselProjects[key]["tech"]}
    </p>
    <p>
        {carouselProjects[key]["repo"]}
        <br/>
        {carouselProjects[key]["demo"]}
    </p>
            </Carousel.Caption>
        </Carousel.Item>
      ))}
      </Carousel>
    </div>
    </div>
    </section>
  );
  };
}

export default Portfolio;
