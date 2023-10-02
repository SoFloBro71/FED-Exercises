import { useState } from 'react';

const Clicky = () => {

    let [clicked, setClicked] = useState(0);

    const handleClick = () => {
        console.log("Clicked");

        setClicked(clicked + 1);
    }
    return (
        <div>
            <h1>Button has been clicked {clicked} times</h1>
            <button onClick={handleClick}>Click Me</button>

        </div>

    );

};

export default Clicky;