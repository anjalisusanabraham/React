import { useState } from "react";
import './Place_Data.css';
function Place_Data(){
    const[place,setPlace] = useState('Kozhikode');
    const[data,setData] = useState([])
    const Chenge =(e) =>{
        setPlace(e.target.value)
    }
    const Click =() =>{
        fetch(`https://api.postalpincode.in/postoffice/${place}`)
        .then((res) => {
            return res.json();
        })
        .then((res) =>{
            setData(res[0].PostOffice)
        })
    } 
    return(
        <div>
            <input type="text" onBlur={Chenge}  placeholder="Place" />
            <button onClick={Click}>Enter</button>
<div className="grid-container" >
         
                {
              data && data.map((data) =>{
                return   <div className="grid-item" > Name : {data.Name}<br />
                BranchType : {data.BranchType}<br />
                DeliveryStatus : {data.DeliveryStatus}<br />
                Circle : {data.Circle}<br />
                District : {data.District}<br />
                Division : {data.Division}<br />
                Region : {data.Region}<br />
                State : {data.State}<br />
                Country : {data.Country}<br />
                Pincode : {data.Pincode}
                </div>
                
              })
                }
                
 </div>
        </div>
    );
}
export default Place_Data;