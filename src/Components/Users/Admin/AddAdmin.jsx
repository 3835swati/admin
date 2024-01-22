import React from 'react'
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom';
import './AddAdmin.css';

function AddAdmin() {
        return (
                <div>
                        <div style={{ width: '100%' }}>
                                <main style={{ width: '98%', margin: 'auto' }}>
                                        <div className='adminListDiv' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', margin: '10px' }}>
                                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '150px' }}>
                                                        <Link to='..' style={{ color: 'white' }}>
                                                                <GoArrowLeft style={{ width: '20px' }} />
                                                        </Link>

                                                        <h1 style={{ fontSize: '25px' }}>Add Admin</h1>
                                                </div>

                                                <button style={{ width: '60px', height: '30px' }}>Save</button>
                                        </div>
                                        <div>
                                                <div><h2 style={{ fontSize: '22px',paddingLeft: '20px' }}>Basic Information</h2></div>
                                                <form className="form">
                                                        <div className="form-group">
                                                                <label htmlFor="firstName">First Name</label>
                                                                <input type="text" id="firstName" name="firstName" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="lastName">Last Name</label>
                                                                <input type="text" id="lastName" name="lastName" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="middleName">Middle Name</label>
                                                                <input type="text" id="middleName" name="middleName" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="email">Email</label>
                                                                <input type="email" id="email" name="email" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="phoneNumber">Communication Phone Number</label>
                                                                <input type="tel" id="phoneNumber" name="phoneNumber" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="permanentPhoneNumber">Permanent Phone Number</label>
                                                                <input type="tel" id="permanentPhoneNumber" name="permanentPhoneNumber" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="password">Password</label>
                                                                <input type="password" id="password" name="password" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="status">Status</label>
                                                                <select id="status" name="status">
                                                                        <option value="active">Active</option>
                                                                        <option value="inactive">Inactive</option>
                                                                </select>
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="profileImage">Profile Image</label>
                                                                <input type="file" id="profileImage" name="profileImage" />
                                                        </div>
                                                        <div className="form-group">
                                                                <label htmlFor="project">Select Project</label>
                                                                <select id="project" name="project">
                                                                        <option value="project1">Project 1</option>
                                                                        <option value="project2">Project 2</option>
                                                                </select>
                                                        </div>
                                                </form>


                                        </div>
                                </main>
                        </div>
                </div>
        )
}

export default AddAdmin