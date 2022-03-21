import React from 'react'
import { AiOutlineMenuFold } from 'react-icons/ai';
import Sidebar from './Sidebar/Sidebar';
import './HeaderMobile.css'
export default function HeaderMobile(props) {
  // console.log(props);
  return (
    <div className='headerMobile_container_parent'>
      <div className='headerMobile_container'>
        <div className='logoMobile'>
          CHopChops
        </div>
        <div className='navbar'>
          <AiOutlineMenuFold
            onClick={props.openNav}
            size={25}
            cursor='pointer'
            color='#707070'
          />
          <Sidebar
            {...props}
          />
        </div>
      </div>
    </div>
  )
}
