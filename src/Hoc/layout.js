import React, { useState }from 'react'
import Header from '../Component/Header/Header'
import HeaderMobile from '../Component/Header/HeaderMobile'
export default function Layout(props) {
    const [showNav, setShowNav ] = useState(false)
    const ontoggleNav =(action)=> {
        setShowNav(action)
      }
    
  return (
    <div>
        <Header/>
        <HeaderMobile
            showNav ={showNav}
            openNav={()=>ontoggleNav(true)}
            hideNav={()=>ontoggleNav(false)}
        />
        <div>
            {props.children}
        </div>
    </div>
  )
}
