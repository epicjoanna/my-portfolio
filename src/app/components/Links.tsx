import React from "react";
import CodeIcon from '@mui/icons-material/Code';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';

interface LinksProps {
  githubLink: string;
  openLink: string;
}

class Links extends React.Component<LinksProps> {
  render() {
    return (
      <span className="links">
        <a href={this.props.githubLink}>
          <CodeIcon style={{
            fontSize: 40
          }}/>
        </a>
        <a href={this.props.openLink}>
          <OpenInNewRoundedIcon style={{
            fontSize: 35
          }} />
        </a>
      </span>
    );
  }
}

export default Links;
