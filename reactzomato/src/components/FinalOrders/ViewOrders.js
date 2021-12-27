import './ViewOrders.css';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Table from './Table'
const getOrder = "https://edu-zomatoapp.herokuapp.com/orders";

class ViewOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: ''
        };
    }
    

    render() {
        return (
            <Fragment>
                <div className="container">

                    <div className="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>

                                    <th>Order Number</th>
                                    <th>Restaurant</th>
                                    <th>Total Amount</th>
                                    <th>Payment Type</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <Table data={this.state.orders}/>
                                {/* {this.renderTable(this.state.orders)} */}
                                {/* <tr>
                                    <td>Anna</td>
                                    <td>Pitt</td>
                                    <td>35</td>
                                    <td>New York</td>
                                    <td>USA</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Fragment>
        )
    }
    componentDidMount() {
        axios.get(getOrder).then((res) => {
            console.log(res.data, 'res')
            this.setState({ orders: res.data })
        })
    }
}
export default ViewOrders;