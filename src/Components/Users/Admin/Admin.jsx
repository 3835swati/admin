import './Admin.css';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";
import ShowAdmin from './ShowAdmin';
import AddAdmin from './AddAdmin';

const Admin = () => {
  
  return (
    <div style={{alignItems:'center',minWidth:'80%',margin:'10px'}}>
        <header style={{width:'100%'}}>
          <h1>Admin</h1>
        </header>
        <Routes>
          <Route path='/' element={<ShowAdmin/>}></Route>
          <Route path='/add' element={<AddAdmin/>}></Route>
        </Routes>
            
      </div>
    
    
  )
}

export default Admin;
