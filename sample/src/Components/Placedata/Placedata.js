import { useState } from "react";
import  './Placedata.css';
function Placedata(){
    const [place,setPlace] = useState('Kozhikode')
    const [data,setData] = useState([])
    const placeData =(e) =>{
        setPlace(e.target.value)
    }
    const clickData =() =>{
        fetch(`https://api.postalpincode.in/postoffice/${place}`)
        .then((res) =>{
            return res.json;
        })
        .then((res) =>{
            setData(res[0].PostOffice);
        })
    }
    return(
        <div>
        <input type="text" onBlur={placeData} placeholder="place" />
        <button onClick={clickData}>Enter</button>
        <div className="grid-continer">
            {
            data && data.map((data) =>{
                <div className="grid-item">
                    return() Name : {data.Name}
                </div>
            })
            }
        </div>
        </div>
    );
}
export default Placedata;