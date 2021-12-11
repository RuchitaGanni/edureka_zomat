import React, { Component, Fragment } from 'react';
import './Search.css';
const LocationsUrl = 'https://edu-zomatoapp.herokuapp.com/locations';
const restaurantsUrl = 'https://edu-zomatoapp.herokuapp.com/restaurants?city='
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: '',
            restaurants: ''
        }
    }
    // load city from API
    renderCity = (data) => {
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item.location_id} value={item.state_id}>
                        {item.location_name}
                    </option>
                )
            })
        }
    }

    renderRestaurants = (data) => {
        
        if (data) {
            return data.map((item) => {
                return (
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
    handleRest = (event) => {
        
        console.log(event.target.value)
        fetch(`${restaurantsUrl}${event.target.value}`, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ restaurants: data })
            })
    }
    render() {
        return (
            <Fragment>
                <div className="row" id="selectBox">
                    <div
                        className=" col-xs-4 col-sm-4 col-md-3 col-lg-3 ">

                        <select class="form-control" onChange={this.handleRest}>
                            <option>Select City</option>
                            {this.renderCity(this.state.locations)}
                        </select>

                    </div>
                    <div
                        className=" col-xs-5 col-sm-5 col-md-4 col-lg-4">
                        <select class="form-control">
                            <option>Select Restaurants</option>
                            {this.renderRestaurants(this.state.restaurants)}
                        </select>
                    </div>
                </div>
            </Fragment >
        )
    }
    //on page load call api method  
    componentDidMount() {

        fetch(LocationsUrl, { method: 'GET' })
            .then((res) => res.json())
            .then((data) => {
                this.setState({ locations: data })
            })
    }

}

export default Search