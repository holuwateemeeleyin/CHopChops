import React from 'react'
import CardItems from './CardItems'
import { AiOutlineArrowRight } from 'react-icons/ai'
export default function HomeBottomview(props) {
    const { foodItems }= props
    console.log(foodItems);
    return (
        <div className='bottomview_container-parent'>
            <div className='bottomview-title'>
                <div className='title-left'>
                    Top Pick
                </div>
                <div className='title-right'>
                    See all foods {' '}
                    <AiOutlineArrowRight/>
                </div>
            </div>
            <div className='bottomview-card-container'>
                {
                    foodItems.map(item => (
                        <CardItems
                            key={item.id}
                            food={item}
                        />
                    ))
                }
            </div>
        </div>
    )
}
