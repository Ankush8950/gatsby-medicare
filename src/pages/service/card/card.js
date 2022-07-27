import React from "react"
import { Link } from "gatsby"
import "./card.css"

function Card(props) {
  return (
    <>
      <div className="ser-card">
        <img className="lungs" src={props.img} alt="shape" />
        <h3>{props.spacelistname}</h3>
        <div className="learn">
          <Link to="#" className="learn-more">
            {props.learnmore}
          </Link>
          {/* {props.readmore} */}
        </div>
      </div>
    </>
  )
}

export default Card
