import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import axios from "axios";

import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      message: ""
    };
    this.assembleVillage = this.assembleVillage.bind(this);
  }

  componentDidMount() {
    this.assembleVillage();
  }

  assembleVillage() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {this.setState({ smurfs: res.data, message: "New Blah blah" });
      })
      .catch(err => console.log(err));
  }

  addSmurf = (smurfs) => {
    this.setState({
      smurfs: smurfs
    });
  }


  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs);
    return (
      <div className="App">
        <SmurfForm />
        <Smurfs smurfs={this.state.smurfs}/>
      </div>
    );
  }
}

export default App;
