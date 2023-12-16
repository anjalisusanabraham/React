import { useState } from "react"

function Hello(){
    const [msg,setMsg] = useState('No message')
    const btn = () =>{
              setMsg('Message chenged')
    }
    return(
        <div>
            <p>{msg}</p>
            <button onClick={btn}>Click</button>

        </div>
    );
}
export default Hello;