import React from "react"
import { FaFacebookF } from "react-icons/fa"
import { AiOutlineGoogle } from "react-icons/ai"
import { AiOutlineTwitter } from "react-icons/ai"
import "../styles/Footer.css"
import { Link } from "gatsby"

function Footer() {
  return (
    <>
      <div className="footer-cont">
        <div className="footer-nav">
           <h2>Medi <span> Care+</span></h2>
          <div className="links">
              <Link className="link" to="/">
                Home
              </Link>
              <Link className="link" to="/about">
                About
              </Link>
              <Link className="link" to="/service">
                Service
              </Link>
              <Link className="link" to="/news">
                News
              </Link>
          </div>
        </div>
        <div className="footer-page">
          <div className="icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <AiOutlineGoogle />
            </div>
            <div className="icon">
              <AiOutlineTwitter />
            </div>
          </div>
          <h4>©2020 PodPayment - 2020</h4>
        </div>
      </div>
    </>
  )
}

export default Footer
