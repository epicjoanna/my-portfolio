import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import '../styles/Home.css';

function Home() {
    return (
    <section id="home">
    <div className="box" />
      <Typist startDelay={1000}>
          <h1>
            Joanna Jardine
          </h1>
      </Typist>
      <h2>
        Software Engineer
      </h2>
    <section className="button-section">
    <h3>
      Have questions?
    </h3>
    <Button className="email-button" href="mailto:joannameijardine@gmail.com" variant="contained" size="large" disableElevation startIcon={<SendRoundedIcon/>}>
      Email me!
    </Button>
    </section>
    </section>
  );
  }
  
  export default Home;