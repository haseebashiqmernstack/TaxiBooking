import React from 'react';
import HeaderComponent from '../component/Header/HeaderComponent';
import {Link} from 'react-router-dom';
import { useDebugValue } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { GetVehicles, VehicleActivate, VehicleDeactivate } from '../redux/actions/vehicleAction';
// import {CloseIcon,CheckIcon,VisibilityIcon} from '@material-ui/icons'
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
export default function Vehicle()
{

    const dispatch=useDispatch();
    const Vehicle=useSelector(state=>state.Vehicle);
useEffect(()=>{
dispatch(GetVehicles());
},[])
    return (
        <>
        <HeaderComponent>
           <div className="table-responsive">
               <table className="table table-bordered">
                   <thead>
                       <tr className="table-light">
                           <th colSpan="6">
                              <Link to={'/savevehicle'} className="btn btn-outline-primary">Add Vehicle</Link>
                           </th>
                       </tr>
                       <tr>
                           <th>V.Name</th>
                           <th>V.Type</th>
                           <th>V.Model</th>
                           <th>V.Number</th>
                           <th>Status</th>
                           <th>Action</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           Vehicle.vehicles.map((v)=>(
                               <>
                               <tr>
                                   <td>{v.vehicleName}</td>
                                   <td>{v.vehicleType}</td>
                                   <td>{v.vehicleModel}</td>
                                   <td>{v.vehicleNumber}</td>
                                   <td>{v.active ? <><span className="badge bg-success">Active</span></>:<><span className="badge bg-warning text-dark">pending</span></>}</td>
                       <td><button className="btn btn-outline-primary btn-sm" onClick={()=>dispatch(VehicleActivate(v._id,{active:"true"}))} style={{margin:"0 5px"}}><CheckIcon/></button>
                       <button className="btn btn-outline-danger btn-sm" onClick={()=>dispatch(VehicleDeactivate(v._id,{active:"false"}))} style={{margin:"0 5px"}}><CloseIcon/></button>
                       </td>
                               </tr>
                               </>
                           ))
                       }
                   </tbody>
               </table>
           </div>
        </HeaderComponent>
         
        </>
    )
}