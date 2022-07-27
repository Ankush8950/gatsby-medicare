import React from 'react'
import "./card.css"

function Card(props) {
  return (
    <>
       <div className="spec-cards">
          <div className="topcard"></div>
          <div className="btm-card-data">
              <div className="name">{props.name}</div>
              <div className="specialists">{props.specialist}</div>
          </div>
       </div> 
    </>
  )
}

export default Card