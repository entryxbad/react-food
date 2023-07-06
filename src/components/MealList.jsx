import React from 'react'
import Meal from './Meal'

const MealList = ({ meals }) => {
    return (
        <div className='list'>
            {meals.map((item) => (
                <Meal key={item.idMeal} {...item} />
            ))}
        </div>
    )
}

export default MealList
