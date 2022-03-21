import React from 'react'
import { SideNav } from 'react-simple-sidenav'
import { Link } from 'react-router-dom'
export default function (props) {
  return (
    <div className='sidebar_container'>
      <SideNav
        showNav={props.showNav}
        onHideNav={props.hideNav}
        openfromRight
        navStyle={{
          background: '#fff',
          maxWidth: '250px',
      }}
      >
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/aboutUs'>About Us</Link> 
      </SideNav>
    </div>
  )
}
