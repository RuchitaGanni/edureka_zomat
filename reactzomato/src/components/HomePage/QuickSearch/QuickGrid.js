import React, { Component, Fragment } from 'react';
import './Quick.css';
import { Link } from 'react-router-dom'

const QuickGrid = (props) => {
    let renderMeal = '';
    let cnt = 0;
    if (props.mealTypes) {
        renderMeal =
            props.mealTypes.map((item) => {

                return (

                    <Link to={`/filter/${item.mealtype_id}`} key={item.mealtype_id} value={item.mealtype}>
                        <div id="search_items">

                            <div class="srcImage">

                                <img src={item.meal_image} alt={item.meal_image} id="searchImg" />

                            </div>
                            <div class="srcText">
                                <h3>{item.mealtype}</h3>
                                <p>Pass time with tasty bites</p>
                            </div>

                        </div>
                    </Link >

                )
            })
    }


    return (
        <>
            <div className="row">
                {renderMeal}
            </div>
        </>
    )



}

export default QuickGrid