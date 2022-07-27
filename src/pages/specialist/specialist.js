import React from 'react'
import "../../styles/specialist.css"
import Card from './card/card'
import specialists from "./specialistapi"

function Specialist() {
  return (
    <>
        <div className="specialist-page">
        <div className="rightcircle">
            <div className="rightsmallcircle"></div>
        </div>
            <div className="specialist-data">
                <h1>We Have The Best Specialist</h1>
                <p>We have a wide experience in experience design and strategy, <br/>with locally-rooted knowledge.</p>
            </div>
            <div className="dr-specialist">
                {
                    specialists.map((val,index)=>{
                        return <Card 
                            key={index}
                            name={val.name}
                            specialist={val.specialist}
                        />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default Specialist