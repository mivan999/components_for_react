import React, {useState} from 'react';
import './App.css';
import Accordion from './Components/Accordion/Accordion';
import {Rating, RatingValueType} from './Components/Rating/Rating';
import UncontrolledOnOff from './Components/OnOff/UncontrolledOnOff';
import UncontrolledAccordion
    from './Components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './Components/Rating/UncontrolledRating';
import OnOff from './Components/OnOff/OnOff';


function App() {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const [on, setOn] = useState(true);
    return (
        <div className="App">
            <UncontrolledOnOff/>
            <OnOff on={on} onClick={setOn}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <Accordion title={'Menu1'} collapsed={collapsed}
                       onClick={setCollapsed}/>
            <UncontrolledAccordion title={'Menu2'}/>
            <UncontrolledRating/>
        </div>
    );
}

export default App;
