import React from 'react';
import HeaderComponent from '../component/Header/HeaderComponent';
import {Link} from 'react-router-dom';
export default function Vehicle()
{
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
                       
                   </tbody>
               </table>
           </div>
        </HeaderComponent>
         
        </>
    )
}