import React from "react"
import "../../styles/service.css"
import  servicedata  from "./serviceapi"
import Card from "../service/card/card"

function Service() {
  return (
    <div className="service-page">
      <div className="service-data">
        <h2>Our Services</h2>
        <p>
          We provide the most full medical services, so every person could{" "}
          <br />
          heave the oppurtunity to receive qualitative medical help.
        </p>
      </div>
      <div className="cards">
          {
              servicedata.map((val,index)=>{
                  return <Card
                  key={index}
                  img={val.img}
                  spacelistname={val.spacelistname}
                  readmore={val.readmore}
                  learnmore={val.learnmore}
                   />
              })
          }
      </div>
    </div>
  )
}

export default Service
