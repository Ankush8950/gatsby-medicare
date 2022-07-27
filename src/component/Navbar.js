import React from "react"
import { Link } from "gatsby"
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="nav">
      <h2>Medi <span> Care+</span></h2>
      <div className="links">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/">About</Link>
      <Link className="link" to="/service/service">Service</Link>
      <Link className="link" to="/news/news">News</Link>
      <Link className="contact-btn" to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
