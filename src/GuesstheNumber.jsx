import React, { useEffect, useState } from "react";


const GuesstheNumber = (props) => {
  
const [inputNumber, setInputNumber] = useState(null);
const [randomNumber, setRandomNumber] = useState();
const [message, setMessage] = useState("");
  
useEffect(() => {
    const num = Math.round(Math.random(100) * 20);
    setRandomNumber(num)
  }, []);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputNumber(value);
};
useEffect(() => {
    // check if input number matches the random number
    checkNumber();
  }, [inputNumber]);

const checkNumber = () => {
    if(!inputNumber){
        setMessage ("Please enter a number");
    }
    else if (inputNumber > randomNumber){
        setMessage("Guess Lower");
    }
    else if (inputNumber < randomNumber){
        setMessage("Guess Higher");
    }
    else {
        setMessage ("Congratulations you guessed it right!");
    }
}


return(
    <>
    <h1> Guess the Number between 1-20</h1>
    <br/>
    <input type="number"
    min = {0}
    max = {20}
    value ={inputNumber} 
    onChange={handleInputChange}/>
   <br/>
      <h3>{message}</h3>
    </>
)
};

export default GuesstheNumber;
