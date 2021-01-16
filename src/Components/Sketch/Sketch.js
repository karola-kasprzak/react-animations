import React, { Component } from "react";
import Pixel from "./Pixel/Pixel";
import classes from "./Sketch.css";

class Sketch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isReset: false,
            isBlue: false,
            isGray: false,
            isGreen: true,
        };
    }

    generateRandomColor = (event) => {
        //generating a random color in a given color palette
        const blueScaleColors = `hsl(${Math.floor(
            Math.random() * 65 + 185
        )}, 100%, 70%)`;
        const greenScaleColors = `hsl(180, 50%, ${Math.floor(
            Math.random() * 100
        )}%)`;
        const grayScaleColors = `hsl(0, 0%, ${Math.floor(
            Math.random() * 100
        )}%)`;

        //depending on state a palette is chosen; default is green
        let chosenColors = greenScaleColors;
        if (this.state.isBlue) {
            chosenColors = blueScaleColors;
        } else if (this.state.isGray) {
            chosenColors = grayScaleColors;
        }

        //output to Tile component
        event.target.style.backgroundColor = chosenColors;
    };

    handleReset = () => {
        this.setState({ isReset: true });
        console.log(this.state);
    };

    handleBlueScale = () => {
        this.setState({ isBlue: true, isGray: false, isGreen: false });
        // console.log(this.state); **shows state before update in prev line???
    };

    handleGrayScale = () => {
        this.setState({ isBlue: false, isGray: true, isGreen: false });
        console.log(this.state);
    };

    render() {
        return (
            <div className="SketchPanel">
                <div className="ButtonPanel">
                    <button onClick={this.handleReset}>Reset</button>
                    <button onClick={this.handleGrayScale}>Gray Scale</button>
                    <button onClick={this.handleBlueScale}>Blue Scale</button>
                </div>
                <div className={classes.SketchContainer}>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                    <Pixel generate={this.generateRandomColor}></Pixel>
                </div>
            </div>
        );
    }
}

export default Sketch;
