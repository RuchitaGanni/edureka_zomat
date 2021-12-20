import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import MainBody from './MainBody/MainBody'
import DetailsHome from './Details/DetailsHome'
const Routing = () => {
   
        return (
            <BrowserRouter>
                <Header />
                
                <Route exact path="/" component = {HomePage}/>
                <Route  path="/filter/:mealTypeId" component={MainBody}/>
                <Route path="/menu/:restid" component={DetailsHome}/>
            </BrowserRouter>
        )
    
}

export default Routing