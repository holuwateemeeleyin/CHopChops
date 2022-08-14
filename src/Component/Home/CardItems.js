import React from 'react'
import { AiFillStar } from 'react-icons/ai'

export default function CardItems(props) {
    const {food_name, price, rating, image} = props.food
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src= {image} alt='food' width='80%' />
            </div>
            <div className='card-text'>
                <div className='food-desc'>
                    <div className='food-name'>
                        {food_name}
                    </div>
                    <div className='food-rating'>
                        <AiFillStar color='#E3B32D' size={11}/> 
                        <div>{rating}</div>
                    </div>
                </div>
                <div className='food-desc2'>
                    <div className='add-cart'>
                        Add to cart
                    </div>
                    <div className='price'>
                        {price}
                    </div>
                </div>
            </div>
        </div>
    )
}
