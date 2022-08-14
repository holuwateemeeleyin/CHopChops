import React from 'react'
import './Home.css'
import HomeBottomview from './Home-bottomview'
import image1 from '../../Assets/food9.png'
import AboutUs from '../AboutUs/AboutUs'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Footer/Footer'
export default function Home(props) {
    const { food } = props
    // console.log(food);
    return (
        <div className='home_container-parent'>
            <div className='front-view'>
                <div className='home_container'>
                    <div className='home-fontview-text'>
                        <div className='home-text-header'>
                            Quality and <br />
                            Healthy <span style={{ color: '#e3b32d' }}>Food.</span>
                        </div>
                        <div className='home-text-subheader'>
                            Welcome to CHopChops <br />
                            where we serve quality <br />
                            and healthy foods.
                        </div>
                        <div className='home-button'>
                            <button className='explore-button'>
                                Explore Food Menu
                            </button>
                        </div>
                    </div>
                    <div className='home-fontview-image'>
                        <img src={image1} alt='food' />
                    </div>
                </div>
            </div>
            <HomeBottomview
                foodItems={food}
            />
            <AboutUs />
            <Testimonials />
            <Footer/>
        </div>
    )
}
