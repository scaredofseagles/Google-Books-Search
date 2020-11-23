import React from 'react'
import bannerimg from '../bannerimg.jpg'
import '../style.css'

function Banner(){
    return(
        <div className="card bg-light text-black" id="banner">
            <img src={bannerimg} className="card-img" alt="hero image" />
            <div className="card-img-overlay">
                <h1 className="card-title">(React) Google Books Search</h1>
                <h3 className="card-text">Search for and Save Books of Interest</h3>
            </div>
        </div>
    )
}

export default Banner