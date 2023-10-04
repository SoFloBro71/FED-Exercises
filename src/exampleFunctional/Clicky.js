import { useState } from 'react';

const Clicky = () => {
    let [clicked, setClicked] = useState(0);

    const handleClick = () => {
        setClicked(clicked + 1);
    }
    
    const reverseClick = () => {
        setClicked(clicked - 1);
    }

    return (
        <div>
            <h1>Button has been clicked {clicked} times.</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={reverseClick}>Reverse me</button>

{/* ALTERNATIVE WAY OF DOING IT WITH ONE FUNCTION */}
            {/* <button onClick={() => setClicked(clicked + 1)}>Reverse me</button> */}
            {/* <button onClick={() => setClicked(clicked - 1)}>Reverse me</button> */}

        </div>
    );
};

export default Clicky;