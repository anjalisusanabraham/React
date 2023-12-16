import { useState } from "react";

function Postaldata(){
    const [pin,setPin] = useState('673603')
    const [data,setData] = useState([])
    const handlePin = (e) =>{
        setPin(e.target.value)
    }
    const clickHandle = () =>{
        fetch(`https://api.postalpincode.in/pincode/${pin}`)
        .then((res) =>{
            return res.json();
        })
        .then((res) =>{
            setData(res[0].PostOffice)
        })
    }
    return(
        <div>
            <input type="text" onBlur={handlePin} placeholder="pincode" />
            <button onClick={clickHandle}>Enter</button>
            <ul>
                {
                data && data.map((data) => {
                    return <li>{data.Name}</li>
                })
            }
            </ul>
        </div>
    );
}
export default Postaldata;