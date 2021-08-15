import React, { useEffect } from 'react';
import HeaderComponent from '../component/Header/HeaderComponent';
import {useDispatch, useSelector} from 'react-redux';
import { BookingConfirm, ShowBooking } from '../redux/actions/bookingAction';
import {Link} from 'react-router-dom';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
export default function Bookings()
{
    const dispatch=useDispatch();
    const RideBooking=useSelector(state=> state.RideBooking)
    useEffect(()=>{
         dispatch(ShowBooking())
    },[])
    return (
        <>
        {
          console.log(RideBooking)
        }
        {
          // RideBooking.booking.map(i=>console.log(i))
        }
        <HeaderComponent>
         <div className="table-responsive">
           <table className="table table-bordered">
             <thead>
               <tr className="table-light">
                 <th>Name</th>
                 <th>Status</th>
                 <th>Action</th>
                 {/* <th>View Details</th> */}
               </tr>
             </thead>
             <tbody>
               {
                 RideBooking.booking.map((ride)=>(
                     <tr>
                       <td>{ride.riderName}</td>
                       <td>{ride.isConfirm ? <><span className="badge bg-success">Riding Start</span></>:<><span className="badge bg-warning text-dark">Riding Pending</span></>}</td>
                       <td><button onClick={()=>dispatch(BookingConfirm(ride._id,{isConfirm:"true"}))} style={{margin:"0 5px"}} className="btn btn-outline-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="Confirm Ride"><CheckIcon/></button>
                       <Link to={`/bookinginfo/${ride._id}`} style={{margin:"0 5px"}} className="btn btn-outline-primary btn-sm" data-bs-toggle="tooltip" data-bs-placement="top" title="view details"><VisibilityIcon/></Link></td>
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