import { useState } from "react";

function Hello(){
    const [msg,setMsg] = useState('message')
    const btn = () =>{
        setMsg("Message chenged")
    }
    return(
<div>
    <p>{msg}</p>
    <button onClick={btn}>Click Me</button>
</div>
    );
}
export default Hello;