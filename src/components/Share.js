import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";

class Share extends Component {
  //   var { joke, URL  } = this.props; //pass across the state
  render() {
    return (
              <span className="Demo__some-network">
          <FacebookShareButton
            url={this.props.URL}
            quote={this.props.joke}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={16} round />
          </FacebookShareButton>

          <EmailShareButton
            url={this.props.URL}
            subject={this.props.joke}
            body="body"
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={16} round />
          </EmailShareButton>
        </span>
    
    );
  }
}
export default Share;
