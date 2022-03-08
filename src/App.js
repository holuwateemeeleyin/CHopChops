import React from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import HomeBottomview from './Component/Home/Home-bottomview'
const App = () => {
  return (
    <div className='app_container'>
      <Header/>
      <Home/>
      <HomeBottomview/>
    </div>
  )
}

export default App