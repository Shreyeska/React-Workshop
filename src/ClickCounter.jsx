import React, { useState } from "react";

const ClickCounter = (props) => {
    const [count, setCount]= useState(0);
   
    const increment = () => {
        setCount (count + 1);
    };

    const decrement = () => {
        setCount (count - 2);
    };
    const handleClick = (step) => {
        setCount (count + step);
    };
    
    return(
        <>
        <h1> Click Counter</h1>
        <h2>Count: {count}</h2>
        <button onClick={() => handleClick(1)}>Click to increase by 1</button>
        <button onClick={() => handleClick(-2)}>Click to decrease by 2</button>
        </>
    ); 
};

ClickCounter.propTypes = {};

export default ClickCounter;
