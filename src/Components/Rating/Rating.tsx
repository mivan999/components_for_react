import React from "react";

type StartPropsType = {
    selected: boolean
}

function Start(props: StartPropsType) {

    if (props.selected ) return <span><b>star </b></span>
    else return <span>star </span>

}

type RatingTypeProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingTypeProps) {
    return (
        <>
            <Start selected={props.value>0}/>
            <Start selected={props.value>1}/>
            <Start selected={props.value>2}/>
            <Start selected={props.value>3}/>
            <Start selected={props.value>4}/>
        </>
    );
}