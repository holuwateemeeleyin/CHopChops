import React from 'react'
import './Footer.css'
import { AiOutlineTwitter} from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
export default function Footer() {

  return (
    <div className='footer_container-parent'>
        <div className='footer-container'>
          <div className='chopchops'>
            <div className='chopchops-text'>
              ChopChops
            </div>
            <div className='chopchops-social'>
              <AiOutlineTwitter />
              <FaFacebookF size={12}/>
              <BsInstagram/>
            </div>
          </div>
          <div className='services'>
            <div className='service-header'>
              Our Services
            </div>
            <div className='service-menu'>
              Menu
            </div>
          </div>
          <div className='about'>
            <div className='about-header'>
              About
            </div>
            <div className='about-list'>
              Testimony
            </div>
            <div className='about-list'>
              FAQs
            </div>
            <div className='about-list'>
              Blog
            </div>
          </div>
          <div className='subscribe-container'>
            <div className='subscribe-box'>
              subscribe to our Newsletter
              <div>
                <input
                  className='subscribe-input'
                />
                <label className='searchbox'>Submit</label>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
