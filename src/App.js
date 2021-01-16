import React, { Component } from "react";
import classes from "./App.css";
import Sketch from "./Components/Sketch/Sketch";
import Tiles from "./Components/Tiles/Tiles";

class App extends Component {
    state = {};

    render() {
        return (
            <div className={classes.App}>
                <h1>Animation Examples</h1>
                <h2>#1 Random Color Tiles</h2>
                <Tiles />
                <h2>#2 Etch-a-Sketch</h2>
                <Sketch />
            </div>
        );
    }
}

export default App;
