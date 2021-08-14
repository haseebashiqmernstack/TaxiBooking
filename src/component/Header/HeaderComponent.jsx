import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "./main.css";
export default function HeaderComponent(props){
    return (
        <div>
            <Navbar/>
          <div className="container">
              <div className="row">
                  <div className="side-bar">
                  <Sidebar/>
                  </div>
                  <div className="main-content">
                     {props.children}
                  </div>
              </div>
          </div>
         
        </div>
    )
}