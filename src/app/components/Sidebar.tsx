import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FadeIn from "./FadeIn";
import "../styles/Sidebar.css";
import React from "react";

class Sidebar extends React.Component {
  constructor(props: {} | Readonly<{}>) {
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
    const links = [
      <a href="#home">/home</a>,
      <a href="#about">/about-me</a>,
      <a href="#experience">/experience</a>,
      <a href="#portfolio">/portfolio</a>,
    ];

    const socialLinks = [
      <a href="mailto:joannameijardine@gmail.com">
        <EmailRoundedIcon className="tag" fontSize="large" />
      </a>,
      <a href="https://github.com/epicjoanna">
        <GitHubIcon className="tag" fontSize="large" />
      </a>,
      <a href="https://www.linkedin.com/in/joannajardine/">
        <LinkedInIcon className="tag" fontSize="large" />
      </a>,
    ];

    return (
      <>
        <nav id="nav">
          {links.map((link, i) => (
            <FadeIn delay={`${i + 1}00ms`}>
              <div>{link}</div>
            </FadeIn>
          ))}
          <FadeIn>
            <div className="sidebar-logos">{socialLinks}</div>
          </FadeIn>
        </nav>
      </>
    );
  }
}

export default Sidebar;
