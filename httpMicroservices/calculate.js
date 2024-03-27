import React, { useState } from "react";

function AverageCalculator() {
 const [numbers, setNumbers] = useState([]);
 const [average, setAverage] = useState(0);

 const handleNumberChange = (e) => {
    const value = parseFloat(e.target.value);
    setNumbers([...numbers, value]);
 };

 const calculateAverage = () => {
    const total = numbers.reduce((acc, cur) => acc + cur, 0);
    const avg = total / numbers.length;
    setAverage(avg);
 };

 return (
    <div>
      <input type="number" onChange={handleNumberChange} />
      <button onClick={calculateAverage}>Add Number</button>
      <p>Average: {average.toFixed(2)}</p>
    </div>
 );
}

export default AverageCalculator;
