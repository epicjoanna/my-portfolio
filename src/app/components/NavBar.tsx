import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from "@mui/icons-material/DarkMode";
import "../styles/NavBar.css";
import { AnimatePresence, motion } from "framer-motion";

interface NavBarProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const NavBar: React.FC<NavBarProps> = ({ toggleTheme, mode }) => {

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
            <Nav.Link onClick={toggleTheme} style={{ padding: 0 }}>
            <AnimatePresence mode="wait">
            {mode === "light" ? (
              <motion.div
                key="dark"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <DarkModeIcon style={{ fontSize: 32 }} />
              </motion.div>
            ) : (
              <motion.div
                key="light"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <LightModeIcon style={{ fontSize: 32 }} />
              </motion.div>
            )}
            </AnimatePresence>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }


export default NavBar;