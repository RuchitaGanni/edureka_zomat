import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header/Header'
import HomePage from './HomePage/HomePage'
import MainBody from './MainBody/MainBody'
import DetailsHome from './Details/DetailsHome'
import FinalOrder from './FinalOrders/FinalOrder'
import ViewOrders from './FinalOrders/ViewOrders';
const Routing = () => {
   
        return (
            <BrowserRouter>
                <Header />
                
                <Route exact path="/" component = {HomePage}/>
                <Route  path="/filter/:mealTypeId" component={MainBody}/>
                <Route path="/menu/:restid" component={DetailsHome}/>
                <Route path="/placeOrder/:restName" component={FinalOrder}/>
                <Route path="/viewOrders" component={ViewOrders}/>
            </BrowserRouter>
        )
    
}

export default Routing