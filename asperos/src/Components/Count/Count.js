import { useState } from "react";


function Count(){
    
var count = 0
var [msg,setMsg] = useState(count)
var setCount = () =>{
    console.log(count  += 1)
    // console.log(count++)
}

var dec =() =>{
    console.log(count -= 1)
}
    return(
        <div>
        <button onClick={setCount}> Inc Click</button>
       
        <button onClick={dec}> Dec Click</button>
        </div>
    );
}
export default Count;