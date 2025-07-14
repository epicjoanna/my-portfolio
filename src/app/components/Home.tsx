import FileOpenIcon from '@mui/icons-material/FileOpen';
import Button from "@mui/material/Button";
import Typist from "react-typist";
import FadeIn from "./FadeIn";
import "react-typist/dist/Typist.css";
import "../styles/Home.css";
import { Fade } from "@mui/material";
// test
function Home() {
  return (
    <section id="home">
      <FadeIn>
        <div className="span-a">
        <div className="box" />
        <Typist startDelay={1000}>
          <h1>Joanna Jardine</h1>
        </Typist>
        <h2>Software Engineer</h2>
        <section className="button-section">
          <Button
            className="email-button"
            href="/Joanna_Jardine_Resume.pdf"
            variant="contained"
            size="large"
            disableElevation
            startIcon={<FileOpenIcon />}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my CV
          </Button>
        </section>
        </div>
      </FadeIn>
    </section>
  );
}

export default Home;
