import React from "react";
import Carousel from "react-bootstrap/Carousel";
import GitHubIcon from "@mui/icons-material/GitHub";
import Links from "./Links";
import FadeIn from "./FadeIn";
import "../styles/Portfolio.css";
import { Fade } from "@mui/material";

class Portfolio extends React.Component {

  render() {
    const carouselProjects = [
      {
        id: 1,
        title: "my-portfolio",
        description: "my personal website: joannajardine.com",
        repo: "https://github.com/epicjoanna/my-portfolio",
        demo: "https://www.joannajardine.com",
        image: "https://imgur.com/MYWFPPW.png",
      },
      {
        id: 2,
        title: "nextjs-course",
        description:
          "my progress from the udemy course by Maximilian Schwarzmüller.",
        repo: "https://github.com/epicjoanna/nextjs-course",
        demo: "Demo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
      },
      {
        id: 3,
        title: "Item three",
        description: "Description",
        repo: "Repository",
        demo: "Demo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
      },
      {
        id: 4,
        title: "Item four",
        description: "Description",
        repo: "Repository",
        demo: "Demo",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
      },
    ];

    return (
      <section id="portfolio">
        <FadeIn>
          <h1 className="section">/portfolio</h1>
          <div className="portfolio-content">
            <p>
              Check out more of my GitHub projects{" "}
              <a href="https://github.com/epicjoanna?tab=repositories">here</a>!
            </p>

            <div style={{ display: "block", width: 1000 }}>
              <Carousel>
                {carouselProjects.map(function (item) {
                  return (
                    <Carousel.Item interval={1500}>
                      <img className="d-block w-100" src={item.image} />
                      <Carousel.Caption>
                        <h3>{item.title}</h3>
                        <p>
                          {item.description}
                          <br />
                          <Links
                            githubLink={item.repo}
                            openLink={item.demo}
                          ></Links>
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </FadeIn>
      </section>
    );
  }
}

export default Portfolio;
