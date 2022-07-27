import React from 'react'
import "../styles/Header.css"

function Header() {
  return (
    <div className='header'>
        <div className="ovel">
            <div className="ovelchild"></div>
        </div>
        <div className="ovelcopy"></div>  
        <div className="container"> 
        <div className="cont-data"> 
        <h2>Welcome to MediCare+ Clinic</h2>
        <h1>Best Specialists</h1>
        <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
        <div className="btn-cont">
            <button className='btn' >Make an Appointment</button>
            <button className='btn-dp'>Departments</button>
        </div>
        </div>
        <div className="card"></div>
        </div>
    </div>
  )
}

export default Header