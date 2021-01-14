import React, { Component } from "react";
import Tile from "./Tile/Tile";
import classes from "./Tiles.css";

class Tiles extends Component {
    generateRandomColor(event) {
        let randomNum = Math.floor(Math.random() * 359);
        event.target.style.backgroundColor = `hsl(${randomNum},100%, 70%)`;
    }

    render() {
        return (
            <div className={classes.TilesContainer}>
                <div id="1">
                    <Tile generate={this.generateRandomColor} />
                </div>
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
                <Tile generate={this.generateRandomColor} />
            </div>
        );
    }
}

export default Tiles;
