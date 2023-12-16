import { useState } from "react";

function Count() {

    var count = 0;
    var [msg, setMsg] = useState(count)
    var incBtn = () => {
        console.log(count += 1)
    }
    var decBtn = () => {
        console.log(count -= 1)
    }
    return (
        <div>
            <button onClick={incBtn}>Inc Btn</button>
            <button onClick={decBtn}>Dec Btn</button>
        </div>
    );
}
export default Count;