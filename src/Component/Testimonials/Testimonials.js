import React from 'react'
import './Testimonials.css'
import Food from '../../Assets/food5.png'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BsArrowRight } from 'react-icons/bs'
export default function Testimonials() {
    return (
        <div className='testimonials_Container-parent'>
            <div className='testimonials_container'>
                <div className='testimonials-text'>
                    <div className='testimonials-text-header'>
                        Testimonials
                    </div>
                    <div className='testimonials-text-desc'>
                        <p>What our clients says</p>
                        <p>
                            "Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. <br />
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur.
                            Duis aute irure dolor in reprehenderit
                             in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            "
                        </p>
                    </div>
                </div>
                <div className='testimonials-image'>
                    <img src={Food} alt='food5' />
                </div>
            </div>
            <div className='testimonials-name-container'>
                <div className='testimonials-name'>
                    Jane doe
                </div>
                <div className='testimonials-symbols'>
                    <AiOutlineArrowLeft size={20} color='#707070'/>
                    <BsArrowRight color='#e3b32d' size={20}/>
                </div>
            </div>
        </div>
    )
}
