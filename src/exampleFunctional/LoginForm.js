import { useState } from "react";

const LoginForm  = () => {

    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Login by user ${username}`);
    };

    const handleChange = (e)=> {
        setUsername(e.target.value);
    };

    return(
        <>
            <form onSubmit = {handleSubmit}>
                <label>
                    Username:
                    <input type = "text" onChange = {handleChange} value = {username}/>
                </label>
                <input type = "submit" value = "Submit"/>
            </form>
            {username}

        </>
    );
};

export default LoginForm;