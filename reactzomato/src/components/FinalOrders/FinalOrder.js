import React, { Component, Fragment } from 'react';
import './FinalOrder.css';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';

const menuUrl = "https://edu-zomatoapp.herokuapp.com/menuItem"
const placeOrderUrl = "https://edu-zomatoapp.herokuapp.com/placeOrder"

class FinalOrder extends Component {

    constructor(props) {

        super(props)
        this.state = {
            id: Math.floor(Math.random() * 100000),
            hotel_name: this.props.match.params.restName,
            name: 'Aakash',
            phone: '987654324',
            email: 'aakash@gmail.com',
            cost: 0,
            address: 'Uppal,HyderabadHno123',
            menuItems: '',
            restname: '',
            status: 'Order Placed',
            showSuccessAlert: false

        }


    }
    renderItems = (data) => {
        if (data) {
            return data.map((item, index) => {
                return (
                    <div className="orderItems" key={index}>

                        <div className="orderImgDiv">

                            <img src={item.img} alt={item.name} id="orderImg" />

                        </div>
                        <div className="orderTxtDiv">
                            <span className="orderTxt">
                                {item.name}
                            </span>


                        </div>


                    </div>
                )
            })
        }
    }
    placeOrder = () => {
        console.log("here")
        fetch(placeOrderUrl, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
            .then(this.props.history.push('/viewOrders'))
            // .then(

            //     this.setState({ showSuccessAlert: true,status:'Order Placed' })
            // )
    }
    render() {
        return (
            <Fragment>
                <div className="container">
                    <div>
                        {this.state.showSuccessAlert &&
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            this.setState({ showSuccessAlert: false })
                                            //   setOpen(false);
                                        }}
                                    >
                                       <i class="fa fa-times" style={{color:'black'}}></i>
                                    </IconButton>
                                }

                            >
                                <span className="finalPrice">{this.state.status}</span> 
                            </Alert>

                        }

                    </div>
                    <h2>Checkout</h2>
                    <div>
                        <h3>Order from : {this.state.restname}</h3>
                    </div>
                    <hr />
                    <span className="finalPrice">Total Amount : &#8377; {this.state.cost}</span>
                    {/* <h4></h4> */}
                    <button className="btn btn-danger pull-right" onClick={this.placeOrder} id="btnTXT">Place Order</button>


                    <hr />
                    <div>
                        <h3>
                            Address:Uppal,Hyderabad
                        </h3>

                    </div>
                    <hr />
                    <h5><strong>Order Summary</strong></h5>
                    <div style={{ width: '100%' }}>{this.renderItems(this.state.menuItems)}</div>



                </div>

            </Fragment >

        )


    }
    componentDidMount() {
        const restName = this.props.match.params.restName;
        this.setState({ restname: restName });
        let menuItems = sessionStorage.getItem('menu')
        let menuIds = []
        menuItems.split(',').map((item) => {
            menuIds.push(parseInt(item))
            console.log(JSON.stringify(menuIds), 'mds')
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
                console.log(data, 'data')
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
                this.setState({ cost: totalPrice, menuItems: menuDetails })
            })
    }
}

export default FinalOrder