import React from 'react';
import ReactDOM from 'react-dom/client';
// import Clicky from './exampleFunctional/Clicky';
// import CountDown from './exampleFunctional/CountDown';
import LoginForm from './exampleFunctional/LoginForm';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // let name = "Hannah";
  <React.StrictMode>
    {/* <CountDown startValue = "10" exampleProp ={name}/> */}
    <LoginForm/>

  </React.StrictMode>
);


