import React from 'react';
import HW1 from './hw/1-simple';
import HW2 from './hw/2-input';
import HW3 from './hw/3-lazy';


export default function (){
    return (
        <div>
            <h2>Minmax simple</h2>
            <HW1 min={1} max={5}/>
            <h2>Minmax input</h2>
            <HW2 min={20} max={50}/>
            <h2>Lazy input</h2>
            <HW3 min={20} max={50}/>
        </div>
    )
}