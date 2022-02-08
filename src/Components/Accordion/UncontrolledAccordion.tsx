import React, {useState} from 'react';

type AccordionTitleType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitleType) {
    return <h3 onClick={()=>{props.onClick()}}>--{props.title}--</h3>;
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


}

function UncontrolledAccordion(props: AccordionType) {
let [collapsed, setCollapsed]=useState(false)
    return (
        <div>
            <AccordionTitle title={props.title} onClick={()=>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

export default UncontrolledAccordion;