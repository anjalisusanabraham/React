import { useState } from "react";

function Header(props){
    const name = 'Anjali'
    const [msg,setMsg] = useState('No Message')
    const click = () =>{
        // console.log('Button clicked')
        setMsg('Message is chenged')
    }
    return(
        <div>
            <h1>Hello {name}</h1>
            <h2>Wellcome {props.fname}{' '}{props.lname}</h2>
            <p>{msg}</p>
            <button onClick={click}>Click</button>
        </div>
    );
}
export default Header;