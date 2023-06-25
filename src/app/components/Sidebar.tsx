import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import '../styles/Sidebar.css'

function Sidebar() {

  const links = [
    <a href="#home">/home</a>,
    <a href="#about">/about-me</a>,
    <a href="#experience">/experience</a>,
    <a href="#portfolio">/portfolio</a>
  ];

  return (
    <div>
      <div id="nav">
      {links.map((link, i) => (
      <div>{link}</div>
      ))}
      </div>
      <div className="sidebarLogos">
      <a href="mailto:joannameijardine@gmail.com">
        <EmailRoundedIcon className="tag" fontSize="large"/>
      </a>
      <a href="https://github.com/epicjoanna">
        <GitHubIcon className="tag" fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/joannajardine/">
        <LinkedInIcon className="tag" fontSize="large" />
      </a>
      </div>
    </div>
  );
}

export default Sidebar;
