import React from "react";

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3>{props.title}</h3>;
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

type AccordionType = {
    title: string
    collapsed: boolean
}

function Accordion(props: AccordionType) {

    return (
        <div>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

export default Accordion;