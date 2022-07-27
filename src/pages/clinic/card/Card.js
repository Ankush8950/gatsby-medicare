import React from 'react'
import "./card.css"

function Card(props) {  
  return (
    <>
        <div className="clinic-card">
            <img src={props.img} alt="doctor" />
            <h3 className='profession'> {props.profession}</h3>
        </div>
    </>
  )
}

export default Card