import React, { Component, Fragment } from 'react';
import './Quick.css';
import { Link } from 'react-router-dom'

const QuickGrid = (props) => {
    let renderMeal = '';
    let cnt = 0;
    if (props.mealTypes.length > 0) {
        if (props.mealTypes) {
            renderMeal =
                props.mealTypes.map((item) => {

                    return (

                        <Link to={`/filter/${item.mealtype_id}`} key={item.mealtype_id}   style={{textDecoration: 'none' }} activeStyle={{textDecoration: 'none'}}>
                            <div id="search_items">

                                <div class="srcImage">

                                    <img src={item.meal_image} alt={item.meal_image} id="searchImg" />

                                </div>
                                <div class="srcText">
                                    <h3 style={{ textDecoration: 'none' }}>{item.mealtype}</h3>
                                    <p style={{ textDecoration: 'none' }}>Pass time with tasty bites</p>
                                </div>

                            </div>
                        </Link >

                    )
                })
        }
    } else {
        renderMeal =
            <img src="/assests/loader2.gif" alt="loading..." id="loaderGIF"  />

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