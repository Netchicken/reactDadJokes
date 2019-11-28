import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";

//https://www.npmjs.com/package/react-share

class Share extends Component {
  //  console.log( this.props.URL)
  render() {
    return (
      <span className="Demo__some-network">
        <FacebookShareButton
          quote={this.props.Joke + " " + this.props.URL}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <EmailShareButton
          body={
            this.props.Joke + "  Another awful Dad joke from " + this.props.URL
          }
          subject={"Another awful Dad Joke"}
          className="Demo__some-network__share-button"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </span>
    );
  }
}
export default Share;
