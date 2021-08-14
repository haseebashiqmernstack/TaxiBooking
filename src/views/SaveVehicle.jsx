import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../component/Header/HeaderComponent';
import { RegisterVehicle } from '../redux/actions/vehicleAction';

export default function SaveVehicle()
{

    const [name,setName] = useState('');
    const [type,setType]=useState('');
    const [model,setModel]=useState('');
    const [number,setNumber]=useState('');

    const dispatch=useDispatch();
    const Vehicle=useSelector(state=>state.Vehicle)
    
    const submitdata=(e)=>{
        e.preventDefault();
        const vehicleData={
            vehicleName:name,
            vehicleType:type,
            vehicleModel:model,
            vehicleNumber:number
        };
        console.log(vehicleData);
dispatch(RegisterVehicle(vehicleData));
    }
    return (<>
 
          <HeaderComponent>

           <div className="container">
              
                   <form onSubmit={submitdata}>
                   <div className="row" style={{margin:"20px 0"}}>
                   <div className="col-md-6">
                       <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" placeholder="enter vehicle name"/>
                   </div>
                   <div className="col-md-6">
                   <input type="text" value={type} onChange={(e)=>setType(e.target.value)} className="form-control" placeholder="enter vehicle type"/>
                   </div>
                   </div>
                   <div className="row" style={{margin:"20px 0"}}>
                   <div className="col-md-6">
                   <input type="text" value={model} onChange={(e)=>setModel(e.target.value)} className="form-control" placeholder="enter vehicle model"/>
                   </div>
                   <div className="col-md-6">
                   <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} className="form-control" placeholder="enter vehicle number"/>
                   </div>
                   </div>
                   <div className="row" style={{margin:"20px 0"}}>
                   <div className="col-md-6">
                   <button type="submit" className="btn btn-outline-primary">Submit</button>
                   </div>
                   </div>
                   </form>
               
           </div>

          </HeaderComponent>

    </>)
}
