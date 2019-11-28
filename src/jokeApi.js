//https://github.com/JOThurgood/modernReactBootcamp/tree/master/19-dad-jokes-app/dad-jokes/public
import jokes from "../src/Assets/DadJokesJson.json";
import axios from "axios";

const JokeUri = "https://icanhazdadjoke.com/";

export async function handleResponse(response) {
  if (response.ok) {
    return response.text();
  }
  if (response.status === 400) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// In a real app, would likely call an error logging service.
// function handleError(error) {
//   console.log("Joke API call failed. " + error);
//   throw error;
// }
//https://kapeli.com/cheat_sheets/Axios.docset/Contents/Resources/Documents/index

export async function getJokes() {
  console.log("Getting a joke ..... ");
  let res =  await axios
    .get(JokeUri, {
      headers: { Accept: "text/plain" }
    })
   console.log(res.data);
 return await res.data;
}
    
    // .then(function(response) {
    //   console.log("Logging response  " + response.data);

    //   returnJoke = response.data;

    //   console.log("returnJoke  " + returnJoke);
    //  // return returnJoke;
    // })
    // .catch(function(error) {
    //   console.log("logging error " + error);
    //   return error;
    // });
 
// import React, { Component } from "react";


export async function loadJokesFile() {
  return await jokes; //JSON.parse(dict);
}