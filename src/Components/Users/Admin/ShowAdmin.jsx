import './Admin.css';
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css";


function ShowAdmin() {
        const [rowData, setRowData] = useState([
                { '#': 1, NAME: 'Vinod Jain','PERMANENT PHONE NUMBER': 9911234782, EMAIL: 'vinod.jain@nx-one.com', STATUS: 'Active'},
              ]);
              const [colDefs, setColDefs] = useState([
                { field: "#" },
                { field: "NAME" },
                { field: "PERMANENT PHONE NUMBER" },
                { field: "EMAIL" },
                { field: "STATUS"}
              ]);
            
  return (
        
        <div style={{width:'100%'}}>
        <main style={{width:'95%',margin:'auto'}}>
          <div className='adminListDiv' style={{display:'flex',flexDirection:'row',justifyContent:'space-between',margin:'10px'}}>
            <h1 style={{fontSize:'25px'}}>Admin List</h1>
            <div style={{width:'120px',display:'flex',justifyContent:'space-between'}}>
              <Link to='add'>
                <button style={{width:'40px',height:'30px'}}>Add</button>
              </Link>
              
              <button style={{width:'60px',height:'30px'}}>Filter</button>
            </div>
          </div>
          <div className="ag-theme-quartz tableDiv" style={{ height: 400 }}>
            <AgGridReact rowData={rowData} columnDefs={colDefs} />
          </div>
        </main>
        </div>
        
  )
}

export default ShowAdmin