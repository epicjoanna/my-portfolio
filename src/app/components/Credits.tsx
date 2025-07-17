import React from "react";
import "../styles/Credits.css";

// Define the state type
interface CreditsState {
  expanded: boolean;
  activeKey: string;
}

class Credits extends React.Component<{}, CreditsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey: string) {
    this.setState({ activeKey: eventKey });
  }

  render() {
    return (
        <div id="credits">
          <div className="ending-credits">
            <div>Built and designed by Joanna Jardine.</div>
            <div>All rights reserved. ©</div>
          </div>
        </div>
    );
  }
}

export default Credits;
