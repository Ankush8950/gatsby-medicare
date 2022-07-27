import React, { useEffect, useState } from "react"
import "../../styles/customer.css"
import Card from "./card/card"
import axios from "axios"

function Customer() {
  const [review, setReview] = useState("")
  const url = "https://admin.tomedes.com/api/v1/get-reviews?page=1";

  useEffect(() => {
    getAllData()
  }, [])

  const getAllData = () => {
    axios
      .get(`${url}`)
      .then(responce => {
        const allInfo = responce.data.data
        console.log(allInfo)
        setReview(allInfo)
      })
      .catch(err => console.log(err))
  }
 
  return (
    <>
      <div className="customer-page">
        <h1>What Our Customers Say</h1>
        <div className="review-card">
            <Card review={review} />
        </div>
      </div>
    </>
  )
}

export default Customer
