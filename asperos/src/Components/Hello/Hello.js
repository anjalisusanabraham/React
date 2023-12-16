import { useState } from "react";

function Hello(props){ 

    const name = "Anjali";
    const [msg,setMsg] = useState('No Message')
    const f1 = () =>{
        // console.log('Button Clicked')
        setMsg('Message Changed')
    } 

     return(
    <div>
        <h4>Welcome {name}.</h4>
        <h3>Hello World !</h3>
        <p>{msg}</p>
        <p>I got prop value {props.name}</p>
        <button onClick={f1}>click</button>
      
    </div>
    );
}

export default Hello;