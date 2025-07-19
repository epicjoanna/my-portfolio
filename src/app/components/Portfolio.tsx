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
        title: "monkeytype (morse code)",
        description: "added a funbox mode which allows you to practice typing in morse code.",
        repo: "https://github.com/monkeytypegame/monkeytype/pull/4451",
        demo: "https://monkeytype.com/",
        image:
          "https://imgur.com/StmvJBZ.png",
      },
      {
        id: 2,
        title: "FREEDOM!!!",
        description: "this year's entry for js13kgames, an endless runner based on the story of william wallace and the battle of stirling bridge.",
        repo: "https://github.com/js13kGames/FREEEDOOOM",
        demo: "https://js13kgames.com/games/freeedooom/index.html",
        image: "https://imgur.com/So6NNUv.png",
      },
      {
        id: 3,
        title: "project 3",
        description:
          "description",
        repo: "https://github.com/epicjoanna/nextjs-course",
        demo: "Demo",
        image:
          "https://imgur.com/R3B1d4O.png",
      },
      {
        id: 4,
        title: "project 4",
        description: "description",
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
              Check out what I've been working on {" "}
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
