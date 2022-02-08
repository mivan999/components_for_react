import React, { useState } from "react";

type StartPropsType = {
    selected: boolean
    value:1|2|3|4|5
    setValue:(value:1|2|3|4|5)=>void
}

function Start(props: StartPropsType) {

    return <span onClick={()=>{props.setValue(props.value)}}>
        {props.selected?<b>star </b>: "star "}
    </span>

}

type RatingTypeProps = {

}

export function UncontrolledRating(props: RatingTypeProps) {
  let [value,setValue]= useState(0);

    return (
        <>
            <Start selected={value>0} setValue={setValue} value={1}/>
            <Start selected={value>1} setValue={setValue} value={2}/>
            <Start selected={value>2} setValue={setValue} value={3}/>
            <Start selected={value>3} setValue={setValue} value={4}/>
            <Start selected={value>4} setValue={setValue} value={5}/>
        </>
    );
}