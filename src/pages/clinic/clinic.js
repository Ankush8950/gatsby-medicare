import React from 'react'
import "../../styles/clinic.css"
import Card from './card/Card'
import clinic from "../clinic/clinicapi"

function Clinic() {
  return (
      <>
        <div className="clinic-page">
            <div className="clinic-data">
                <h2>Clinic With Innovative</h2>
                <p>We provide the most full medical services, so every person could<br/> heave the oppurtunity to receive qualitative medical help.</p>
                <button className='learn-more'>Learn-More</button>
            </div>
            <div className="clinic-images">
               {
                   clinic.map((val, index) => {
                       return <Card 
                       key={index}
                       img={val.img}
                       profession={val.profession}
                       />
                   })
               }
            </div>
        </div>
     </>
  )
}

export default Clinic