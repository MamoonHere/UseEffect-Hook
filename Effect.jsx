import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


/*
  Another use case of useEffect is when we want to perform a function on removal/componentdidunmount().
  It will do that before coponent is removed from the UI.  
*/

const Effect = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    

    /*useEffect(() => {      This will cause an infinite loop. It runs once at the start (initialisation/componentdidmount()). 
        setCount(count+2)    Then since we are causing a stateful data change inside it, it will again run. And again. And Again. 
    }  
    )*/
    
    useEffect(() => {        // Without dependencies, this runs once at the start when we npm start our program.
        console.log("Here"); // Whenever ANY stateful data CHANGEs, this will again run. Press button and see console.log()
        console.log(count)   // Not cause loop since we are not changing the value of count here. 
    })

    useEffect (() => {       // This will run only once on initialisation since we passed an empty array of dependencies. 
        console.log("This runs only once")  // No matter if stateful data changes, it will run only once. 
    }, [])

    useEffect(() => {        // Only runs when count2 values changes because that is in our dependency array. 
        console.log("This only prints when count 2 value changes");
    }, [count2])

    
    return (
        <>
        <h1>Count 1 Value: {count}</h1>
        <button onClick={() => {setCount(count+1)}}>Click</button>
        <br></br>
        <h1>Count 2 Value: {count2}</h1>
        <button onClick={() => {setCount2(count2+1)}}>Click</button>
        </>
    );
}
export default Effect
