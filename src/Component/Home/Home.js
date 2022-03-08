import React from 'react'
import './Home.css'
import image1 from '../../Assets/food9.png'
export default function Home() {
  return (
    <div className='home_container-parent'>
        <div className='home_container'>
            <div className='home-fontview-text'>
                <div className='home-text-header'>
                    Quality and <br/>
                    Healthy <span style={{color:'#ffd86c'}}>Food.</span>
                </div>
                <div className='home-text-subheader'>
                    Welcome to CHopChops <br/>
                    where we serve quality <br/>
                    and healthy foods.
                </div>
                <div className='home-button'>
                    <button className='explore-button'>
                        Explore Food Menu
                    </button>
                </div>
            </div>
            <div className='home-fontview-image'>
                <img src={image1} width='300px'/>
            </div>
        </div>
    </div>
  )
}
