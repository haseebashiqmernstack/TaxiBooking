import React from 'react';
import { Drawer,Hidden } from '@material-ui/core';
import {Link} from 'react-router-dom';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import CommuteIcon from '@material-ui/icons/Commute';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
export default function Sidebar(){
    return (
      <div>
          <ul className="sideBarMenu">
              <li><Link to={'/'}><PeopleAltIcon/> Passengers</Link></li>
              <li><Link to={'/vehicle'}><CommuteIcon/> Vehicles</Link></li>
              <li><Link to={'/booking'}><AccessibilityIcon/> Bookings</Link></li>
          </ul>
      </div>
    )
}