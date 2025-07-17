import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from '@mui/icons-material/LightMode';
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="mailto:joannameijardine@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 32 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/epicjoanna" target="_blank">
                <GitHubIcon style={{ fontSize: 32 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/joannajardine/" target="_blank">
                <LinkedInIcon style={{ fontSize: 32 }}></LinkedInIcon>
              </Nav.Link>
            </Nav>
      <Nav className="sun-icon">
        <Nav.Link onClick={() => console.log("Toggle light mode")}>
          <LightModeIcon style={{ fontSize: 32 }} />
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;