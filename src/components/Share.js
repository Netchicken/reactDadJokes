import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";

class Share extends Component {
  //  console.log( this.props.URL)
  render() {
    return (
      <span className="Demo__some-network">
        <FacebookShareButton
          quote={this.props.Joke + " " + this.props.URL}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={16} round />
        </FacebookShareButton>

        <EmailShareButton
          body={"Another awful Dad joke from " + this.props.URL}
          subject={this.props.Joke}
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={16} round />
        </EmailShareButton>
      </span>
    );
  }
}
export default Share;
