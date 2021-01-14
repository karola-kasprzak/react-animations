import React from "react";
import classes from "./Pixel.css";

function Pixel(props) {
    return <div className={classes.Pixel} onMouseOver={props.generate}></div>;
}

export default Pixel;
