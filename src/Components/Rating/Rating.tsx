import React from "react";

type StartPropsType = {
    selected: boolean
    value:RatingValueType
    onClick:(value:RatingValueType)=>void
}

function Start(props: StartPropsType) {

   return <span onClick={()=>{props.onClick(props.value)}}>
       {props.selected ?<b>star </b>:"star "}</span>

}
export type RatingValueType=0 | 1 | 2 | 3 | 4 | 5
type RatingTypeProps = {
    value: RatingValueType
    onClick:(value:RatingValueType)=>void
}

export function Rating(props: RatingTypeProps) {
    return (
        <>
            <Start selected={props.value>0} onClick={props.onClick} value={1}/>
            <Start selected={props.value>1} onClick={props.onClick} value={2}/>
            <Start selected={props.value>2} onClick={props.onClick} value={3}/>
            <Start selected={props.value>3} onClick={props.onClick} value={4}/>
            <Start selected={props.value>4} onClick={props.onClick} value={5}/>
        </>
    );
}