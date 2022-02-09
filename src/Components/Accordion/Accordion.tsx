import React from "react";

export type AccordionTitleType = {
    title: string
    onClick:(collapsed:boolean)=>void

    collapsed:boolean
}

export function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={()=>{props.onClick(!props.collapsed)}}>{props.title}</h3>;
}

export function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
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

}

export function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.title} onClick={props.onClick} collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

// export default Accordion;export