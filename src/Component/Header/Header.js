import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/all'
export default function Header() {
    return (
        <div className='header_container-parent'>
            <div className='header_container'>
                <div className='header_logo'>
                    CHopChops
                </div>
                <div className='header_navbar'>
                    <Link to='/' style={{ color: '#ffd86c' }}>Home</Link>
                    <Link to='/'>Product</Link>
                    <Link to='/aboutUs'>About Us</Link>
                    <div className='header-cart-container'>
                        <Link to='/'>Cart</Link>
                        <div className='header-cart'>
                            <AiOutlineShoppingCart size='23px' color='#707070'/>
                        </div>
                    </div>
                    <button className='order-button'> Order Now</button>
                </div>
            </div>
        </div>
    )
}

// Started 3:40