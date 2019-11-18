import React, { Component } from "react";
import { getJokes } from "../jokeApi";
import { Card, CardText } from "reactstrap";


class JokePlay extends Component {
  constructor(props) {
    super(props);
    //make items array to hold staff initialized as empty
    this.state = {
      currentJoke: "",
      allJokes: [],
      isLoaded: false
    };
    this.newJoke = this.newJoke.bind(this);
  }

  componentDidMount() {
    this.loadJoke();
  }

  newJoke() {
    this.setState(() => ({
      isLoaded: false
    }));

    this.loadJoke();
  }

  loadJoke() {
    getJokes().then(j => {
      this.setState(() => ({
        allJokes: [...this.state.allJokes, j],
        currentJoke: j,
        isLoaded: true
      }));
    });
    console.log(this.state.allJokes);
  }

  render() {
    const { isLoaded } = this.state; //pass across the state

    if (!isLoaded) {
      return (
        <div className="container-fluid">
                  <div className="row joketext">
            <div className="col-md-auto mr-auto">
              Just wait, we are loading a joke ...
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-auto ">
              <button
                onClick={this.newJoke}
                className="buttonSubmit btn btn-primary"
              >
                New Dad Joke
              </button>
            </div>
            <div className="col-md-auto stopoverflow">
              <div className="row joketext"> {this.state.currentJoke}</div>
            </div>
          </div>
          <div className="row">
            {this.state.allJokes
              .sort((a, b) => a.index - b.index)
              .reverse()
              .map((item, index) => {
                return (
                  <div className="col col-md-3 col-sm-6  mx-auto " key={index}>
                    <Card className="cardBody">
                      <CardText className="conditions ">{item}</CardText>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      );
    }
  }
}

export default JokePlay;
