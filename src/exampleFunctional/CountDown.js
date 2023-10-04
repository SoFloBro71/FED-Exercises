import { useState, useEffect } from "react";


const CountDown = (props) => {
// return acts the same as a render method
    const [count, setCount] = useState(props.startValue);

    let countID;

    // DEPECDANCY LIST = IF A VARIABLE CHANGES THEN RUN ANOTHER SPECIFIED FUNCTION
    useEffect(() => {

    let countID = setInterval(() => {
            setCount(count - 1);
        }, 1000);

        // COMPONENT WILL UNMOUNT

        return () => clearTimeout(countID);

    }, [count]);

    if(count > 0){
        return <h2>Time Remaining: {count} seconds</h2>
    }
    else{
        clearInterval(countID);
        return <h2>Times Up!</h2>
    };


};

export default CountDown;