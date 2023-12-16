import { useState } from "react";

function Postal_Data(){
//    var personalData =[ 
    
//     // {'name':'Anjali','age':'20'},{'name' :'Vinsha','age':'20'}
    
    
//         {
//             "Message": "Number of pincode(s) found:7",
//             "Status": "Success",
//             "PostOffice": [
//                 {
//                     "Name": "Anakampoyil",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Muthappan Puzha",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Ponnamkayam",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Pulluram Para",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Punnakkal",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Thambalamanna",
//                     "Description": null,
//                     "BranchType": "Branch Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 },
//                 {
//                     "Name": "Tiruvambadi",
//                     "Description": null,
//                     "BranchType": "Sub Post Office",
//                     "DeliveryStatus": "Delivery",
//                     "Circle": "Kerala",
//                     "District": "Kozhikode",
//                     "Division": "Calicut",
//                     "Region": "Calicut",
//                     "Block": "Kozhikode",
//                     "State": "Kerala",
//                     "Country": "India",
//                     "Pincode": "673603"
//                 }
//             ]
//         }
//     ]

const[data,setData] = useState([])
const [pin,setPin] = useState('673603');

const clickHandle =() =>{
    fetch(`https://api.postalpincode.in/pincode/${pin}`)
    .then((res) =>{
        return res.json();
    })
    .then((res) =>{
        setData(res[0].PostOffice)
        // console.log(res[0].PostOffice)
    })
    // console.log('you clicked button');
}
const handlePin = (e) =>{
    // console.log(e.target.value);
    setPin(e.target.value);
}

    return(
        <div>
            {/* <h1>{personalData.name}</h1> */}
{/* <h1>{personalData[1].name}{personalData[1].age}</h1> */}
{/* <h1>{personalData.length}</h1> */}
{/* <h1>{personalData[0].PostOffice[4].Name}</h1>
<h1>{personalData[0].PostOffice[1].Name}</h1>
<h1>{personalData[0].PostOffice[2].Block}</h1>
<h1>{personalData[0].PostOffice[3].Pincode}</h1> */}
<input type="text" onBlur={handlePin} placeholder="pincode"/>
<button onClick={clickHandle}>Enter</button>
<ul>
    {
        data && data.map((data) =>{
            return <li>{data.Name}</li>
        })
    }
</ul>
{/* <p>{pin}</p> */}

</div>
    );
}
export default Postal_Data;