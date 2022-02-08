import React, { useState } from "react";

type StartPropsType = {
    selected: boolean
}

function Start(props: StartPropsType) {

    return <span>{props.selected?<b>star </b>: "star "}</span>

}

type RatingTypeProps = {

}

export function UncontrolledRating(props: RatingTypeProps) {
  let [value,setValue]= useState(0);

    return (
        <>
            <Start selected={value>0}/><button onClick={()=>{setValue(1)}}>1</button>
            <Start selected={value>1}/><button onClick={()=>{setValue(2)}}>2</button>
            <Start selected={value>2}/><button onClick={()=>{setValue(3)}}>3</button>
            <Start selected={value>3}/><button onClick={()=>{setValue(4)}}>4</button>
            <Start selected={value>4}/><button onClick={()=>{setValue(5)}}>5</button>
        </>
    );
}