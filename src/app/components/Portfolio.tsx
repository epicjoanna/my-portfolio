import React from "react";
import Carousel from "react-bootstrap/Carousel";
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
    "Item one": {
      title: "Item one",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg"
    },
    "Item two": {
      title: "Item two",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg"
    },
    "Item three": {
      title: "Item three",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg"
    },
    "Item four": {
      title: "Item four",
      description: "Description",
      tech: "Technologies",
      repo: "Repository",
      demo: "Demo",
      image: "https://i.kym-cdn.com/entries/icons/original/000/043/403/cover3.jpg"
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
          <div className="carousel-caption">
            <Carousel.Caption>
              <h3>{carouselProjects[key]["title"]}</h3>
              <p>
                {carouselProjects[key]["description"]}
                <p>
                  {carouselProjects[key]["tech"]}
                </p>
              </p>
              {carouselProjects[key]["repo"]}
              {carouselProjects[key]["demo"]}
            </Carousel.Caption>
          </div>
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
