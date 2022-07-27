import React from "react"
import "./card.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import profile from   "../../../../static/Oval.png"
import { RiDoubleQuotesL } from 'react-icons/ri';


function Card(props) {
  const {review} = props;
   const settings = {
     dots: true,
     infinite: true,
     slidesToShow: 2,
     slidesToScroll: 2,
     initialSlide: 0,
     autoplay: true,
     autoplaySpeed: 3000,
   }

  if (review.length > 0){
      return (
          <Slider {...settings} className="slide">
          {review.map((review,index)=>{
            console.log(review)
            return(
            <div className="constainer-card">
              <div className="data"  key={index.id}>
              <div className="top-circle-icon">
                <RiDoubleQuotesL />
              </div>
              <p>{review.Reviews}</p>
              <div className="coust-profile">
              <div className="img">
              <img src={profile} alt="profile" />
               </div>
               <div className="profile-card"> 
                <h2 className="name">{review.Name}</h2>
                <h2 className="company_name">{review.Company}</h2>
                </div>
                </div>
              </div>
           </div>
            )
          })}
          </Slider>
      )
  }
  
}

export default Card

