import React, { Component } from "react";
import { getJokes, loadJokesFile } from "../jokeApi";
import { Card, CardText } from "reactstrap";
import { GenerateRND } from "./FileProcessing";
import Share from "./Share";
class JokePlay extends Component {
  constructor(props) {
    super(props);
    //make items array to hold staff initialized as empty
    this.state = {
      currentJoke: "", //current joke shown
      allJokes: [], //a record of all the jokes loaded to user
      jokeFile: [], //a file of all 335 jokes
      isLoaded: false,
      isFileJokeNotAPI: true
    };
    this.newJoke = this.newJoke.bind(this);
  }

  componentDidMount() {
    this.loadJokeFile(); //load up all jokes from file
    this.loadAPIJoke(); //show the first joke from the api
  }
  //generate a new joke
  newJoke() {
    //select file or api
    this.state.isFileJokeNotAPI
      ? this.loadSingleJokeFromFile()
      : this.loadAPIJoke();

    this.setState(prevState => ({
      isFileJokeNotAPI: !prevState.isFileJokeNotAPI
    }));
    console.log("File  " + this.state.isFileJokeNotAPI);
  }
  //load up the joke file
  loadJokeFile() {
    loadJokesFile().then(j => {
      this.setState(
        () => ({
          jokeFile: j
        }),
        () => {
          //  this.WordGeneration(); //run when completed above
        }
      );
    });
  }

  loadSingleJokeFromFile() {
    const singleJoke = this.state.jokeFile[
      GenerateRND(this.state.jokeFile.length)
    ];
    this.setState(() => ({
      allJokes: [...this.state.allJokes, singleJoke], //add the joke to the history of jokes
      currentJoke: singleJoke,
      //  isFileJokeNotAPI: false,
      isLoaded: true
    }));
  }
  //load the API Joke
  loadAPIJoke() {
    //Get the API joke
    getJokes().then(j => {
      this.setState(() => ({
        allJokes: [...this.state.allJokes, j], //add the joke to the history of jokes
        currentJoke: j,
        //  isFileJokeNotAPI: true,
        isLoaded: true
      }));
    });
    // console.log(this.state.allJokes);
  }

  render() {
    console.log(window.location.href);
    const { isLoaded } = this.state; //pass across the state
    var URL = window.location.href;

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
            {this.state.allJokes.reverse().map((item, index) => {
              return (
                <div
                  className="col  col-12   col-sm-6  col-md-3 mx-auto "
                  key={index}
                >
                  <Card className="cardBody">
                    <CardText className="conditions ">
                      <Share Joke={item} URL={URL}></Share>
                      {item}
                    </CardText>
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
