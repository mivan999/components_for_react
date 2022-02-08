import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from './Components/Accordion/UncontrolledAccordion';
import { UncontrolledRating } from './Components/Rating/UncontrolledRating';


function App() {
    return (
        <div className="App">
            <OnOff />

            <Rating value={4}/>

             <Accordion title={'Menu1'} collapsed={true}/>
            <UncontrolledAccordion title={'Menu2'} />
            <UncontrolledRating/>
        </div>
    );
}

export default App;
