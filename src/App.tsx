import React from 'react';
import './App.css';
// import Accordion from "./Components/Accordion/Accordion";
// import {Rating} from "./Components/Rating/Rating";
import OnOff from "./Components/OnOff/OnOff";


function App() {
    return (
        <div className="App">
            <OnOff on={true}/>
            <OnOff on={false}/>
            <OnOff on={false}/>
            {/*<Rating value={4}/>
            <Accordion title={'Menu1'} collapsed={true}/>
            <Accordion title={'Menu2'} collapsed={false}/>*/}
        </div>
    );
}

export default App;
