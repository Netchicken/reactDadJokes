import React, { Component } from "react";
import {
  FacebookShareButton,
  EmailShareButton,
  FacebookIcon,
  EmailIcon
} from "react-share";

//https://www.npmjs.com/package/react-share
//https://github.com/nygardk/react-share/blob/master/demo/Demo.jsx
class Share extends Component {
  render() {
    const siteURL = this.props.URL;
    console.log("Share " + siteURL);
    return (
      <span className="Demo__some-network">
        <FacebookShareButton
          quote={this.props.Joke}
          url={siteURL}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <EmailShareButton
          body={
            this.props.Joke +
            " \r\n   \r\n" +
            "Another awful Dad joke from" +
            " \r\n "
          }
          subject={"Another awful Dad Joke"}
          className="Demo__some-network__share-button"
          url={siteURL}
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      </span>
    );
  }
}
export default Share;
