import SendRoundedIcon from '@mui/icons-material/SendRounded';
import Button from '@mui/material/Button';
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import '../styles/Home.css';


function Home() {
    return <div id="home">
    <div id="box" />
      <Typist startDelay={1000} cursor={{ hideWhenDone: false }}>
          <h1>
            Joanna Jardine
          </h1>
      </Typist>
    <h2>
  Software Engineer
    </h2>
    <div style={{ margin: '40px 0px 0px 0px' }}>
    <h3>Have questions?</h3>
    <Button id="emailbutton" color="error" variant="contained" size="large" disableElevation startIcon={<SendRoundedIcon/>}>
        Email me!
      </Button>
      </div>
  </div>;
  }
  
  export default Home;