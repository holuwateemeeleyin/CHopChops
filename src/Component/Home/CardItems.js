import React from 'react'

export default function CardItems(props) {
    const {food_name, price, isRating, rating, image} = props.food
    console.log(image);
    return (
        <div className='card-container'>
            <div className='card-image'>
                <img src= {image} width='80%' />
            </div>
            <div className='card-text'>
                <div className='food-desc'>
                    <div className='food-name'>
                        {food_name}
                    </div>
                    <div className='food-rating'>
                        star
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
