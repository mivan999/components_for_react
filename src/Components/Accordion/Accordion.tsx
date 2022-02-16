import React from "react";

export type AccordionTitleType = {
    title: string
    onClick:(collapsed:boolean)=>void
    collapsed:boolean

}

export function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>;
}
type AccordionBodyType={
    items:string[]
}
export function AccordionBody(props:AccordionBodyType) {
    return (
        <ul>
            {props.items.map(i=><li>{i}</li>)}
        </ul>
    );
}

export type AccordionType = {
    title: string
    collapsed: boolean
    /**
     * Collapsed uncollapsed
     */
    onClick:(collapsed:boolean)=>void
    items:string[]

}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle
                title={props.title}
                onClick={props.onClick}
                collapsed={props.collapsed}
                />
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )

}

// export default Accordion;export