import React, { useEffect } from 'react';
import HeaderComponent from '../component/Header/HeaderComponent';
import {useDispatch, useSelector} from 'react-redux';
import { ShowBooking, ShowBookingInfo } from '../redux/actions/bookingAction';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CheckIcon from '@material-ui/icons/Check';
import imgs from '../images/haseeb.jpeg';
export default function BookingInfo(props)
{
    const dispatch=useDispatch();
    const RideBooking=useSelector(state=> state.RideBooking)
    useEffect(()=>{
        //  dispatch(ShowBooking())
         const id=props.match.params.info;
         console.log(id)
         dispatch(ShowBookingInfo(id));
        
    },[])
    return (
        <>
        
        <HeaderComponent>
         <div className="table-responsive">
           <table className="table table-bordered">
            
             <tbody>
                 <tr className="table-light">
                     <td colSpan="4" className="text-center" style={{fontSize:"30px"}}>
                         Passenger information
                     </td>
                 </tr>
                 <tr>
                     <td colSpan="2">
                         <img src={imgs} style={{height:"150px",width:"150px",borderRadius:"20px"}}/>
                     </td>
                     <td><b>Status</b></td>
                     <td>{RideBooking.bookinginfo.isConfirm ? <span className="badge bg-success">Riding start</span> : <span className="badge bg-warning text-dark">pending</span>}</td>
                 </tr>
            
                        <tr>
                  <td><b>Client Name</b></td>
                  <td>{RideBooking.bookinginfo.riderName}</td>
                  <td><b>Booking Number</b></td>
                  <td>{RideBooking.bookinginfo.bookingNumber}</td>
              </tr>
              <tr>
                  <td><b>Email</b></td>
                  <td>{RideBooking.bookinginfo.email}</td>
                  <td><b>Phone</b></td>
                  <td>{RideBooking.bookinginfo.phone}</td>
              </tr>
              <tr>
                  <td><b>Airport</b></td>
                  <td>{RideBooking.bookinginfo.airport}</td>
                  <td><b>Passenger Strength</b></td>
                  <td>{RideBooking.bookinginfo.passengers}</td>
              </tr>
              <tr className="table-light">
                  <td colSpan="4" className="text-center" style={{fontSize:"30px"}}>Additional Services</td>
              </tr>
              <tr>
                  <td colSpan="4" className="text-center">
                      <b>Question:</b> {RideBooking.bookinginfo.champagne.question}
                      <b>Answer:</b> {RideBooking.bookinginfo.champagne.option}
                  </td>
              </tr>       
                       <tr>
                       <td colSpan="4" className="text-center">
                      <b>Question:</b> {RideBooking.bookinginfo.flowerBouquet.question}
                      <b>Answer:</b> {RideBooking.bookinginfo.flowerBouquet.option}
                  </td>
                           </tr> 
             </tbody>
           </table>
         </div>
        </HeaderComponent>
       
            </>
    )
}