import React, { useEffect } from 'react';
import HeaderComponent from '../component/Header/HeaderComponent';
import{useDispatch, useSelector} from 'react-redux';
import { ShowPassenger } from '../redux/actions/passengerAction';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

export default function Passenger()
{
const dispatch=useDispatch();
const Passenger=useSelector(state=>state.Passenger);

useEffect(()=>{
dispatch(ShowPassenger())
},[])
    return (
        <>

            <HeaderComponent>
        {console.log(Passenger)}
                <div className="table-responsive">

                <table className="table table-bordered">
  <thead>
    <tr className="table-light">
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">username</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
 {
   Passenger.passenger.map((p)=>(
     <tr>
       <td>{p.fname}</td>
       <td>{p.lname}</td>
       <td>{p.username}</td>
       <td>{p.active ? <><span className="badge bg-success">Active</span></>:<><span className="badge bg-warning text-dark">pending</span></>}</td>
                       <td><button className="btn btn-outline-primary btn-sm" style={{margin:"0 5px"}}><CheckIcon/></button>
                       <button className="btn btn-outline-danger btn-sm" style={{margin:"0 5px"}}><CloseIcon/></button>
                       <Link className="btn btn-outline-primary btn-sm" style={{margin:"0 5px"}}><VisibilityIcon/></Link></td>
     </tr>
   ))
 }
  </tbody>
</table>
                </div>

           
            </HeaderComponent>
        </>
    )
}