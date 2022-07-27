import React from 'react'
import "../../styles/news.css"

function News() {
  return (
    <>
        <div className="news-page">
        <div className="circle-news">
            <div className="circle"></div>
        </div>
            <div className="container-news">
                <h1>Subscribe to Newsletter</h1>
                <p>We have a wide experience in experience design and strategy,</p>
                <form className='form' >
                    <input type="text" placeholder='Enter your email address'/>
                    <button>Send Now</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default News