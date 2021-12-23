import React, { Component, Fragment } from 'react';
import axios from 'axios'
const menuUrl = "https://edu-zomatoapp.herokuapp.com/menuItem"

class FinalOrder extends Component {
    constructor(props) {
        super(props)
        this.state={
            // id:Math.floor(Math.random()*100000),
            // hotel_name:this.props.match.params.restName,
            // name:'Aakash',
            // phone:'987654324',
            // email:'aakash@gmail.com',
            cost:0,
            // address:'Hno123',
            menuItems:''

        }
       
    }
    renderItems = (data) => {
        if(data){
            return data.map((item,index) => {
                return(
                    <div className="orderItems" key={index}>
                        <img src={item.img} alt={item.name}/>
                        <h3>{item.name}</h3>
                    </div>
                )
            })
        }
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                {this.renderItems(this.state.menuItems)}
                </div>

            </Fragment >

        )


    }
    componentDidMount() {
        let menuItems = sessionStorage.getItem('menu')
        let menuIds = []
        menuItems.split(',').map((item) => {
            menuIds.push(parseInt(item))
            console.log(JSON.stringify(menuIds),'mds')
            return 'ok'
        })
        fetch(menuUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(menuIds)
        
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data,'data')
                let menuDetails = [];
                let totalPrice = 0;
                data.map((item) => {
                    var myObj = {}
                    totalPrice = totalPrice + parseInt(item.menu_price)
                    myObj.name = item.menu_name;
                    myObj.img = item.menu_image
                    menuDetails.push(myObj);
                    return 'ok'
                })
                this.setState({cost:totalPrice,menuItems:menuDetails})
            })
    }
}

export default FinalOrder