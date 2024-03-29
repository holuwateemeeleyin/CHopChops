import React from 'react'
import image from '../../Assets/food2.png'
import plate from '../../Assets/dinnerIcon.png'
import foodFace from '../../Assets/foodFace.png'
import delivery from '../../Assets/busDelivery.png'
import './AboutUs.css'

export default function AboutUs() {
    return (
        <div className='aboutUs_container-parent'>
            <div className='aboutUs_container'>
                <div className='aboutUs-frontView'>
                    <div className='aboutUs-frontView-image'>
                        <img src={image} alt='food'/>
                    </div>
                    <div className='aboutUs-frontView-text'>
                        <div className='aboutus-header'>About Us </div>
                        <div className='about-subTitle'>
                            Simple way of eating Quality & Healthy food.
                        </div>
                        <div className='aboutUs-desc'>
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                        </div>
                        <div className='home-button'>
                            <button className='explore-button'>
                                Explore Our Story
                            </button>
                        </div>
                    </div>
                </div>
                <div className='aboutUs_bottomView-container'>
                    <div className='aboutUs-bottomView-header'>
                        Why Choose Us
                    </div>
                    <div className='aboutUs-bottomView-symbols'>
                        <div className='symbols-container-parent'>
                            <div className='symbols-container-card' style={{backgroundColor:'#e3b32d'}}>
                                <img src={plate} alt='plate' />
                            </div>
                            <div className='symbols-header'>
                                Quality Food
                            </div>
                            <div className='symbols-desc'>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur.
                            </div>
                        </div>
                        <div className='symbols-container-parent'>
                            <div className='symbols-container-card'>
                                <img src={foodFace} alt='food'/>
                            </div>
                            <div className='symbols-header'>
                                Super Taste
                            </div>
                            <div className='symbols-desc'>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur.
                            </div>
                        </div>
                        <div className='symbols-container-parent'>
                            <div className='symbols-container-card'>
                                <img src={delivery} alt='delivery'/>
                            </div>
                            <div className='symbols-header'>
                                Fast Delivery
                            </div>
                            <div className='symbols-desc'>
                                Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu
                                fugiat nulla pariatur.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
