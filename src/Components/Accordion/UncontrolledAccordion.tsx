import React, {useState} from 'react';

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

}

function UncontrolledAccordion(props: AccordionType) {
let [collapsed, setCollapsed]=useState(false)
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <button onClick={()=>{setCollapsed(!collapsed)}}>TOGGLE</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}

export default UncontrolledAccordion;