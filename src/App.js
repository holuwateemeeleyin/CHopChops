import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Component/Home/Home'
import Layout from './Hoc/layout'
import AboutUs from './Component/AboutUs/AboutUs'

const App = () => {
  const [food, setFood ] = useState([
    {
      "id": "1",
      "image": "Images/food1.png",
      "food_name": "French Toast",
      "isRating": false,
      "rating": "4.5",
      "price": "$15.67"
    },
    {
      "id": "2",
      "image": "Images/food10b.png",
      "food_name": "Jollof Rice",
      "isRating": false,
      "rating": "5.5",
      "price": "$15.67"
    },
    {
      "id": "3",
      "image": "Images/food12.png",
      "food_name": "Egusi Soup",
      "isRating": false,
      "rating": "3.5",
      "price": "$15.67"
    },
    {
      "id": "4",
      "image": "Images/food7.png",
      "food_name": "Egg Sauce",
      "isRating": false,
      "rating": "2.5",
      "price": "$15.67"
    },
    {
      "id": "5",
      "image": "Images/food1.png",
      "food_name": "French Toast",
      "isRating": false,
      "rating": "4.5",
      "price": "$15.67"
    },
    {
      "id": "6",
      "image": "Images/food10b.png",
      "food_name": "Jollof Rice",
      "isRating": false,
      "rating": "5.5",
      "price": "$15.67"
    },
    {
      "id": "7",
      "image": "Images/food12.png",
      "food_name": "Egusi Soup",
      "isRating": false,
      "rating": "3.5",
      "price": "$15.67"
    },
    {
      "id": "8",
      "image": "Images/food7.png",
      "food_name": "Egg Sauce",
      "isRating": false,
      "rating": "2.5",
      "price": "$15.67"
    },
    {
      "id": "1",
      "image": "Images/food1.png",
      "food_name": "French Toast",
      "isRating": false,
      "rating": "4.5",
      "price": "$15.67"
    },
    {
      "id": "2",
      "image": "Images/food10b.png",
      "food_name": "Jollof Rice",
      "isRating": false,
      "rating": "5.5",
      "price": "$15.67"
    },
    {
      "id": "3",
      "image": "Images/food12.png",
      "food_name": "Egusi Soup",
      "isRating": false,
      "rating": "3.5",
      "price": "$15.67"
    },
    {
      "id": "4",
      "image": "Images/food7.png",
      "food_name": "Egg Sauce",
      "isRating": false,
      "rating": "2.5",
      "price": "$15.67"
    },
    {
      "id": "5",
      "image": "Images/food1.png",
      "food_name": "French Toast",
      "isRating": false,
      "rating": "4.5",
      "price": "$15.67"
    },
    {
      "id": "6",
      "image": "Images/food10b.png",
      "food_name": "Jollof Rice",
      "isRating": false,
      "rating": "5.5",
      "price": "$15.67"
    },
    {
      "id": "7",
      "image": "Images/food12.png",
      "food_name": "Egusi Soup",
      "isRating": false,
      "rating": "3.5",
      "price": "$15.67"
    },
    {
      "id": "8",
      "image": "Images/food7.png",
      "food_name": "Egg Sauce",
      "isRating": false,
      "rating": "2.5",
      "price": "$15.67"
    }
  ])

  // console.log(food);
  return (
    <div className='app_container'>
      <Layout>
        <Routes>
          <Route path='/' 
          element={<Home
          food={food}
          />}/>
          <Route exact path='/aboutUs' element={<AboutUs/>}/>
          <Route />
        </Routes>
      </Layout>
    </div>
  )
}

export default App