import React from "react";
import classes from "./Tile.css";

function Tile(props) {
    return <div className={classes.Tile} onMouseOver={props.generate}></div>;
}

export default Tile;
