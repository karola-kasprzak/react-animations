import React, { Component } from "react";
import classes from "./App.css";
import Sketch from "./Components/Sketch/Sketch";
import Tiles from "./Components/Tiles/Tiles";

class App extends Component {
    state = {};

    render() {
        return (
            <div className={classes.App}>
                <h1>Hi, I'm a React App</h1>
                <Tiles />
                <Sketch />
            </div>
        );
    }
}

export default App;
