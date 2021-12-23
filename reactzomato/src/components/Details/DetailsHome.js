import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from 'axios'
import './Detailshome.css'
import MenuItems from './MenuItems'
const resturl = "https://edu-zomatoapp.herokuapp.com/restaurants";
const restMenu = "https://edu-zomatoapp.herokuapp.com/menu"
class DetailsHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restData: '',
            menu: '',
            userItem: '',
            total: 0
        }


    }
    addToCart = (data, check, cost) => {
        console.log(cost, 'c', check, data)

        this.setState({ userItem: data });

        if (check !== 0 && this.state.total >= 0) {
            this.setState({ total: this.state.total + Number(cost) });
        } else if (check === 0 && this.state.total >= 0) {
            this.setState({ total: this.state.total - Number(cost) });
        }

    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.restData.restaurant_name}`)
    }
    render() {
        return (
            <Fragment>

                <div className="container">
                    {/* <Link to='/'><span class="label label-default bdcrm">Home</span></Link>
                    <span class=" bdcrm">/</span>
                    <span class="label label-info bdcrm">{this.state.product_category_name}</span> */}
                    <div class="top1">
                        <div className="restMainDiv">
                            <div className="restImageDiv">
                                <img src={this.state.restData.restaurant_thumb} alt={this.state.restData.restaurant_name} id="restImage" />
                            </div>

                        </div>
                        <div className='restExtraDiv'>
                            <div className="restName">

                                <h2>
                                    {this.state.restData.restaurant_name}
                                </h2>
                            </div>
                            <div
                                className="restAdd">
                                <h3>{this.state.restData.address}</h3>
                            </div>
                            <div className="restStarInfo">
                                <span className="label label-success" id="label">
                                    {this.state.restData.average_rating}<i class="fa fa-star" ></i>
                                </span>
                                <button className="btn btn-danger" onClick={this.proceed} ><span id="placeOrdertxt">Place Order</span></button>
                            </div>
                            <div>
                                <h3>Order Total: {this.state.total} </h3>

                            </div>
                        </div>
                    </div>
                    <div className='tabs'>
                        <Tabs>
                            <TabList>
                                <Tab> <h4>Menu to Order</h4></Tab>
                                <Tab><h4>More</h4></Tab>
                            </TabList>

                            <TabPanel>
                                <MenuItems menuItems={this.state.menu} finalOrder={(data, check, cost) => { this.addToCart(data, check, cost) }} />


                            </TabPanel>
                            <TabPanel>
                                <h2>More content</h2>
                            </TabPanel>
                        </Tabs>
                    </div>
                    {/* <div className="itemsDiv33">
                        <h4>Order Online</h4>
                        <hr id="orderLine" />
                        <MenuItems menuItems={this.state.menu} finalOrder={(data) => { this.addToCart(data) }} />
                    </div> */}

                </div>
            </Fragment >
        )
    }
    async componentDidMount() {
        const restId = this.props.match.params.restid;
        const response = await axios.get(`${resturl}/${restId}`);
        // console.log(response, 'res')
        const menuResponse = await axios.get(`${restMenu}/${restId}`)
        console.log(menuResponse, 'menuResponse')
        this.setState({ restData: response.data[0], menu: menuResponse.data })
    }
}

export default DetailsHome